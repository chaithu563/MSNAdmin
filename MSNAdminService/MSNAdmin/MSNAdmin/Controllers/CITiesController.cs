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
    builder.EntitySet<CITY>("CITies");
    builder.EntitySet<CITYAREA>("CITYAREAs"); 
    builder.EntitySet<USERINFO>("USERINFOes"); 
    config.Routes.MapODataRoute("odata", "odata", builder.GetEdmModel());
    */
    public class CITiesController : ODataController
    {
        private myserviceneedEntities db = new myserviceneedEntities();

        // GET: odata/CITies
        [Queryable]
        public IQueryable<CITY> GetCITies()
        {
            return db.CITies;
        }

        // GET: odata/CITies(5)
        [Queryable]
        public SingleResult<CITY> GetCITY([FromODataUri] decimal key)
        {
            return SingleResult.Create(db.CITies.Where(cITY => cITY.ID == key));
        }

        // PUT: odata/CITies(5)
        public IHttpActionResult Put([FromODataUri] decimal key, CITY cITY)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (key != cITY.ID)
            {
                return BadRequest();
            }

            db.Entry(cITY).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CITYExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(cITY);
        }

        // POST: odata/CITies
        public IHttpActionResult Post(CITY cITY)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.CITies.Add(cITY);
            db.SaveChanges();

            return Created(cITY);
        }

        // PATCH: odata/CITies(5)
        [AcceptVerbs("PATCH", "MERGE")]
        public IHttpActionResult Patch([FromODataUri] decimal key, Delta<CITY> patch)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            CITY cITY = db.CITies.Find(key);
            if (cITY == null)
            {
                return NotFound();
            }

            patch.Patch(cITY);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CITYExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(cITY);
        }

        // DELETE: odata/CITies(5)
        public IHttpActionResult Delete([FromODataUri] decimal key)
        {
            CITY cITY = db.CITies.Find(key);
            if (cITY == null)
            {
                return NotFound();
            }

            db.CITies.Remove(cITY);
            db.SaveChanges();

            return StatusCode(HttpStatusCode.NoContent);
        }

        // GET: odata/CITies(5)/CITYAREAs
        [Queryable]
        public IQueryable<CITYAREA> GetCITYAREAs([FromODataUri] decimal key)
        {
            return db.CITies.Where(m => m.ID == key).SelectMany(m => m.CITYAREAs);
        }

        // GET: odata/CITies(5)/USERINFOes
        [Queryable]
        public IQueryable<USERINFO> GetUSERINFOes([FromODataUri] decimal key)
        {
            return db.CITies.Where(m => m.ID == key).SelectMany(m => m.USERINFOes);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CITYExists(decimal key)
        {
            return db.CITies.Count(e => e.ID == key) > 0;
        }
    }
}
