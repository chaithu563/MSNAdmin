System.register(['@angular/core', '../../../services/msn.service'], function(exports_1, context_1) {
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
    var core_1, msn_service_1;
    var EditAdminComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (msn_service_1_1) {
                msn_service_1 = msn_service_1_1;
            }],
        execute: function() {
            EditAdminComponent = (function () {
                function EditAdminComponent(mSNService) {
                    this.mSNService = mSNService;
                    this.init();
                }
                EditAdminComponent.prototype.init = function () {
                    var _this = this;
                    this.mSNService.getContext(function (context) { return _this.OnContextLoaded(context); });
                };
                EditAdminComponent.prototype.OnContextLoaded = function (context) {
                    context.ADMININFOes.toArray().then(function (admininfoes) {
                    });
                };
                EditAdminComponent = __decorate([
                    core_1.Component({
                        selector: 'editadmin',
                        templateUrl: 'app/core/adminview/adminuser/editadmin.html',
                    }), 
                    __metadata('design:paramtypes', [msn_service_1.MSNService])
                ], EditAdminComponent);
                return EditAdminComponent;
            }());
            exports_1("EditAdminComponent", EditAdminComponent);
        }
    }
});
//# sourceMappingURL=editadmin.js.map