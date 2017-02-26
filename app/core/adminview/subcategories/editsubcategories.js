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
    var core_1, msn_service_1, router_1, ng2_cloudinary_1, EditSubCategoriesComponent;
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
            EditSubCategoriesComponent = (function () {
                function EditSubCategoriesComponent(mSNService, route, router) {
                    this.mSNService = mSNService;
                    this.route = route;
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
                    this.subcategory = [];
                    var _this = this;
                    this.serviceiconuploader.onSuccessItem = function (item, response, status, headers) {
                        var image = JSON.parse(response);
                        _this.serviceicon = (image.public_id);
                        this.subcategory.ICONPUBLICKEY = _this.serviceicon;
                        return { item: item, response: response, status: status, headers: headers };
                    };
                    this.serviceimageuploader.onSuccessItem = function (item, response, status, headers) {
                        var image = JSON.parse(response);
                        _this.serviceimage = (image.public_id);
                        _this.subcategory.IMAGEPUBLICKEY = _this.serviceimage;
                        return { item: item, response: response, status: status, headers: headers };
                    };
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
                    this.subcategoryorig.IMAGEPUBLICKEY = this.serviceimage;
                    this.subcategoryorig.ICONPUBLICKEY = this.serviceicon;
                    console.log(subcat);
                    this.context.saveChanges().then(function () {
                        _this.router.navigate(['subcategories']);
                    });
                };
                return EditSubCategoriesComponent;
            }());
            EditSubCategoriesComponent = __decorate([
                core_1.Component({
                    selector: 'editadmin',
                    templateUrl: 'app/core/adminview/subcategories/editsubcategories.html',
                    styleUrls: ['app/core/adminview/subcategories/subcategories.css'],
                }),
                __metadata("design:paramtypes", [msn_service_1.MSNService, router_1.ActivatedRoute, router_1.Router])
            ], EditSubCategoriesComponent);
            exports_1("EditSubCategoriesComponent", EditSubCategoriesComponent);
        }
    };
});
//# sourceMappingURL=editsubcategories.js.map