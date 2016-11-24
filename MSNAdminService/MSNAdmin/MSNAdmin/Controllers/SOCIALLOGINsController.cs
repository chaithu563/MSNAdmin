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
    builder.EntitySet<SOCIALLOGIN>("SOCIALLOGINs");
    builder.EntitySet<USERINFO>("USERINFOes"); 
    config.Routes.MapODataRoute("odata", "odata", builder.GetEdmModel());
    */
    public class SOCIALLOGINsController : ODataController
    {
        private myserviceneedEntities db = new myserviceneedEntities();

        // GET: odata/SOCIALLOGINs
        [Queryable]
        public IQueryable<SOCIALLOGIN> GetSOCIALLOGINs()
        {
            return db.SOCIALLOGINs;
        }

        // GET: odata/SOCIALLOGINs(5)
        [Queryable]
        public SingleResult<SOCIALLOGIN> GetSOCIALLOGIN([FromODataUri] int key)
        {
            return SingleResult.Create(db.SOCIALLOGINs.Where(sOCIALLOGIN => sOCIALLOGIN.ID == key));
        }

        // PUT: odata/SOCIALLOGINs(5)
        public IHttpActionResult Put([FromODataUri] int key, SOCIALLOGIN sOCIALLOGIN)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (key != sOCIALLOGIN.ID)
            {
                return BadRequest();
            }

            db.Entry(sOCIALLOGIN).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SOCIALLOGINExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(sOCIALLOGIN);
        }

        // POST: odata/SOCIALLOGINs
        public IHttpActionResult Post(SOCIALLOGIN sOCIALLOGIN)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.SOCIALLOGINs.Add(sOCIALLOGIN);
            db.SaveChanges();

            return Created(sOCIALLOGIN);
        }

        // PATCH: odata/SOCIALLOGINs(5)
        [AcceptVerbs("PATCH", "MERGE")]
        public IHttpActionResult Patch([FromODataUri] int key, Delta<SOCIALLOGIN> patch)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            SOCIALLOGIN sOCIALLOGIN = db.SOCIALLOGINs.Find(key);
            if (sOCIALLOGIN == null)
            {
                return NotFound();
            }

            patch.Patch(sOCIALLOGIN);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SOCIALLOGINExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(sOCIALLOGIN);
        }

        // DELETE: odata/SOCIALLOGINs(5)
        public IHttpActionResult Delete([FromODataUri] int key)
        {
            SOCIALLOGIN sOCIALLOGIN = db.SOCIALLOGINs.Find(key);
            if (sOCIALLOGIN == null)
            {
                return NotFound();
            }

            db.SOCIALLOGINs.Remove(sOCIALLOGIN);
            db.SaveChanges();

            return StatusCode(HttpStatusCode.NoContent);
        }

        // GET: odata/SOCIALLOGINs(5)/USERINFOes
        [Queryable]
        public IQueryable<USERINFO> GetUSERINFOes([FromODataUri] int key)
        {
            return db.SOCIALLOGINs.Where(m => m.ID == key).SelectMany(m => m.USERINFOes);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool SOCIALLOGINExists(int key)
        {
            return db.SOCIALLOGINs.Count(e => e.ID == key) > 0;
        }
    }
}
