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
    builder.EntitySet<SERVICEBID>("SERVICEBIDs");
    builder.EntitySet<SERVICEBIDNEEDFILE>("SERVICEBIDNEEDFILES"); 
    builder.EntitySet<USERINFO>("USERINFOes"); 
    builder.EntitySet<USERSERVICENEED>("USERSERVICENEEDs"); 
    config.Routes.MapODataRoute("odata", "odata", builder.GetEdmModel());
    */
    public class SERVICEBIDsController : ODataController
    {
        private myserviceneedEntities db = new myserviceneedEntities();

        // GET: odata/SERVICEBIDs
        [Queryable]
        public IQueryable<SERVICEBID> GetSERVICEBIDs()
        {
            return db.SERVICEBIDs;
        }

        // GET: odata/SERVICEBIDs(5)
        [Queryable]
        public SingleResult<SERVICEBID> GetSERVICEBID([FromODataUri] decimal key)
        {
            return SingleResult.Create(db.SERVICEBIDs.Where(sERVICEBID => sERVICEBID.ID == key));
        }

        // PUT: odata/SERVICEBIDs(5)
        public IHttpActionResult Put([FromODataUri] decimal key, SERVICEBID sERVICEBID)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (key != sERVICEBID.ID)
            {
                return BadRequest();
            }

            db.Entry(sERVICEBID).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SERVICEBIDExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(sERVICEBID);
        }

        // POST: odata/SERVICEBIDs
        public IHttpActionResult Post(SERVICEBID sERVICEBID)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.SERVICEBIDs.Add(sERVICEBID);
            db.SaveChanges();

            return Created(sERVICEBID);
        }

        // PATCH: odata/SERVICEBIDs(5)
        [AcceptVerbs("PATCH", "MERGE")]
        public IHttpActionResult Patch([FromODataUri] decimal key, Delta<SERVICEBID> patch)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            SERVICEBID sERVICEBID = db.SERVICEBIDs.Find(key);
            if (sERVICEBID == null)
            {
                return NotFound();
            }

            patch.Patch(sERVICEBID);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SERVICEBIDExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(sERVICEBID);
        }

        // DELETE: odata/SERVICEBIDs(5)
        public IHttpActionResult Delete([FromODataUri] decimal key)
        {
            SERVICEBID sERVICEBID = db.SERVICEBIDs.Find(key);
            if (sERVICEBID == null)
            {
                return NotFound();
            }

            db.SERVICEBIDs.Remove(sERVICEBID);
            db.SaveChanges();

            return StatusCode(HttpStatusCode.NoContent);
        }

        // GET: odata/SERVICEBIDs(5)/SERVICEBIDNEEDFILES
        [Queryable]
        public IQueryable<SERVICEBIDNEEDFILE> GetSERVICEBIDNEEDFILES([FromODataUri] decimal key)
        {
            return db.SERVICEBIDs.Where(m => m.ID == key).SelectMany(m => m.SERVICEBIDNEEDFILES);
        }

        // GET: odata/SERVICEBIDs(5)/USERINFO
        [Queryable]
        public SingleResult<USERINFO> GetUSERINFO([FromODataUri] decimal key)
        {
            return SingleResult.Create(db.SERVICEBIDs.Where(m => m.ID == key).Select(m => m.USERINFO));
        }

        // GET: odata/SERVICEBIDs(5)/USERSERVICENEED
        [Queryable]
        public SingleResult<USERSERVICENEED> GetUSERSERVICENEED([FromODataUri] decimal key)
        {
            return SingleResult.Create(db.SERVICEBIDs.Where(m => m.ID == key).Select(m => m.USERSERVICENEED));
        }

        // GET: odata/SERVICEBIDs(5)/USERSERVICENEEDs
        [Queryable]
        public IQueryable<USERSERVICENEED> GetUSERSERVICENEEDs([FromODataUri] decimal key)
        {
            return db.SERVICEBIDs.Where(m => m.ID == key).SelectMany(m => m.USERSERVICENEEDs);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool SERVICEBIDExists(decimal key)
        {
            return db.SERVICEBIDs.Count(e => e.ID == key) > 0;
        }
    }
}
