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
    builder.EntitySet<SERVICETIMETYPE>("SERVICETIMETYPEs");
    builder.EntitySet<USERSERVICENEED>("USERSERVICENEEDs"); 
    config.Routes.MapODataRoute("odata", "odata", builder.GetEdmModel());
    */
    public class SERVICETIMETYPEsController : ODataController
    {
        private myserviceneedEntities db = new myserviceneedEntities();

        // GET: odata/SERVICETIMETYPEs
        [Queryable]
        public IQueryable<SERVICETIMETYPE> GetSERVICETIMETYPEs()
        {
            return db.SERVICETIMETYPEs;
        }

        // GET: odata/SERVICETIMETYPEs(5)
        [Queryable]
        public SingleResult<SERVICETIMETYPE> GetSERVICETIMETYPE([FromODataUri] int key)
        {
            return SingleResult.Create(db.SERVICETIMETYPEs.Where(sERVICETIMETYPE => sERVICETIMETYPE.ID == key));
        }

        // PUT: odata/SERVICETIMETYPEs(5)
        public IHttpActionResult Put([FromODataUri] int key, SERVICETIMETYPE sERVICETIMETYPE)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (key != sERVICETIMETYPE.ID)
            {
                return BadRequest();
            }

            db.Entry(sERVICETIMETYPE).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SERVICETIMETYPEExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(sERVICETIMETYPE);
        }

        // POST: odata/SERVICETIMETYPEs
        public IHttpActionResult Post(SERVICETIMETYPE sERVICETIMETYPE)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.SERVICETIMETYPEs.Add(sERVICETIMETYPE);
            db.SaveChanges();

            return Created(sERVICETIMETYPE);
        }

        // PATCH: odata/SERVICETIMETYPEs(5)
        [AcceptVerbs("PATCH", "MERGE")]
        public IHttpActionResult Patch([FromODataUri] int key, Delta<SERVICETIMETYPE> patch)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            SERVICETIMETYPE sERVICETIMETYPE = db.SERVICETIMETYPEs.Find(key);
            if (sERVICETIMETYPE == null)
            {
                return NotFound();
            }

            patch.Patch(sERVICETIMETYPE);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SERVICETIMETYPEExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(sERVICETIMETYPE);
        }

        // DELETE: odata/SERVICETIMETYPEs(5)
        public IHttpActionResult Delete([FromODataUri] int key)
        {
            SERVICETIMETYPE sERVICETIMETYPE = db.SERVICETIMETYPEs.Find(key);
            if (sERVICETIMETYPE == null)
            {
                return NotFound();
            }

            db.SERVICETIMETYPEs.Remove(sERVICETIMETYPE);
            db.SaveChanges();

            return StatusCode(HttpStatusCode.NoContent);
        }

        // GET: odata/SERVICETIMETYPEs(5)/USERSERVICENEEDs
        [Queryable]
        public IQueryable<USERSERVICENEED> GetUSERSERVICENEEDs([FromODataUri] int key)
        {
            return db.SERVICETIMETYPEs.Where(m => m.ID == key).SelectMany(m => m.USERSERVICENEEDs);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool SERVICETIMETYPEExists(int key)
        {
            return db.SERVICETIMETYPEs.Count(e => e.ID == key) > 0;
        }
    }
}
