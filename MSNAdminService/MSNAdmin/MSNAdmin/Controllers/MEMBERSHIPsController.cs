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
    builder.EntitySet<MEMBERSHIP>("MEMBERSHIPs");
    builder.EntitySet<USERMEMBERSHIP>("USERMEMBERSHIPs"); 
    config.Routes.MapODataRoute("odata", "odata", builder.GetEdmModel());
    */
    public class MEMBERSHIPsController : ODataController
    {
        private myserviceneedEntities db = new myserviceneedEntities();

        // GET: odata/MEMBERSHIPs
        [Queryable]
        public IQueryable<MEMBERSHIP> GetMEMBERSHIPs()
        {
            return db.MEMBERSHIPs;
        }

        // GET: odata/MEMBERSHIPs(5)
        [Queryable]
        public SingleResult<MEMBERSHIP> GetMEMBERSHIP([FromODataUri] decimal key)
        {
            return SingleResult.Create(db.MEMBERSHIPs.Where(mEMBERSHIP => mEMBERSHIP.ID == key));
        }

        // PUT: odata/MEMBERSHIPs(5)
        public IHttpActionResult Put([FromODataUri] decimal key, MEMBERSHIP mEMBERSHIP)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (key != mEMBERSHIP.ID)
            {
                return BadRequest();
            }

            db.Entry(mEMBERSHIP).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MEMBERSHIPExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(mEMBERSHIP);
        }

        // POST: odata/MEMBERSHIPs
        public IHttpActionResult Post(MEMBERSHIP mEMBERSHIP)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.MEMBERSHIPs.Add(mEMBERSHIP);
            db.SaveChanges();

            return Created(mEMBERSHIP);
        }

        // PATCH: odata/MEMBERSHIPs(5)
        [AcceptVerbs("PATCH", "MERGE")]
        public IHttpActionResult Patch([FromODataUri] decimal key, Delta<MEMBERSHIP> patch)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            MEMBERSHIP mEMBERSHIP = db.MEMBERSHIPs.Find(key);
            if (mEMBERSHIP == null)
            {
                return NotFound();
            }

            patch.Patch(mEMBERSHIP);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MEMBERSHIPExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(mEMBERSHIP);
        }

        // DELETE: odata/MEMBERSHIPs(5)
        public IHttpActionResult Delete([FromODataUri] decimal key)
        {
            MEMBERSHIP mEMBERSHIP = db.MEMBERSHIPs.Find(key);
            if (mEMBERSHIP == null)
            {
                return NotFound();
            }

            db.MEMBERSHIPs.Remove(mEMBERSHIP);
            db.SaveChanges();

            return StatusCode(HttpStatusCode.NoContent);
        }

        // GET: odata/MEMBERSHIPs(5)/USERMEMBERSHIPs
        [Queryable]
        public IQueryable<USERMEMBERSHIP> GetUSERMEMBERSHIPs([FromODataUri] decimal key)
        {
            return db.MEMBERSHIPs.Where(m => m.ID == key).SelectMany(m => m.USERMEMBERSHIPs);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool MEMBERSHIPExists(decimal key)
        {
            return db.MEMBERSHIPs.Count(e => e.ID == key) > 0;
        }
    }
}
