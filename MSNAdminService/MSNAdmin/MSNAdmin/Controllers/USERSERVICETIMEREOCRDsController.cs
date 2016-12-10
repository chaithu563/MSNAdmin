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
    using System.Web.Http.OData.Extensions;
    using MSNAdmin.Models;
    ODataConventionModelBuilder builder = new ODataConventionModelBuilder();
    builder.EntitySet<USERSERVICETIMEREOCRD>("USERSERVICETIMEREOCRDs");
    builder.EntitySet<USERSERVICENEED>("USERSERVICENEEDs"); 
    config.Routes.MapODataServiceRoute("odata", "odata", builder.GetEdmModel());
    */
    public class USERSERVICETIMEREOCRDsController : ODataController
    {
        private myserviceneedEntities db = new myserviceneedEntities();

        // GET: odata/USERSERVICETIMEREOCRDs
        [EnableQuery]
        public IQueryable<USERSERVICETIMEREOCRD> GetUSERSERVICETIMEREOCRDs()
        {
            return db.USERSERVICETIMEREOCRDs;
        }

        // GET: odata/USERSERVICETIMEREOCRDs(5)
        [EnableQuery]
        public SingleResult<USERSERVICETIMEREOCRD> GetUSERSERVICETIMEREOCRD([FromODataUri] decimal key)
        {
            return SingleResult.Create(db.USERSERVICETIMEREOCRDs.Where(uSERSERVICETIMEREOCRD => uSERSERVICETIMEREOCRD.ID == key));
        }

        // PUT: odata/USERSERVICETIMEREOCRDs(5)
        public IHttpActionResult Put([FromODataUri] decimal key, Delta<USERSERVICETIMEREOCRD> patch)
        {
            Validate(patch.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            USERSERVICETIMEREOCRD uSERSERVICETIMEREOCRD = db.USERSERVICETIMEREOCRDs.Find(key);
            if (uSERSERVICETIMEREOCRD == null)
            {
                return NotFound();
            }

            patch.Put(uSERSERVICETIMEREOCRD);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!USERSERVICETIMEREOCRDExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(uSERSERVICETIMEREOCRD);
        }

        // POST: odata/USERSERVICETIMEREOCRDs
        public IHttpActionResult Post(USERSERVICETIMEREOCRD uSERSERVICETIMEREOCRD)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.USERSERVICETIMEREOCRDs.Add(uSERSERVICETIMEREOCRD);
            db.SaveChanges();

            return Created(uSERSERVICETIMEREOCRD);
        }

        // PATCH: odata/USERSERVICETIMEREOCRDs(5)
        [AcceptVerbs("PATCH", "MERGE")]
        public IHttpActionResult Patch([FromODataUri] decimal key, Delta<USERSERVICETIMEREOCRD> patch)
        {
            Validate(patch.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            USERSERVICETIMEREOCRD uSERSERVICETIMEREOCRD = db.USERSERVICETIMEREOCRDs.Find(key);
            if (uSERSERVICETIMEREOCRD == null)
            {
                return NotFound();
            }

            patch.Patch(uSERSERVICETIMEREOCRD);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!USERSERVICETIMEREOCRDExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(uSERSERVICETIMEREOCRD);
        }

        // DELETE: odata/USERSERVICETIMEREOCRDs(5)
        public IHttpActionResult Delete([FromODataUri] decimal key)
        {
            USERSERVICETIMEREOCRD uSERSERVICETIMEREOCRD = db.USERSERVICETIMEREOCRDs.Find(key);
            if (uSERSERVICETIMEREOCRD == null)
            {
                return NotFound();
            }

            db.USERSERVICETIMEREOCRDs.Remove(uSERSERVICETIMEREOCRD);
            db.SaveChanges();

            return StatusCode(HttpStatusCode.NoContent);
        }

        // GET: odata/USERSERVICETIMEREOCRDs(5)/USERSERVICENEED
        [EnableQuery]
        public SingleResult<USERSERVICENEED> GetUSERSERVICENEED([FromODataUri] decimal key)
        {
            return SingleResult.Create(db.USERSERVICETIMEREOCRDs.Where(m => m.ID == key).Select(m => m.USERSERVICENEED));
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool USERSERVICETIMEREOCRDExists(decimal key)
        {
            return db.USERSERVICETIMEREOCRDs.Count(e => e.ID == key) > 0;
        }
    }
}
