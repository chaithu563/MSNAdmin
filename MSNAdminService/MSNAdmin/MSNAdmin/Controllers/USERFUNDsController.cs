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
    builder.EntitySet<USERFUND>("USERFUNDS");
    builder.EntitySet<USERINFO>("USERINFOes"); 
    config.Routes.MapODataRoute("odata", "odata", builder.GetEdmModel());
    */
    public class USERFUNDSController : ODataController
    {
        private myserviceneedEntities db = new myserviceneedEntities();

        // GET: odata/USERFUNDS
        [Queryable]
        public IQueryable<USERFUND> GetUSERFUNDS()
        {
            return db.USERFUNDS;
        }

        // GET: odata/USERFUNDS(5)
        [Queryable]
        public SingleResult<USERFUND> GetUSERFUND([FromODataUri] decimal key)
        {
            return SingleResult.Create(db.USERFUNDS.Where(uSERFUND => uSERFUND.ID == key));
        }

        // PUT: odata/USERFUNDS(5)
        public IHttpActionResult Put([FromODataUri] decimal key, USERFUND uSERFUND)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (key != uSERFUND.ID)
            {
                return BadRequest();
            }

            db.Entry(uSERFUND).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!USERFUNDExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(uSERFUND);
        }

        // POST: odata/USERFUNDS
        public IHttpActionResult Post(USERFUND uSERFUND)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.USERFUNDS.Add(uSERFUND);
            db.SaveChanges();

            return Created(uSERFUND);
        }

        // PATCH: odata/USERFUNDS(5)
        [AcceptVerbs("PATCH", "MERGE")]
        public IHttpActionResult Patch([FromODataUri] decimal key, Delta<USERFUND> patch)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            USERFUND uSERFUND = db.USERFUNDS.Find(key);
            if (uSERFUND == null)
            {
                return NotFound();
            }

            patch.Patch(uSERFUND);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!USERFUNDExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(uSERFUND);
        }

        // DELETE: odata/USERFUNDS(5)
        public IHttpActionResult Delete([FromODataUri] decimal key)
        {
            USERFUND uSERFUND = db.USERFUNDS.Find(key);
            if (uSERFUND == null)
            {
                return NotFound();
            }

            db.USERFUNDS.Remove(uSERFUND);
            db.SaveChanges();

            return StatusCode(HttpStatusCode.NoContent);
        }

        // GET: odata/USERFUNDS(5)/USERINFO
        [Queryable]
        public SingleResult<USERINFO> GetUSERINFO([FromODataUri] decimal key)
        {
            return SingleResult.Create(db.USERFUNDS.Where(m => m.ID == key).Select(m => m.USERINFO));
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool USERFUNDExists(decimal key)
        {
            return db.USERFUNDS.Count(e => e.ID == key) > 0;
        }
    }
}
