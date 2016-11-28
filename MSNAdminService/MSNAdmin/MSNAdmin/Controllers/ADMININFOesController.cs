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
    builder.EntitySet<ADMININFO>("ADMININFOes");
    config.Routes.MapODataRoute("odata", "odata", builder.GetEdmModel());
    */
    public class ADMININFOesController : ODataController
    {
        private myserviceneedEntities db = new myserviceneedEntities();

        // GET: odata/ADMININFOes
        [Queryable]
        public IQueryable<ADMININFO> GetADMININFOes()
        {
            return db.ADMININFOes;
        }

        // GET: odata/ADMININFOes(5)
        [Queryable]
        public SingleResult<ADMININFO> GetADMININFO([FromODataUri] decimal key)
        {
            return SingleResult.Create(db.ADMININFOes.Where(aDMININFO => aDMININFO.ID == key));
        }

        // PUT: odata/ADMININFOes(5)
        public IHttpActionResult Put([FromODataUri] decimal key, ADMININFO aDMININFO)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (key != aDMININFO.ID)
            {
                return BadRequest();
            }

            db.Entry(aDMININFO).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ADMININFOExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(aDMININFO);
        }

        // POST: odata/ADMININFOes
        public IHttpActionResult Post(ADMININFO aDMININFO)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.ADMININFOes.Add(aDMININFO);
            db.SaveChanges();

            return Created(aDMININFO);
        }

        // PATCH: odata/ADMININFOes(5)
        [AcceptVerbs("PATCH", "MERGE")]
        public IHttpActionResult Patch([FromODataUri] decimal key, Delta<ADMININFO> patch)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            ADMININFO aDMININFO = db.ADMININFOes.Find(key);
            if (aDMININFO == null)
            {
                return NotFound();
            }

            patch.Patch(aDMININFO);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ADMININFOExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(aDMININFO);
        }

        // DELETE: odata/ADMININFOes(5)
        public IHttpActionResult Delete([FromODataUri] decimal key)
        {
            ADMININFO aDMININFO = db.ADMININFOes.Find(key);
            if (aDMININFO == null)
            {
                return NotFound();
            }

            db.ADMININFOes.Remove(aDMININFO);
            db.SaveChanges();

            return StatusCode(HttpStatusCode.NoContent);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ADMININFOExists(decimal key)
        {
            return db.ADMININFOes.Count(e => e.ID == key) > 0;
        }
    }
}
