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
    var EditAreaComponent;
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
            EditAreaComponent = (function () {
                function EditAreaComponent(mSNService, route, router) {
                    this.mSNService = mSNService;
                    this.route = route;
                    this.router = router;
                    this.init();
                    this.area = [];
                }
                EditAreaComponent.prototype.init = function () {
                    var _this = this;
                    this.mSNService.getContext(function (context) { return _this.OnContextLoaded(context); });
                };
                EditAreaComponent.prototype.OnContextLoaded = function (context) {
                    var _this = this;
                    _this.context = context;
                    var areaid = _this.route.snapshot.params['id'];
                    _this.context.CITYAREAs.first("x=> x.ID == this.Areaid", { Areaid: areaid })
                        .then(function (area) {
                        _this.area = JSON.parse(JSON.stringify(area));
                        _this.areaorig = area;
                    });
                };
                EditAreaComponent.prototype.saveArea = function (area) {
                    this.context.CITYAREAs.attachOrGet(this.areaorig);
                    var _this = this;
                    this.areaorig.NAME = area.NAME;
                    this.areaorig.DESCRIPTION = area.DESCRIPTION;
                    console.log(area);
                    this.context.saveChanges().then(function () {
                        _this.router.navigate(['cityareas']);
                    });
                };
                EditAreaComponent = __decorate([
                    core_1.Component({
                        selector: 'editadmin',
                        templateUrl: 'app/core/adminview/cityareas/editarea.html',
                    }), 
                    __metadata('design:paramtypes', [msn_service_1.MSNService, router_1.ActivatedRoute, router_1.Router])
                ], EditAreaComponent);
                return EditAreaComponent;
            }());
            exports_1("EditAreaComponent", EditAreaComponent);
        }
    }
});
//# sourceMappingURL=editarea.js.map