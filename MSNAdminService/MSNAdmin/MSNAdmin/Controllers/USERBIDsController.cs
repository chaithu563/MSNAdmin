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
    builder.EntitySet<USERBID>("USERBIDS");
    builder.EntitySet<USERINFO>("USERINFOes"); 
    config.Routes.MapODataRoute("odata", "odata", builder.GetEdmModel());
    */
    public class USERBIDSController : ODataController
    {
        private myserviceneedEntities db = new myserviceneedEntities();

        // GET: odata/USERBIDS
        [Queryable]
        public IQueryable<USERBID> GetUSERBIDS()
        {
            return db.USERBIDS;
        }

        // GET: odata/USERBIDS(5)
        [Queryable]
        public SingleResult<USERBID> GetUSERBID([FromODataUri] decimal key)
        {
            return SingleResult.Create(db.USERBIDS.Where(uSERBID => uSERBID.ID == key));
        }

        // PUT: odata/USERBIDS(5)
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

        // POST: odata/USERBIDS
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

        // PATCH: odata/USERBIDS(5)
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

        // DELETE: odata/USERBIDS(5)
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

        // GET: odata/USERBIDS(5)/USERINFO
        [Queryable]
        public SingleResult<USERINFO> GetUSERINFO([FromODataUri] decimal key)
        {
            return SingleResult.Create(db.USERBIDS.Where(m => m.ID == key).Select(m => m.USERINFO));
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
