System.register(['@angular/core', './services/msn.service'], function(exports_1, context_1) {
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
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (msn_service_1_1) {
                msn_service_1 = msn_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(mSNService) {
                    this.mSNService = mSNService;
                    this.init();
                }
                AppComponent.prototype.init = function () {
                    var _this = this;
                    this.mSNService.getContext(function (context) { return _this.OnContextLoaded(context); });
                };
                AppComponent.prototype.OnContextLoaded = function (context) {
                    context.CITies.toArray(function (cities) {
                        this.cities = cities;
                        console.log(this.cities);
                    });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        //  template: '<header> </header> <leftmenu> </leftmenu> <adminview></adminview>',
                        template: '<header> </header> <div class="row" >  <div class="col-md-3" style="height: 100%;"> <leftmenu> </leftmenu> </div> <div class="col-md-9" style="height: 100%;"> <adminview></adminview>  </div> </div>',
                        providers: [msn_service_1.MSNService]
                    }), 
                    __metadata('design:paramtypes', [msn_service_1.MSNService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map