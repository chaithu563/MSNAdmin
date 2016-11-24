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
    builder.EntitySet<USERMEMBERSHIP>("USERMEMBERSHIPs");
    builder.EntitySet<MEMBERSHIP>("MEMBERSHIPs"); 
    builder.EntitySet<USERINFO>("USERINFOes"); 
    config.Routes.MapODataRoute("odata", "odata", builder.GetEdmModel());
    */
    public class USERMEMBERSHIPsController : ODataController
    {
        private myserviceneedEntities db = new myserviceneedEntities();

        // GET: odata/USERMEMBERSHIPs
        [Queryable]
        public IQueryable<USERMEMBERSHIP> GetUSERMEMBERSHIPs()
        {
            return db.USERMEMBERSHIPs;
        }

        // GET: odata/USERMEMBERSHIPs(5)
        [Queryable]
        public SingleResult<USERMEMBERSHIP> GetUSERMEMBERSHIP([FromODataUri] decimal key)
        {
            return SingleResult.Create(db.USERMEMBERSHIPs.Where(uSERMEMBERSHIP => uSERMEMBERSHIP.ID == key));
        }

        // PUT: odata/USERMEMBERSHIPs(5)
        public IHttpActionResult Put([FromODataUri] decimal key, USERMEMBERSHIP uSERMEMBERSHIP)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (key != uSERMEMBERSHIP.ID)
            {
                return BadRequest();
            }

            db.Entry(uSERMEMBERSHIP).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!USERMEMBERSHIPExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(uSERMEMBERSHIP);
        }

        // POST: odata/USERMEMBERSHIPs
        public IHttpActionResult Post(USERMEMBERSHIP uSERMEMBERSHIP)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.USERMEMBERSHIPs.Add(uSERMEMBERSHIP);
            db.SaveChanges();

            return Created(uSERMEMBERSHIP);
        }

        // PATCH: odata/USERMEMBERSHIPs(5)
        [AcceptVerbs("PATCH", "MERGE")]
        public IHttpActionResult Patch([FromODataUri] decimal key, Delta<USERMEMBERSHIP> patch)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            USERMEMBERSHIP uSERMEMBERSHIP = db.USERMEMBERSHIPs.Find(key);
            if (uSERMEMBERSHIP == null)
            {
                return NotFound();
            }

            patch.Patch(uSERMEMBERSHIP);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!USERMEMBERSHIPExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(uSERMEMBERSHIP);
        }

        // DELETE: odata/USERMEMBERSHIPs(5)
        public IHttpActionResult Delete([FromODataUri] decimal key)
        {
            USERMEMBERSHIP uSERMEMBERSHIP = db.USERMEMBERSHIPs.Find(key);
            if (uSERMEMBERSHIP == null)
            {
                return NotFound();
            }

            db.USERMEMBERSHIPs.Remove(uSERMEMBERSHIP);
            db.SaveChanges();

            return StatusCode(HttpStatusCode.NoContent);
        }

        // GET: odata/USERMEMBERSHIPs(5)/MEMBERSHIP
        [Queryable]
        public SingleResult<MEMBERSHIP> GetMEMBERSHIP([FromODataUri] decimal key)
        {
            return SingleResult.Create(db.USERMEMBERSHIPs.Where(m => m.ID == key).Select(m => m.MEMBERSHIP));
        }

        // GET: odata/USERMEMBERSHIPs(5)/USERINFO
        [Queryable]
        public SingleResult<USERINFO> GetUSERINFO([FromODataUri] decimal key)
        {
            return SingleResult.Create(db.USERMEMBERSHIPs.Where(m => m.ID == key).Select(m => m.USERINFO));
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool USERMEMBERSHIPExists(decimal key)
        {
            return db.USERMEMBERSHIPs.Count(e => e.ID == key) > 0;
        }
    }
}
