//------------------------------------------------------------------------------
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
    using System.Collections.Generic;
    
    public partial class USERINFO
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public USERINFO()
        {
            this.SERVICEBIDs = new HashSet<SERVICEBID>();
            this.USERBIDS = new HashSet<USERBID>();
            this.USERFUNDS = new HashSet<USERFUND>();
            this.USERMEMBERSHIPs = new HashSet<USERMEMBERSHIP>();
            this.USERSERVICEs = new HashSet<USERSERVICE>();
            this.USERPWDs = new HashSet<USERPWD>();
            this.USERSERVICENEEDs = new HashSet<USERSERVICENEED>();
        }
    
        public decimal ID { get; set; }
        public string NAME { get; set; }
        public string EMAIL { get; set; }
        public string PHONE { get; set; }
        public Nullable<decimal> CITYID { get; set; }
        public Nullable<decimal> CITYAREAID { get; set; }
        public Nullable<int> LOGINTYPEID { get; set; }
        public string CURRENTLOCATION { get; set; }
        public Nullable<double> USERLOCATIONLATITUDE { get; set; }
        public Nullable<double> USERLOCATIONLONGITUDE { get; set; }
    
        public virtual CITY CITY { get; set; }
        public virtual CITYAREA CITYAREA { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<SERVICEBID> SERVICEBIDs { get; set; }
        public virtual SOCIALLOGIN SOCIALLOGIN { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<USERBID> USERBIDS { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<USERFUND> USERFUNDS { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<USERMEMBERSHIP> USERMEMBERSHIPs { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<USERSERVICE> USERSERVICEs { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<USERPWD> USERPWDs { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<USERSERVICENEED> USERSERVICENEEDs { get; set; }
    }
}
