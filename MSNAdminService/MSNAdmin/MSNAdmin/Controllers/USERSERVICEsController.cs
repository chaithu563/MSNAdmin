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

    using System.Web.OData.Builder;
    using MSNAdmin.Models;
    ODataConventionModelBuilder builder = new ODataConventionModelBuilder();
    builder.EntitySet<USERSERVICE>("USERSERVICEs");
    builder.EntitySet<SERVICECATEGORY>("SERVICECATEGORies"); 
    builder.EntitySet<SERVICESUBCATEGORY>("SERVICESUBCATEGORies"); 
    builder.EntitySet<USERINFO>("USERINFOes"); 
    config.Routes.MapODataRoute("odata", "odata", builder.GetEdmModel());
    */
    public class USERSERVICEsController : ODataController
    {
        private myserviceneedEntities db = new myserviceneedEntities();

        // GET: odata/USERSERVICEs
        [Queryable]
        public IQueryable<USERSERVICE> GetUSERSERVICEs()
        {
            return db.USERSERVICEs;
        }

        // GET: odata/USERSERVICEs(5)
        [Queryable]
        public SingleResult<USERSERVICE> GetUSERSERVICE([FromODataUri] decimal key)
        {
            return SingleResult.Create(db.USERSERVICEs.Where(uSERSERVICE => uSERSERVICE.ID == key));
        }

        // PUT: odata/USERSERVICEs(5)
        public IHttpActionResult Put([FromODataUri] decimal key, USERSERVICE uSERSERVICE)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (key != uSERSERVICE.ID)
            {
                return BadRequest();
            }

            db.Entry(uSERSERVICE).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!USERSERVICEExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(uSERSERVICE);
        }

        // POST: odata/USERSERVICEs
        public IHttpActionResult Post(USERSERVICE uSERSERVICE)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.USERSERVICEs.Add(uSERSERVICE);
            db.SaveChanges();

            return Created(uSERSERVICE);
        }

        // PATCH: odata/USERSERVICEs(5)
        [AcceptVerbs("PATCH", "MERGE")]
        public IHttpActionResult Patch([FromODataUri] decimal key, Delta<USERSERVICE> patch)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            USERSERVICE uSERSERVICE = db.USERSERVICEs.Find(key);
            if (uSERSERVICE == null)
            {
                return NotFound();
            }

            patch.Patch(uSERSERVICE);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!USERSERVICEExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(uSERSERVICE);
        }

        // DELETE: odata/USERSERVICEs(5)
        public IHttpActionResult Delete([FromODataUri] decimal key)
        {
            USERSERVICE uSERSERVICE = db.USERSERVICEs.Find(key);
            if (uSERSERVICE == null)
            {
                return NotFound();
            }

            db.USERSERVICEs.Remove(uSERSERVICE);
            db.SaveChanges();

            return StatusCode(HttpStatusCode.NoContent);
        }

        // GET: odata/USERSERVICEs(5)/SERVICECATEGORY
        [Queryable]
        public SingleResult<SERVICECATEGORY> GetSERVICECATEGORY([FromODataUri] decimal key)
        {
            return SingleResult.Create(db.USERSERVICEs.Where(m => m.ID == key).Select(m => m.SERVICECATEGORY));
        }

        // GET: odata/USERSERVICEs(5)/SERVICESUBCATEGORY
        [Queryable]
        public SingleResult<SERVICESUBCATEGORY> GetSERVICESUBCATEGORY([FromODataUri] decimal key)
        {
            return SingleResult.Create(db.USERSERVICEs.Where(m => m.ID == key).Select(m => m.SERVICESUBCATEGORY));
        }

        // GET: odata/USERSERVICEs(5)/USERINFO
        [Queryable]
        public SingleResult<USERINFO> GetUSERINFO([FromODataUri] decimal key)
        {
            return SingleResult.Create(db.USERSERVICEs.Where(m => m.ID == key).Select(m => m.USERINFO));
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool USERSERVICEExists(decimal key)
        {
            return db.USERSERVICEs.Count(e => e.ID == key) > 0;
        }
    }
}
