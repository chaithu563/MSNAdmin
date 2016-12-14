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
    var core_1, msn_service_1, router_1, AddAreaComponent;
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
            AddAreaComponent = (function () {
                function AddAreaComponent(mSNService, router) {
                    this.mSNService = mSNService;
                    this.router = router;
                    this.init();
                    this.getCitiesOnOpen();
                    this.area = [];
                }
                AddAreaComponent.prototype.init = function () {
                    var _this = this;
                    this.mSNService.getContext(function (context) { return _this.OnContextLoaded(context); });
                };
                AddAreaComponent.prototype.OnContextLoaded = function (context) {
                    var _this = this;
                    _this.context = context;
                };
                AddAreaComponent.prototype.OnCitiesContextLoaded = function (context) {
                    var _this = this;
                    _this.context = context;
                    context.CITies.toArray().then(function (cities) {
                        _this.cities = cities;
                        console.log(_this.cities);
                        // _this.createRowData();
                    });
                };
                AddAreaComponent.prototype.loadCitiesContext = function () {
                    var _this = this;
                    this.mSNService.getContext(function (context) { return _this.OnCitiesContextLoaded(context); });
                };
                AddAreaComponent.prototype.getCitiesOnOpen = function () {
                    this.loadCitiesContext();
                };
                AddAreaComponent.prototype.saveArea = function (area) {
                    // var userdetails=[];
                    var _this = this;
                    this.area.NAME = area.NAME;
                    this.area.DESCRIPTION = area.DESCRIPTION;
                    this.area.CITYID = area.CITYID;
                    this.context.CITYAREAs.add(this.area);
                    //this.userdetailsorig.ID = 2;
                    //	this.context.ADMININFOes.add(this.userdetailsorig);
                    console.log(area);
                    //this.context.saveChanges();
                    //this.router.navigate(['cityareas']);
                    this.context.saveChanges().then(function () {
                        _this.router.navigate(['cityareas']);
                    });
                };
                AddAreaComponent.prototype.onCityChange = function (id) {
                    this.area.CITYID = id;
                };
                return AddAreaComponent;
            }());
            AddAreaComponent = __decorate([
                core_1.Component({
                    selector: 'addcity',
                    templateUrl: 'app/core/adminview/cityareas/addarea.html',
                }),
                __metadata("design:paramtypes", [msn_service_1.MSNService, router_1.Router])
            ], AddAreaComponent);
            exports_1("AddAreaComponent", AddAreaComponent);
        }
    };
});
//# sourceMappingURL=addarea.js.map