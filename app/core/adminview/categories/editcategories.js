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
    var EditCategoriesComponent;
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
            EditCategoriesComponent = (function () {
                function EditCategoriesComponent(mSNService, route, router) {
                    this.mSNService = mSNService;
                    this.route = route;
                    this.router = router;
                    this.init();
                    this.categories = [];
                }
                EditCategoriesComponent.prototype.init = function () {
                    var _this = this;
                    this.mSNService.getContext(function (context) { return _this.OnContextLoaded(context); });
                };
                EditCategoriesComponent.prototype.OnContextLoaded = function (context) {
                    var _this = this;
                    _this.context = context;
                    var categoriesid = _this.route.snapshot.params['id'];
                    _this.context.SERVICECATEGORies.first("x=> x.ID == this.Categoriesid", { Categoriesid: categoriesid })
                        .then(function (categories) {
                        _this.categories = JSON.parse(JSON.stringify(categories));
                        _this.categoriesorig = categories;
                    });
                };
                EditCategoriesComponent.prototype.saveCategories = function (categories) {
                    this.context.SERVICECATEGORies.attachOrGet(this.categoriesorig);
                    var _this = this;
                    this.categoriesorig.NAME = categories.NAME;
                    this.categoriesorig.DESCRIPTION = categories.DESCRIPTION;
                    // this.context.CITies.add(this.cityorig);
                    console.log(categories);
                    this.context.saveChanges().then(function () {
                        _this.router.navigate(['categories']);
                    });
                };
                EditCategoriesComponent = __decorate([
                    core_1.Component({
                        selector: 'editadmin',
                        templateUrl: 'app/core/adminview/categories/editcategories.html',
                    }), 
                    __metadata('design:paramtypes', [msn_service_1.MSNService, router_1.ActivatedRoute, router_1.Router])
                ], EditCategoriesComponent);
                return EditCategoriesComponent;
            }());
            exports_1("EditCategoriesComponent", EditCategoriesComponent);
        }
    }
});
//# sourceMappingURL=editcategories.js.map