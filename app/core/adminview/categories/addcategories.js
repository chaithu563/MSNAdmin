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
    var core_1, msn_service_1, router_1, AddCategoriesComponent;
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
            AddCategoriesComponent = (function () {
                function AddCategoriesComponent(mSNService, router) {
                    this.mSNService = mSNService;
                    this.router = router;
                    this.init();
                    this.categories = [];
                }
                AddCategoriesComponent.prototype.init = function () {
                    var _this = this;
                    this.mSNService.getContext(function (context) { return _this.OnContextLoaded(context); });
                };
                AddCategoriesComponent.prototype.OnContextLoaded = function (context) {
                    var _this = this;
                    _this.context = context;
                };
                AddCategoriesComponent.prototype.saveCategories = function (categories) {
                    // var userdetails=[];
                    var _this = this;
                    this.categories.NAME = categories.NAME;
                    this.categories.DESCRIPTION = categories.DESCRIPTION;
                    this.context.SERVICECATEGORies.add(this.categories);
                    //this.userdetailsorig.ID = 2;
                    //	this.context.ADMININFOes.add(this.userdetailsorig);
                    console.log(categories);
                    //this.context.saveChanges();
                    this.context.saveChanges().then(function () {
                        _this.router.navigate(['categories']);
                    });
                };
                return AddCategoriesComponent;
            }());
            AddCategoriesComponent = __decorate([
                core_1.Component({
                    selector: 'addcity',
                    templateUrl: 'app/core/adminview/categories/addcategories.html',
                }),
                __metadata("design:paramtypes", [msn_service_1.MSNService, router_1.Router])
            ], AddCategoriesComponent);
            exports_1("AddCategoriesComponent", AddCategoriesComponent);
        }
    };
});
//# sourceMappingURL=addcategories.js.map