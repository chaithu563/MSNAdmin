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
using System.Web.Http.OData;
using System.Web.Http.OData.Routing;
using MSNAdmin.Models;

namespace MSNAdmin.Controllers
{
    /*
    The WebApiConfig class may require additional changes to add a route for this controller. Merge these statements into the Register method of the WebApiConfig class as applicable. Note that OData URLs are case sensitive.

    using System.Web.Http.OData.Builder;
    using MSNAdmin.Models;
    ODataConventionModelBuilder builder = new ODataConventionModelBuilder();
    builder.EntitySet<USERSERVICENEED>("USERSERVICENEEDs");
    builder.EntitySet<SERVICEBID>("SERVICEBIDs"); 
    builder.EntitySet<SERVICECATEGORY>("SERVICECATEGORies"); 
    builder.EntitySet<SERVICESTATE>("SERVICESTATEs"); 
    builder.EntitySet<SERVICESUBCATEGORY>("SERVICESUBCATEGORies"); 
    builder.EntitySet<SERVICETIMETYPE>("SERVICETIMETYPEs"); 
    builder.EntitySet<USERINFO>("USERINFOes"); 
    config.Routes.MapODataRoute("odata", "odata", builder.GetEdmModel());
    */
    public class USERSERVICENEEDsController : ODataController
    {
        private myserviceneedEntities db = new myserviceneedEntities();

        // GET: odata/USERSERVICENEEDs
        [Queryable]
        public IQueryable<USERSERVICENEED> GetUSERSERVICENEEDs()
        {
            return db.USERSERVICENEEDs;
        }

        // GET: odata/USERSERVICENEEDs(5)
        [Queryable]
        public SingleResult<USERSERVICENEED> GetUSERSERVICENEED([FromODataUri] decimal key)
        {
            return SingleResult.Create(db.USERSERVICENEEDs.Where(uSERSERVICENEED => uSERSERVICENEED.ID == key));
        }

        // PUT: odata/USERSERVICENEEDs(5)
        public IHttpActionResult Put([FromODataUri] decimal key, USERSERVICENEED uSERSERVICENEED)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (key != uSERSERVICENEED.ID)
            {
                return BadRequest();
            }

            db.Entry(uSERSERVICENEED).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!USERSERVICENEEDExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(uSERSERVICENEED);
        }

        // POST: odata/USERSERVICENEEDs
        public IHttpActionResult Post(USERSERVICENEED uSERSERVICENEED)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.USERSERVICENEEDs.Add(uSERSERVICENEED);
            db.SaveChanges();

            return Created(uSERSERVICENEED);
        }

        // PATCH: odata/USERSERVICENEEDs(5)
        [AcceptVerbs("PATCH", "MERGE")]
        public IHttpActionResult Patch([FromODataUri] decimal key, Delta<USERSERVICENEED> patch)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            USERSERVICENEED uSERSERVICENEED = db.USERSERVICENEEDs.Find(key);
            if (uSERSERVICENEED == null)
            {
                return NotFound();
            }

            patch.Patch(uSERSERVICENEED);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!USERSERVICENEEDExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(uSERSERVICENEED);
        }

        // DELETE: odata/USERSERVICENEEDs(5)
        public IHttpActionResult Delete([FromODataUri] decimal key)
        {
            USERSERVICENEED uSERSERVICENEED = db.USERSERVICENEEDs.Find(key);
            if (uSERSERVICENEED == null)
            {
                return NotFound();
            }

            db.USERSERVICENEEDs.Remove(uSERSERVICENEED);
            db.SaveChanges();

            return StatusCode(HttpStatusCode.NoContent);
        }

        // GET: odata/USERSERVICENEEDs(5)/SERVICEBIDs
        [Queryable]
        public IQueryable<SERVICEBID> GetSERVICEBIDs([FromODataUri] decimal key)
        {
            return db.USERSERVICENEEDs.Where(m => m.ID == key).SelectMany(m => m.SERVICEBIDs);
        }

        // GET: odata/USERSERVICENEEDs(5)/SERVICEBID
        [Queryable]
        public SingleResult<SERVICEBID> GetSERVICEBID([FromODataUri] decimal key)
        {
            return SingleResult.Create(db.USERSERVICENEEDs.Where(m => m.ID == key).Select(m => m.SERVICEBID));
        }

        // GET: odata/USERSERVICENEEDs(5)/SERVICECATEGORY
        [Queryable]
        public SingleResult<SERVICECATEGORY> GetSERVICECATEGORY([FromODataUri] decimal key)
        {
            return SingleResult.Create(db.USERSERVICENEEDs.Where(m => m.ID == key).Select(m => m.SERVICECATEGORY));
        }

        // GET: odata/USERSERVICENEEDs(5)/SERVICESTATE1
        [Queryable]
        public SingleResult<SERVICESTATE> GetSERVICESTATE1([FromODataUri] decimal key)
        {
            return SingleResult.Create(db.USERSERVICENEEDs.Where(m => m.ID == key).Select(m => m.SERVICESTATE1));
        }

        // GET: odata/USERSERVICENEEDs(5)/SERVICESUBCATEGORY
        [Queryable]
        public SingleResult<SERVICESUBCATEGORY> GetSERVICESUBCATEGORY([FromODataUri] decimal key)
        {
            return SingleResult.Create(db.USERSERVICENEEDs.Where(m => m.ID == key).Select(m => m.SERVICESUBCATEGORY));
        }

        // GET: odata/USERSERVICENEEDs(5)/SERVICETIMETYPE1
        [Queryable]
        public SingleResult<SERVICETIMETYPE> GetSERVICETIMETYPE1([FromODataUri] decimal key)
        {
            return SingleResult.Create(db.USERSERVICENEEDs.Where(m => m.ID == key).Select(m => m.SERVICETIMETYPE1));
        }

        // GET: odata/USERSERVICENEEDs(5)/USERINFO
        [Queryable]
        public SingleResult<USERINFO> GetUSERINFO([FromODataUri] decimal key)
        {
            return SingleResult.Create(db.USERSERVICENEEDs.Where(m => m.ID == key).Select(m => m.USERINFO));
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool USERSERVICENEEDExists(decimal key)
        {
            return db.USERSERVICENEEDs.Count(e => e.ID == key) > 0;
        }
    }
}
