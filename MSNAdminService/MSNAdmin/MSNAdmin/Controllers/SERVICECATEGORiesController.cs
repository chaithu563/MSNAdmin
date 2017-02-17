using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.ModelBinding;
using System.Web.OData;
using System.Web.OData.Routing;
using MSNAdmin.Models;

namespace MSNAdmin.Controllers
{
    /*
    The WebApiConfig class may require additional changes to add a route for this controller. Merge these statements into the Register method of the WebApiConfig class as applicable. Note that OData URLs are case sensitive.

    using System.Web.Http.OData.Builder;
    using MSNAdmin.Models;
    ODataConventionModelBuilder builder = new ODataConventionModelBuilder();
    builder.EntitySet<SERVICECATEGORY>("SERVICECATEGORies");
    builder.EntitySet<SERVICESUBCATEGORY>("SERVICESUBCATEGORies"); 
    builder.EntitySet<USERSERVICE>("USERSERVICEs"); 
    builder.EntitySet<USERSERVICENEED>("USERSERVICENEEDs"); 
    config.Routes.MapODataRoute("odata", "odata", builder.GetEdmModel());
    */
    public class SERVICECATEGORiesController : ODataController
    {
        private myserviceneedEntities db = new myserviceneedEntities();

        // GET: odata/SERVICECATEGORies
        [Queryable]
        public IQueryable<SERVICECATEGORY> GetSERVICECATEGORies()
        {
            return db.SERVICECATEGORies;
        }

        // GET: odata/SERVICECATEGORies(5)
        [Queryable]
        public SingleResult<SERVICECATEGORY> GetSERVICECATEGORY([FromODataUri] decimal key)
        {
            return SingleResult.Create(db.SERVICECATEGORies.Where(sERVICECATEGORY => sERVICECATEGORY.ID == key));
        }

        // PUT: odata/SERVICECATEGORies(5)
        public IHttpActionResult Put([FromODataUri] decimal key, SERVICECATEGORY sERVICECATEGORY)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (key != sERVICECATEGORY.ID)
            {
                return BadRequest();
            }

            db.Entry(sERVICECATEGORY).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SERVICECATEGORYExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(sERVICECATEGORY);
        }

        // POST: odata/SERVICECATEGORies
        public IHttpActionResult Post(SERVICECATEGORY sERVICECATEGORY)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.SERVICECATEGORies.Add(sERVICECATEGORY);
            db.SaveChanges();

            return Created(sERVICECATEGORY);
        }

        // PATCH: odata/SERVICECATEGORies(5)
        [AcceptVerbs("PATCH", "MERGE")]
        public IHttpActionResult Patch([FromODataUri] decimal key, Delta<SERVICECATEGORY> patch)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            SERVICECATEGORY sERVICECATEGORY = db.SERVICECATEGORies.Find(key);
            if (sERVICECATEGORY == null)
            {
                return NotFound();
            }

            patch.Patch(sERVICECATEGORY);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SERVICECATEGORYExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(sERVICECATEGORY);
        }

        // DELETE: odata/SERVICECATEGORies(5)
        public IHttpActionResult Delete([FromODataUri] decimal key)
        {
            SERVICECATEGORY sERVICECATEGORY = db.SERVICECATEGORies.Find(key);
            if (sERVICECATEGORY == null)
            {
                return NotFound();
            }

            db.SERVICECATEGORies.Remove(sERVICECATEGORY);
            db.SaveChanges();

            return StatusCode(HttpStatusCode.NoContent);
        }

        // GET: odata/SERVICECATEGORies(5)/SERVICESUBCATEGORies
        [Queryable]
        public IQueryable<SERVICESUBCATEGORY> GetSERVICESUBCATEGORies([FromODataUri] decimal key)
        {
            return db.SERVICECATEGORies.Where(m => m.ID == key).SelectMany(m => m.SERVICESUBCATEGORies);
        }

        // GET: odata/SERVICECATEGORies(5)/USERSERVICEs
        [Queryable]
        public IQueryable<USERSERVICE> GetUSERSERVICEs([FromODataUri] decimal key)
        {
            return db.SERVICECATEGORies.Where(m => m.ID == key).SelectMany(m => m.USERSERVICEs);
        }

        // GET: odata/SERVICECATEGORies(5)/USERSERVICENEEDs
        [Queryable]
        public IQueryable<USERSERVICENEED> GetUSERSERVICENEEDs([FromODataUri] decimal key)
        {
            return db.SERVICECATEGORies.Where(m => m.ID == key).SelectMany(m => m.USERSERVICENEEDs);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool SERVICECATEGORYExists(decimal key)
        {
            return db.SERVICECATEGORies.Count(e => e.ID == key) > 0;
        }
    }
}
