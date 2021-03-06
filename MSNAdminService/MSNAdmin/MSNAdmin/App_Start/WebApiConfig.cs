﻿using MSNAdmin.Models;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.OData.Builder;
using System.Web.OData.Routing;
using System.Web.OData.Routing.Conventions;
using System.Web.OData.Extensions;

namespace MSNAdmin
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            // Web API routes
						//config.MapHttpAttributeRoutes();

						//config.Routes.MapHttpRoute(
						//		name: "DefaultApi",
						//		routeTemplate: "api/{controller}/{id}",
						//		defaults: new { id = RouteParameter.Optional }
						//);

					// Create the default collection of built-in conventions.
					//config.SetCorsPolicyProviderFactory(new CorsPolicyFactory());
					//var cors = new EnableCorsAttribute("*", "*", "*");
					//config.EnableCors(cors);
					var conventions = ODataRoutingConventions.CreateDefault();
					//MapODataServiceRoute
						ODataModelBuilder builder = new ODataConventionModelBuilder();
						builder.EntitySet<CITY>("CITies");
            builder.EntitySet<CITYAREA>("CITYAREAs");
            builder.EntitySet<MEMBERSHIP>("MEMBERSHIPs");
//builder.EntitySet<USERPWD>("USERPWDs");
						builder.EntitySet<USERSERVICETIMERECORD>("USERSERVICETIMERECORDs");
            builder.EntitySet<SERVICEBID>("SERVICEBIDs");
            builder.EntitySet<SERVICECATEGORY>("SERVICECATEGORies");
            builder.EntitySet<SERVICESTATE>("SERVICESTATEs");
            builder.EntitySet<SERVICESUBCATEGORY>("SERVICESUBCATEGORies");
            builder.EntitySet<SERVICETIMETYPE>("SERVICETIMETYPEs");
            builder.EntitySet<SOCIALLOGIN>("SOCIALLOGINs");
            builder.EntitySet<USERBID>("USERBIDS");
            builder.EntitySet<USERFUND>("USERFUNDS");
						builder.EntitySet<AspNetUser>("AspNetUsers");
						builder.EntitySet<ADMININFO>("ADMININFOes");
            builder.EntitySet<USERMEMBERSHIP>("USERMEMBERSHIPs");
            builder.EntitySet<USERSERVICE>("USERSERVICEs");
            builder.EntitySet<USERSERVICENEED>("USERSERVICENEEDs");



						config.MapODataServiceRoute(routeName: "odata",
								routePrefix: "odata",
								model: builder.GetEdmModel(),
								pathHandler: new DefaultODataPathHandler(),
								routingConventions: conventions);
					//	config.Routes.MapODataRoute("odata", "odata", builder.GetEdmModel());
        }
    }
}
