System.register(['@angular/core', '../../../services/msn.service', '@angular/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, msn_service_1, router_1;
    var EditMembershipComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (msn_service_1_1) {
                msn_service_1 = msn_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            EditMembershipComponent = (function () {
                function EditMembershipComponent(mSNService, route, router) {
                    this.mSNService = mSNService;
                    this.route = route;
                    this.router = router;
                    this.init();
                    this.membership = [];
                }
                EditMembershipComponent.prototype.init = function () {
                    var _this = this;
                    this.mSNService.getContext(function (context) { return _this.OnContextLoaded(context); });
                };
                EditMembershipComponent.prototype.OnContextLoaded = function (context) {
                    var _this = this;
                    _this.context = context;
                    var membershipid = _this.route.snapshot.params['id'];
                    _this.context.MEMBERSHIPs.first("x=> x.ID == this.Membershipid", { Membershipid: membershipid })
                        .then(function (membership) {
                        _this.membership = JSON.parse(JSON.stringify(membership));
                        _this.membershiporig = membership;
                    });
                };
                EditMembershipComponent.prototype.saveMembership = function (membership) {
                    this.context.MEMBERSHIPs.attachOrGet(this.membershiporig);
                    var _this = this;
                    this.membershiporig.NAME = membership.NAME;
                    this.membershiporig.DESCRIPTION = membership.DESCRIPTION;
                    // this.context.CITies.add(this.cityorig);
                    console.log(membership);
                    this.context.saveChanges().then(function () {
                        _this.router.navigate(['memberships']);
                    });
                };
                EditMembershipComponent = __decorate([
                    core_1.Component({
                        selector: 'editadmin',
                        templateUrl: 'app/core/adminview/membership/editmembership.html',
                    }), 
                    __metadata('design:paramtypes', [msn_service_1.MSNService, router_1.ActivatedRoute, router_1.Router])
                ], EditMembershipComponent);
                return EditMembershipComponent;
            }());
            exports_1("EditMembershipComponent", EditMembershipComponent);
        }
    }
});
//# sourceMappingURL=editmembership.js.map