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
    var EditSubCategoriesComponent;
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
            EditSubCategoriesComponent = (function () {
                function EditSubCategoriesComponent(mSNService, route, router) {
                    this.mSNService = mSNService;
                    this.route = route;
                    this.router = router;
                    this.init();
                    this.subcategory = [];
                }
                EditSubCategoriesComponent.prototype.init = function () {
                    var _this = this;
                    this.mSNService.getContext(function (context) { return _this.OnContextLoaded(context); });
                };
                EditSubCategoriesComponent.prototype.OnContextLoaded = function (context) {
                    var _this = this;
                    _this.context = context;
                    var subcatid = _this.route.snapshot.params['id'];
                    _this.context.SERVICESUBCATEGORies.first("x=> x.ID == this.SubCatid", { SubCatid: subcatid })
                        .then(function (subcategory) {
                        _this.subcategory = JSON.parse(JSON.stringify(subcategory));
                        _this.subcategoryorig = subcategory;
                    });
                };
                EditSubCategoriesComponent.prototype.saveSubCategory = function (subcat) {
                    this.context.SERVICESUBCATEGORies.attachOrGet(this.subcategoryorig);
                    var _this = this;
                    this.subcategoryorig.NAME = subcat.NAME;
                    this.subcategoryorig.DESCRIPTION = subcat.DESCRIPTION;
                    console.log(subcat);
                    this.context.saveChanges().then(function () {
                        _this.router.navigate(['subcategories']);
                    });
                };
                EditSubCategoriesComponent = __decorate([
                    core_1.Component({
                        selector: 'editadmin',
                        templateUrl: 'app/core/adminview/subcategories/editsubcategories.html',
                    }), 
                    __metadata('design:paramtypes', [msn_service_1.MSNService, router_1.ActivatedRoute, router_1.Router])
                ], EditSubCategoriesComponent);
                return EditSubCategoriesComponent;
            }());
            exports_1("EditSubCategoriesComponent", EditSubCategoriesComponent);
        }
    }
});
//# sourceMappingURL=editsubcategories.js.map