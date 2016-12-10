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
    builder.EntitySet<USERPWD>("USERPWDs");
    builder.EntitySet<USERINFO>("USERINFOes"); 
    config.Routes.MapODataServiceRoute("odata", "odata", builder.GetEdmModel());
    */
    public class USERPWDsController : ODataController
    {
        private myserviceneedEntities db = new myserviceneedEntities();

        // GET: odata/USERPWDs
        [EnableQuery]
        public IQueryable<USERPWD> GetUSERPWDs()
        {
            return db.USERPWDs;
        }

        // GET: odata/USERPWDs(5)
        [EnableQuery]
        public SingleResult<USERPWD> GetUSERPWD([FromODataUri] decimal key)
        {
            return SingleResult.Create(db.USERPWDs.Where(uSERPWD => uSERPWD.ID == key));
        }

        // PUT: odata/USERPWDs(5)
        public IHttpActionResult Put([FromODataUri] decimal key, Delta<USERPWD> patch)
        {
            Validate(patch.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            USERPWD uSERPWD = db.USERPWDs.Find(key);
            if (uSERPWD == null)
            {
                return NotFound();
            }

            patch.Put(uSERPWD);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!USERPWDExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(uSERPWD);
        }

        // POST: odata/USERPWDs
        public IHttpActionResult Post(USERPWD uSERPWD)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.USERPWDs.Add(uSERPWD);
            db.SaveChanges();

            return Created(uSERPWD);
        }

        // PATCH: odata/USERPWDs(5)
        [AcceptVerbs("PATCH", "MERGE")]
        public IHttpActionResult Patch([FromODataUri] decimal key, Delta<USERPWD> patch)
        {
            Validate(patch.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            USERPWD uSERPWD = db.USERPWDs.Find(key);
            if (uSERPWD == null)
            {
                return NotFound();
            }

            patch.Patch(uSERPWD);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!USERPWDExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(uSERPWD);
        }

        // DELETE: odata/USERPWDs(5)
        public IHttpActionResult Delete([FromODataUri] decimal key)
        {
            USERPWD uSERPWD = db.USERPWDs.Find(key);
            if (uSERPWD == null)
            {
                return NotFound();
            }

            db.USERPWDs.Remove(uSERPWD);
            db.SaveChanges();

            return StatusCode(HttpStatusCode.NoContent);
        }

        // GET: odata/USERPWDs(5)/USERINFO
        [EnableQuery]
        public SingleResult<USERINFO> GetUSERINFO([FromODataUri] decimal key)
        {
            return SingleResult.Create(db.USERPWDs.Where(m => m.ID == key).Select(m => m.USERINFO));
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool USERPWDExists(decimal key)
        {
            return db.USERPWDs.Count(e => e.ID == key) > 0;
        }
    }
}
