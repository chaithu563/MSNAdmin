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
    builder.EntitySet<USERSERVICETIMERECORD>("USERSERVICETIMERECORDs");
    builder.EntitySet<USERSERVICENEED>("USERSERVICENEEDs"); 
    config.Routes.MapODataRoute("odata", "odata", builder.GetEdmModel());
    */
    public class USERSERVICETIMERECORDsController : ODataController
    {
        private myserviceneedEntities db = new myserviceneedEntities();

        // GET: odata/USERSERVICETIMERECORDs
        [Queryable]
        public IQueryable<USERSERVICETIMERECORD> GetUSERSERVICETIMERECORDs()
        {
            return db.USERSERVICETIMERECORDs;
        }

        // GET: odata/USERSERVICETIMERECORDs(5)
        [Queryable]
        public SingleResult<USERSERVICETIMERECORD> GetUSERSERVICETIMERECORD([FromODataUri] decimal key)
        {
            return SingleResult.Create(db.USERSERVICETIMERECORDs.Where(uSERSERVICETIMERECORD => uSERSERVICETIMERECORD.ID == key));
        }

        // PUT: odata/USERSERVICETIMERECORDs(5)
        public IHttpActionResult Put([FromODataUri] decimal key, USERSERVICETIMERECORD uSERSERVICETIMERECORD)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (key != uSERSERVICETIMERECORD.ID)
            {
                return BadRequest();
            }

            db.Entry(uSERSERVICETIMERECORD).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!USERSERVICETIMERECORDExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(uSERSERVICETIMERECORD);
        }

        // POST: odata/USERSERVICETIMERECORDs
        public IHttpActionResult Post(USERSERVICETIMERECORD uSERSERVICETIMERECORD)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.USERSERVICETIMERECORDs.Add(uSERSERVICETIMERECORD);
            db.SaveChanges();

            return Created(uSERSERVICETIMERECORD);
        }

        // PATCH: odata/USERSERVICETIMERECORDs(5)
        [AcceptVerbs("PATCH", "MERGE")]
        public IHttpActionResult Patch([FromODataUri] decimal key, Delta<USERSERVICETIMERECORD> patch)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            USERSERVICETIMERECORD uSERSERVICETIMERECORD = db.USERSERVICETIMERECORDs.Find(key);
            if (uSERSERVICETIMERECORD == null)
            {
                return NotFound();
            }

            patch.Patch(uSERSERVICETIMERECORD);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!USERSERVICETIMERECORDExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(uSERSERVICETIMERECORD);
        }

        // DELETE: odata/USERSERVICETIMERECORDs(5)
        public IHttpActionResult Delete([FromODataUri] decimal key)
        {
            USERSERVICETIMERECORD uSERSERVICETIMERECORD = db.USERSERVICETIMERECORDs.Find(key);
            if (uSERSERVICETIMERECORD == null)
            {
                return NotFound();
            }

            db.USERSERVICETIMERECORDs.Remove(uSERSERVICETIMERECORD);
            db.SaveChanges();

            return StatusCode(HttpStatusCode.NoContent);
        }

        // GET: odata/USERSERVICETIMERECORDs(5)/USERSERVICENEEDs
        [Queryable]
        public IQueryable<USERSERVICENEED> GetUSERSERVICENEEDs([FromODataUri] decimal key)
        {
            return db.USERSERVICETIMERECORDs.Where(m => m.ID == key).SelectMany(m => m.USERSERVICENEEDs);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool USERSERVICETIMERECORDExists(decimal key)
        {
            return db.USERSERVICETIMERECORDs.Count(e => e.ID == key) > 0;
        }
    }
}
