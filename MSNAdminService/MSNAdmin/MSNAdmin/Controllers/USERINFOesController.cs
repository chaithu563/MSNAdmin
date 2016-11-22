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
    builder.EntitySet<USERINFO>("USERINFOes");
    builder.EntitySet<CITY>("CITies"); 
    builder.EntitySet<CITYAREA>("CITYAREAs"); 
    builder.EntitySet<SERVICEBID>("SERVICEBIDs"); 
    builder.EntitySet<SOCIALLOGIN>("SOCIALLOGINs"); 
    builder.EntitySet<USERBID>("USERBIDS"); 
    builder.EntitySet<USERFUND>("USERFUNDS"); 
    builder.EntitySet<USERMEMBERSHIP>("USERMEMBERSHIPs"); 
    builder.EntitySet<USERSERVICE>("USERSERVICEs"); 
    builder.EntitySet<USERSERVICENEED>("USERSERVICENEEDs"); 
    config.Routes.MapODataRoute("odata", "odata", builder.GetEdmModel());
    */
    public class USERINFOesController : ODataController
    {
        private myserviceneedEntities db = new myserviceneedEntities();

        // GET: odata/USERINFOes
        [Queryable]
        public IQueryable<USERINFO> GetUSERINFOes()
        {
            return db.USERINFOes;
        }

        // GET: odata/USERINFOes(5)
        [Queryable]
        public SingleResult<USERINFO> GetUSERINFO([FromODataUri] decimal key)
        {
            return SingleResult.Create(db.USERINFOes.Where(uSERINFO => uSERINFO.ID == key));
        }

        // PUT: odata/USERINFOes(5)
        public IHttpActionResult Put([FromODataUri] decimal key, USERINFO uSERINFO)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (key != uSERINFO.ID)
            {
                return BadRequest();
            }

            db.Entry(uSERINFO).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!USERINFOExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(uSERINFO);
        }

        // POST: odata/USERINFOes
        public IHttpActionResult Post(USERINFO uSERINFO)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.USERINFOes.Add(uSERINFO);
            db.SaveChanges();

            return Created(uSERINFO);
        }

        // PATCH: odata/USERINFOes(5)
        [AcceptVerbs("PATCH", "MERGE")]
        public IHttpActionResult Patch([FromODataUri] decimal key, Delta<USERINFO> patch)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            USERINFO uSERINFO = db.USERINFOes.Find(key);
            if (uSERINFO == null)
            {
                return NotFound();
            }

            patch.Patch(uSERINFO);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!USERINFOExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(uSERINFO);
        }

        // DELETE: odata/USERINFOes(5)
        public IHttpActionResult Delete([FromODataUri] decimal key)
        {
            USERINFO uSERINFO = db.USERINFOes.Find(key);
            if (uSERINFO == null)
            {
                return NotFound();
            }

            db.USERINFOes.Remove(uSERINFO);
            db.SaveChanges();

            return StatusCode(HttpStatusCode.NoContent);
        }

        // GET: odata/USERINFOes(5)/CITY
        [Queryable]
        public SingleResult<CITY> GetCITY([FromODataUri] decimal key)
        {
            return SingleResult.Create(db.USERINFOes.Where(m => m.ID == key).Select(m => m.CITY));
        }

        // GET: odata/USERINFOes(5)/CITYAREA
        [Queryable]
        public SingleResult<CITYAREA> GetCITYAREA([FromODataUri] decimal key)
        {
            return SingleResult.Create(db.USERINFOes.Where(m => m.ID == key).Select(m => m.CITYAREA));
        }

        // GET: odata/USERINFOes(5)/SERVICEBIDs
        [Queryable]
        public IQueryable<SERVICEBID> GetSERVICEBIDs([FromODataUri] decimal key)
        {
            return db.USERINFOes.Where(m => m.ID == key).SelectMany(m => m.SERVICEBIDs);
        }

        // GET: odata/USERINFOes(5)/SOCIALLOGIN
        [Queryable]
        public SingleResult<SOCIALLOGIN> GetSOCIALLOGIN([FromODataUri] decimal key)
        {
            return SingleResult.Create(db.USERINFOes.Where(m => m.ID == key).Select(m => m.SOCIALLOGIN));
        }

        // GET: odata/USERINFOes(5)/USERBIDS
        [Queryable]
        public IQueryable<USERBID> GetUSERBIDS([FromODataUri] decimal key)
        {
            return db.USERINFOes.Where(m => m.ID == key).SelectMany(m => m.USERBIDS);
        }

        // GET: odata/USERINFOes(5)/USERFUNDS
        [Queryable]
        public IQueryable<USERFUND> GetUSERFUNDS([FromODataUri] decimal key)
        {
            return db.USERINFOes.Where(m => m.ID == key).SelectMany(m => m.USERFUNDS);
        }

        // GET: odata/USERINFOes(5)/USERMEMBERSHIPs
        [Queryable]
        public IQueryable<USERMEMBERSHIP> GetUSERMEMBERSHIPs([FromODataUri] decimal key)
        {
            return db.USERINFOes.Where(m => m.ID == key).SelectMany(m => m.USERMEMBERSHIPs);
        }

        // GET: odata/USERINFOes(5)/USERSERVICEs
        [Queryable]
        public IQueryable<USERSERVICE> GetUSERSERVICEs([FromODataUri] decimal key)
        {
            return db.USERINFOes.Where(m => m.ID == key).SelectMany(m => m.USERSERVICEs);
        }

        // GET: odata/USERINFOes(5)/USERSERVICENEEDs
        [Queryable]
        public IQueryable<USERSERVICENEED> GetUSERSERVICENEEDs([FromODataUri] decimal key)
        {
            return db.USERINFOes.Where(m => m.ID == key).SelectMany(m => m.USERSERVICENEEDs);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool USERINFOExists(decimal key)
        {
            return db.USERINFOes.Count(e => e.ID == key) > 0;
        }
    }
}
