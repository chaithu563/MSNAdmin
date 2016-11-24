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
    builder.EntitySet<SERVICESTATE>("SERVICESTATEs");
    builder.EntitySet<USERSERVICENEED>("USERSERVICENEEDs"); 
    config.Routes.MapODataRoute("odata", "odata", builder.GetEdmModel());
    */
    public class SERVICESTATEsController : ODataController
    {
        private myserviceneedEntities db = new myserviceneedEntities();

        // GET: odata/SERVICESTATEs
        [Queryable]
        public IQueryable<SERVICESTATE> GetSERVICESTATEs()
        {
            return db.SERVICESTATEs;
        }

        // GET: odata/SERVICESTATEs(5)
        [Queryable]
        public SingleResult<SERVICESTATE> GetSERVICESTATE([FromODataUri] int key)
        {
            return SingleResult.Create(db.SERVICESTATEs.Where(sERVICESTATE => sERVICESTATE.ID == key));
        }

        // PUT: odata/SERVICESTATEs(5)
        public IHttpActionResult Put([FromODataUri] int key, SERVICESTATE sERVICESTATE)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (key != sERVICESTATE.ID)
            {
                return BadRequest();
            }

            db.Entry(sERVICESTATE).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SERVICESTATEExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(sERVICESTATE);
        }

        // POST: odata/SERVICESTATEs
        public IHttpActionResult Post(SERVICESTATE sERVICESTATE)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.SERVICESTATEs.Add(sERVICESTATE);
            db.SaveChanges();

            return Created(sERVICESTATE);
        }

        // PATCH: odata/SERVICESTATEs(5)
        [AcceptVerbs("PATCH", "MERGE")]
        public IHttpActionResult Patch([FromODataUri] int key, Delta<SERVICESTATE> patch)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            SERVICESTATE sERVICESTATE = db.SERVICESTATEs.Find(key);
            if (sERVICESTATE == null)
            {
                return NotFound();
            }

            patch.Patch(sERVICESTATE);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SERVICESTATEExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(sERVICESTATE);
        }

        // DELETE: odata/SERVICESTATEs(5)
        public IHttpActionResult Delete([FromODataUri] int key)
        {
            SERVICESTATE sERVICESTATE = db.SERVICESTATEs.Find(key);
            if (sERVICESTATE == null)
            {
                return NotFound();
            }

            db.SERVICESTATEs.Remove(sERVICESTATE);
            db.SaveChanges();

            return StatusCode(HttpStatusCode.NoContent);
        }

        // GET: odata/SERVICESTATEs(5)/USERSERVICENEEDs
        [Queryable]
        public IQueryable<USERSERVICENEED> GetUSERSERVICENEEDs([FromODataUri] int key)
        {
            return db.SERVICESTATEs.Where(m => m.ID == key).SelectMany(m => m.USERSERVICENEEDs);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool SERVICESTATEExists(int key)
        {
            return db.SERVICESTATEs.Count(e => e.ID == key) > 0;
        }
    }
}
