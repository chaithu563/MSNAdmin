System.register(["@angular/core", "../../../services/msn.service", "@angular/router"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, msn_service_1, router_1, AddAdminComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (msn_service_1_1) {
                msn_service_1 = msn_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }
        ],
        execute: function () {
            AddAdminComponent = (function () {
                function AddAdminComponent(mSNService, router) {
                    this.mSNService = mSNService;
                    this.router = router;
                    this.init();
                    this.userdetails = [];
                }
                AddAdminComponent.prototype.init = function () {
                    var _this = this;
                    this.mSNService.getContext(function (context) { return _this.OnContextLoaded(context); });
                };
                AddAdminComponent.prototype.OnContextLoaded = function (context) {
                    var _this = this;
                    _this.context = context;
                };
                AddAdminComponent.prototype.saveUser = function (user) {
                    // var userdetails=[];
                    var _this = this;
                    this.userdetails.NAME = user.NAME;
                    this.userdetails.EMAIL = user.EMAIL;
                    this.userdetails.PHONE = user.PHONE;
                    this.userdetails.PWD = user.PWD;
                    this.context.ADMININFOes.add(this.userdetails);
                    //this.userdetailsorig.ID = 2;
                    //	this.context.ADMININFOes.add(this.userdetailsorig);
                    console.log(user);
                    //this.context.saveChanges();
                    //this.router.navigate(['manageadmins']);
                    this.context.saveChanges().then(function () {
                        _this.router.navigate(['manageadmins']);
                    });
                };
                return AddAdminComponent;
            }());
            AddAdminComponent = __decorate([
                core_1.Component({
                    selector: 'addadmin',
                    templateUrl: 'app/core/adminview/adminuser/addadmin.html',
                }),
                __metadata("design:paramtypes", [msn_service_1.MSNService, router_1.Router])
            ], AddAdminComponent);
            exports_1("AddAdminComponent", AddAdminComponent);
        }
    };
});
//# sourceMappingURL=addadmin.js.map