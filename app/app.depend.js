System.register(['./app.component', './core/header/header', './core/leftmenu/leftmenu', './core/adminview/adminview'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var app_component_1, header_1, leftmenu_1, adminview_1;
    var myComponents, myDirectives, myPipes;
    return {
        setters:[
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (header_1_1) {
                header_1 = header_1_1;
            },
            function (leftmenu_1_1) {
                leftmenu_1 = leftmenu_1_1;
            },
            function (adminview_1_1) {
                adminview_1 = adminview_1_1;
            }],
        execute: function() {
            exports_1("myComponents", myComponents = [
                header_1.HeaderComponent, leftmenu_1.LeftMenuComponent, adminview_1.AdminViewComponent, app_component_1.AppComponent
            ]);
            exports_1("myDirectives", myDirectives = []);
            exports_1("myPipes", myPipes = []);
        }
    }
});
//# sourceMappingURL=app.depend.js.map