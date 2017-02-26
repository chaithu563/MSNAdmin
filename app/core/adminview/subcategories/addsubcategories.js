System.register(["@angular/core", "../../../services/msn.service", "@angular/router", "ng2-cloudinary"], function (exports_1, context_1) {
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
    var core_1, msn_service_1, router_1, ng2_cloudinary_1, AddSubCategoriesComponent;
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
            },
            function (ng2_cloudinary_1_1) {
                ng2_cloudinary_1 = ng2_cloudinary_1_1;
            }
        ],
        execute: function () {
            AddSubCategoriesComponent = (function () {
                function AddSubCategoriesComponent(mSNService, router) {
                    this.mSNService = mSNService;
                    this.router = router;
                    this.cloudinaryOptions = new ng2_cloudinary_1.CloudinaryOptions({
                        cloud_name: 'myserviceneed',
                        upload_preset: 'e8pd1qgk',
                        autoUpload: true,
                        api_key: 375471576546793,
                        api_secret: "u0oknAWF4KFEswzF-OOs_KubB30"
                    });
                    this.serviceiconuploader = new ng2_cloudinary_1.CloudinaryUploader(this.cloudinaryOptions);
                    this.serviceimageuploader = new ng2_cloudinary_1.CloudinaryUploader(this.cloudinaryOptions);
                    this.init();
                    this.getCategoriesOnOpen();
                    this.subcategory = [];
                    var _this = this;
                    this.serviceiconuploader.onSuccessItem = function (item, response, status, headers) {
                        var image = JSON.parse(response);
                        _this.serviceicon = (image.public_id);
                        return { item: item, response: response, status: status, headers: headers };
                    };
                    this.serviceimageuploader.onSuccessItem = function (item, response, status, headers) {
                        var image = JSON.parse(response);
                        _this.serviceimage = (image.public_id);
                        return { item: item, response: response, status: status, headers: headers };
                    };
                }
                AddSubCategoriesComponent.prototype.init = function () {
                    var _this = this;
                    this.mSNService.getContext(function (context) { return _this.OnContextLoaded(context); });
                };
                AddSubCategoriesComponent.prototype.OnContextLoaded = function (context) {
                    var _this = this;
                    _this.context = context;
                };
                AddSubCategoriesComponent.prototype.OnCategoriesContextLoaded = function (context) {
                    var _this = this;
                    _this.context = context;
                    context.SERVICECATEGORies.toArray().then(function (categories) {
                        _this.categories = categories;
                        console.log(_this.categories);
                        // _this.createRowData();
                    });
                };
                AddSubCategoriesComponent.prototype.loadCategoriesContext = function () {
                    var _this = this;
                    this.mSNService.getContext(function (context) { return _this.OnCategoriesContextLoaded(context); });
                };
                AddSubCategoriesComponent.prototype.getCategoriesOnOpen = function () {
                    this.loadCategoriesContext();
                };
                AddSubCategoriesComponent.prototype.saveSubCategory = function (subcategory) {
                    // var userdetails=[];
                    var _this = this;
                    this.subcategory.NAME = subcategory.NAME;
                    this.subcategory.DESCRIPTION = subcategory.DESCRIPTION;
                    this.subcategory.SERVICECATEGORYID = subcategory.SERVICECATEGORYID;
                    this.subcategory.IMAGEPUBLICKEY = this.serviceimage;
                    this.subcategory.ICONPUBLICKEY = this.serviceicon;
                    this.context.SERVICESUBCATEGORies.add(this.subcategory);
                    //this.userdetailsorig.ID = 2;
                    //	this.context.ADMININFOes.add(this.userdetailsorig);
                    console.log(subcategory);
                    //this.context.saveChanges();
                    //this.router.navigate(['cityareas']);
                    this.context.saveChanges().then(function () {
                        _this.router.navigate(['subcategories']);
                    });
                };
                AddSubCategoriesComponent.prototype.onCategoryChange = function (id) {
                    this.subcategory.SERVICECATEGORYID = id;
                };
                return AddSubCategoriesComponent;
            }());
            AddSubCategoriesComponent = __decorate([
                core_1.Component({
                    selector: 'addsubcategory',
                    templateUrl: 'app/core/adminview/subcategories/addsubcategories.html',
                }),
                __metadata("design:paramtypes", [msn_service_1.MSNService, router_1.Router])
            ], AddSubCategoriesComponent);
            exports_1("AddSubCategoriesComponent", AddSubCategoriesComponent);
        }
    };
});
//# sourceMappingURL=addsubcategories.js.map