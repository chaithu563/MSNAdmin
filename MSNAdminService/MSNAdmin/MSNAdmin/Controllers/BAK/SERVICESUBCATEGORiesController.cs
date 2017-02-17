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
    builder.EntitySet<SERVICESUBCATEGORY>("SERVICESUBCATEGORies");
    builder.EntitySet<SERVICECATEGORY>("SERVICECATEGORies"); 
    builder.EntitySet<USERSERVICE>("USERSERVICEs"); 
    builder.EntitySet<USERSERVICENEED>("USERSERVICENEEDs"); 
    config.Routes.MapODataRoute("odata", "odata", builder.GetEdmModel());
    */
    public class SERVICESUBCATEGORiesController : ODataController
    {
        private myserviceneedEntities db = new myserviceneedEntities();

        // GET: odata/SERVICESUBCATEGORies
        [Queryable]
        public IQueryable<SERVICESUBCATEGORY> GetSERVICESUBCATEGORies()
        {
            return db.SERVICESUBCATEGORies;
        }

        // GET: odata/SERVICESUBCATEGORies(5)
        [Queryable]
        public SingleResult<SERVICESUBCATEGORY> GetSERVICESUBCATEGORY([FromODataUri] decimal key)
        {
            return SingleResult.Create(db.SERVICESUBCATEGORies.Where(sERVICESUBCATEGORY => sERVICESUBCATEGORY.ID == key));
        }

        // PUT: odata/SERVICESUBCATEGORies(5)
        public IHttpActionResult Put([FromODataUri] decimal key, SERVICESUBCATEGORY sERVICESUBCATEGORY)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (key != sERVICESUBCATEGORY.ID)
            {
                return BadRequest();
            }

            db.Entry(sERVICESUBCATEGORY).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SERVICESUBCATEGORYExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(sERVICESUBCATEGORY);
        }

        // POST: odata/SERVICESUBCATEGORies
        public IHttpActionResult Post(SERVICESUBCATEGORY sERVICESUBCATEGORY)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.SERVICESUBCATEGORies.Add(sERVICESUBCATEGORY);
            db.SaveChanges();

            return Created(sERVICESUBCATEGORY);
        }

        // PATCH: odata/SERVICESUBCATEGORies(5)
        [AcceptVerbs("PATCH", "MERGE")]
        public IHttpActionResult Patch([FromODataUri] decimal key, Delta<SERVICESUBCATEGORY> patch)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            SERVICESUBCATEGORY sERVICESUBCATEGORY = db.SERVICESUBCATEGORies.Find(key);
            if (sERVICESUBCATEGORY == null)
            {
                return NotFound();
            }

            patch.Patch(sERVICESUBCATEGORY);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SERVICESUBCATEGORYExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(sERVICESUBCATEGORY);
        }

        // DELETE: odata/SERVICESUBCATEGORies(5)
        public IHttpActionResult Delete([FromODataUri] decimal key)
        {
            SERVICESUBCATEGORY sERVICESUBCATEGORY = db.SERVICESUBCATEGORies.Find(key);
            if (sERVICESUBCATEGORY == null)
            {
                return NotFound();
            }

            db.SERVICESUBCATEGORies.Remove(sERVICESUBCATEGORY);
            db.SaveChanges();

            return StatusCode(HttpStatusCode.NoContent);
        }

        // GET: odata/SERVICESUBCATEGORies(5)/SERVICECATEGORY
        [Queryable]
        public SingleResult<SERVICECATEGORY> GetSERVICECATEGORY([FromODataUri] decimal key)
        {
            return SingleResult.Create(db.SERVICESUBCATEGORies.Where(m => m.ID == key).Select(m => m.SERVICECATEGORY));
        }

        // GET: odata/SERVICESUBCATEGORies(5)/USERSERVICEs
        [Queryable]
        public IQueryable<USERSERVICE> GetUSERSERVICEs([FromODataUri] decimal key)
        {
            return db.SERVICESUBCATEGORies.Where(m => m.ID == key).SelectMany(m => m.USERSERVICEs);
        }

        // GET: odata/SERVICESUBCATEGORies(5)/USERSERVICENEEDs
        [Queryable]
        public IQueryable<USERSERVICENEED> GetUSERSERVICENEEDs([FromODataUri] decimal key)
        {
            return db.SERVICESUBCATEGORies.Where(m => m.ID == key).SelectMany(m => m.USERSERVICENEEDs);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool SERVICESUBCATEGORYExists(decimal key)
        {
            return db.SERVICESUBCATEGORies.Count(e => e.ID == key) > 0;
        }
    }
}
