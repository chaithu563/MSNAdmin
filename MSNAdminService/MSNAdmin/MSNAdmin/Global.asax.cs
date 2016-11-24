﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Routing;

namespace MSNAdmin
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            GlobalConfiguration.Configure(WebApiConfig.Register);
        }
				//protected void Application_BeginRequest(Object sender, EventArgs e)
				//{
				////	HttpContext.Current.Response.AddHeader("Access-Control-Allow-Origin", "*");
				//	//if (HttpContext.Current.Request.HttpMethod == "OPTIONS")
				//	//{
				//	//	HttpContext.Current.Response.AddHeader("Cache-Control", "no-cache");
				//	//	HttpContext.Current.Response.AddHeader("Access-Control-Allow-Methods", "GET, POST");
				//	//	HttpContext.Current.Response.AddHeader("Access-Control-Allow-Headers", "*");
				//	//	HttpContext.Current.Response.AddHeader("Access-Control-Max-Age", "1728000");
				//	//	HttpContext.Current.Response.End();
				//	//}
				//}
				protected void Application_BeginRequest()
				{
					if (Request.Headers.AllKeys.Contains("Origin") && Request.HttpMethod == "OPTIONS")
					{
						Response.Flush();
					}
				}

    }
}
