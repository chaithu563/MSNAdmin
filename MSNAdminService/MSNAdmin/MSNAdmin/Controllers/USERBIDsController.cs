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

    using System.Web.Http.OData.Builder;
    using MSNAdmin.Models;
    ODataConventionModelBuilder builder = new ODataConventionModelBuilder();
    builder.EntitySet<USERBID>("USERBIDs");
    builder.EntitySet<AspNetUser>("AspNetUsers"); 
    config.Routes.MapODataRoute("odata", "odata", builder.GetEdmModel());
    */
    public class USERBIDsController : ODataController
    {
        private myserviceneedEntities db = new myserviceneedEntities();

        // GET: odata/USERBIDs
        [Queryable]
        public IQueryable<USERBID> GetUSERBIDs()
        {
            return db.USERBIDS;
        }

        // GET: odata/USERBIDs(5)
        [Queryable]
        public SingleResult<USERBID> GetUSERBID([FromODataUri] decimal key)
        {
            return SingleResult.Create(db.USERBIDS.Where(uSERBID => uSERBID.ID == key));
        }

        // PUT: odata/USERBIDs(5)
        public IHttpActionResult Put([FromODataUri] decimal key, USERBID uSERBID)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (key != uSERBID.ID)
            {
                return BadRequest();
            }

            db.Entry(uSERBID).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!USERBIDExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(uSERBID);
        }

        // POST: odata/USERBIDs
        public IHttpActionResult Post(USERBID uSERBID)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.USERBIDS.Add(uSERBID);
            db.SaveChanges();

            return Created(uSERBID);
        }

        // PATCH: odata/USERBIDs(5)
        [AcceptVerbs("PATCH", "MERGE")]
        public IHttpActionResult Patch([FromODataUri] decimal key, Delta<USERBID> patch)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            USERBID uSERBID = db.USERBIDS.Find(key);
            if (uSERBID == null)
            {
                return NotFound();
            }

            patch.Patch(uSERBID);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!USERBIDExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(uSERBID);
        }

        // DELETE: odata/USERBIDs(5)
        public IHttpActionResult Delete([FromODataUri] decimal key)
        {
            USERBID uSERBID = db.USERBIDS.Find(key);
            if (uSERBID == null)
            {
                return NotFound();
            }

            db.USERBIDS.Remove(uSERBID);
            db.SaveChanges();

            return StatusCode(HttpStatusCode.NoContent);
        }

        // GET: odata/USERBIDs(5)/AspNetUser
        [Queryable]
        public SingleResult<AspNetUser> GetAspNetUser([FromODataUri] decimal key)
        {
            return SingleResult.Create(db.USERBIDS.Where(m => m.ID == key).Select(m => m.AspNetUser));
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool USERBIDExists(decimal key)
        {
            return db.USERBIDS.Count(e => e.ID == key) > 0;
        }
    }
}
