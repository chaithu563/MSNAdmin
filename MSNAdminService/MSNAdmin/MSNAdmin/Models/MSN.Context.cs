﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace MSNAdmin.Models
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class myserviceneedEntities : DbContext
    {
        public myserviceneedEntities()
            : base("name=myserviceneedEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<ADMININFO> ADMININFOes { get; set; }
        public virtual DbSet<CITY> CITies { get; set; }
        public virtual DbSet<CITYAREA> CITYAREAs { get; set; }
        public virtual DbSet<MEMBERSHIP> MEMBERSHIPs { get; set; }
        public virtual DbSet<SERVICEBID> SERVICEBIDs { get; set; }
        public virtual DbSet<SERVICEBIDNEEDFILE> SERVICEBIDNEEDFILES { get; set; }
        public virtual DbSet<SERVICECATEGORY> SERVICECATEGORies { get; set; }
        public virtual DbSet<SERVICESTATE> SERVICESTATEs { get; set; }
        public virtual DbSet<SERVICESUBCATEGORY> SERVICESUBCATEGORies { get; set; }
        public virtual DbSet<SERVICETIMETYPE> SERVICETIMETYPEs { get; set; }
        public virtual DbSet<SOCIALLOGIN> SOCIALLOGINs { get; set; }
        public virtual DbSet<USERBID> USERBIDS { get; set; }
        public virtual DbSet<USERFUND> USERFUNDS { get; set; }
        public virtual DbSet<USERINFO> USERINFOes { get; set; }
        public virtual DbSet<USERMEMBERSHIP> USERMEMBERSHIPs { get; set; }
        public virtual DbSet<USERPWD> USERPWDs { get; set; }
        public virtual DbSet<USERSERVICE> USERSERVICEs { get; set; }
        public virtual DbSet<USERSERVICEFILE> USERSERVICEFILES { get; set; }
        public virtual DbSet<USERSERVICENEED> USERSERVICENEEDs { get; set; }
        public virtual DbSet<USERSERVICENEEDFILE> USERSERVICENEEDFILES { get; set; }
        public virtual DbSet<USERSERVICETIMERECORD> USERSERVICETIMERECORDs { get; set; }
    }
}
