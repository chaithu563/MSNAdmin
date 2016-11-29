System.register(['@angular/core', '@angular/router', './adminuser/adminuser'], function(exports_1, context_1) {
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
    var core_1, router_1, adminuser_1;
    var routes, routing, AdminViewComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (adminuser_1_1) {
                adminuser_1 = adminuser_1_1;
            }],
        execute: function() {
            // Route Configuration
            exports_1("routes", routes = [
                { path: '/manageadmins', component: adminuser_1.AdminUserComponent }
            ]);
            exports_1("routing", routing = router_1.RouterModule.forRoot(routes));
            AdminViewComponent = (function () {
                function AdminViewComponent() {
                }
                AdminViewComponent = __decorate([
                    core_1.Component({
                        selector: 'adminview',
                        templateUrl: 'app/core/adminview/adminview.html',
                        styleUrls: ['app/core/adminview/adminview.css'],
                        providers: [],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AdminViewComponent);
                return AdminViewComponent;
            }());
            exports_1("AdminViewComponent", AdminViewComponent);
        }
    }
});
//# sourceMappingURL=adminview.js.map