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
    builder.EntitySet<CITYAREA>("CITYAREAs");
    builder.EntitySet<CITY>("CITies"); 
    builder.EntitySet<USERINFO>("USERINFOes"); 
    config.Routes.MapODataRoute("odata", "odata", builder.GetEdmModel());
    */
    public class CITYAREAsController : ODataController
    {
        private myserviceneedEntities db = new myserviceneedEntities();

        // GET: odata/CITYAREAs
        [Queryable]
        public IQueryable<CITYAREA> GetCITYAREAs()
        {
            return db.CITYAREAs;
        }

        // GET: odata/CITYAREAs(5)
        [Queryable]
        public SingleResult<CITYAREA> GetCITYAREA([FromODataUri] decimal key)
        {
            return SingleResult.Create(db.CITYAREAs.Where(cITYAREA => cITYAREA.ID == key));
        }

        // PUT: odata/CITYAREAs(5)
        public IHttpActionResult Put([FromODataUri] decimal key, CITYAREA cITYAREA)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (key != cITYAREA.ID)
            {
                return BadRequest();
            }

            db.Entry(cITYAREA).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CITYAREAExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(cITYAREA);
        }

        // POST: odata/CITYAREAs
        public IHttpActionResult Post(CITYAREA cITYAREA)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.CITYAREAs.Add(cITYAREA);
            db.SaveChanges();

            return Created(cITYAREA);
        }

        // PATCH: odata/CITYAREAs(5)
        [AcceptVerbs("PATCH", "MERGE")]
        public IHttpActionResult Patch([FromODataUri] decimal key, Delta<CITYAREA> patch)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            CITYAREA cITYAREA = db.CITYAREAs.Find(key);
            if (cITYAREA == null)
            {
                return NotFound();
            }

            patch.Patch(cITYAREA);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CITYAREAExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(cITYAREA);
        }

        // DELETE: odata/CITYAREAs(5)
        public IHttpActionResult Delete([FromODataUri] decimal key)
        {
            CITYAREA cITYAREA = db.CITYAREAs.Find(key);
            if (cITYAREA == null)
            {
                return NotFound();
            }

            db.CITYAREAs.Remove(cITYAREA);
            db.SaveChanges();

            return StatusCode(HttpStatusCode.NoContent);
        }

        // GET: odata/CITYAREAs(5)/CITY
        [Queryable]
        public SingleResult<CITY> GetCITY([FromODataUri] decimal key)
        {
            return SingleResult.Create(db.CITYAREAs.Where(m => m.ID == key).Select(m => m.CITY));
        }

        // GET: odata/CITYAREAs(5)/USERINFOes
        [Queryable]
        public IQueryable<USERINFO> GetUSERINFOes([FromODataUri] decimal key)
        {
            return db.CITYAREAs.Where(m => m.ID == key).SelectMany(m => m.USERINFOes);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CITYAREAExists(decimal key)
        {
            return db.CITYAREAs.Count(e => e.ID == key) > 0;
        }
    }
}
