System.register(['@angular/router', './core/adminview/adminuser/adminuser', './core/adminview/adminuser/editadmin', './core/adminview/adminuser/addadmin'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, adminuser_1, editadmin_1, addadmin_1;
    var appRoutes, routing;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (adminuser_1_1) {
                adminuser_1 = adminuser_1_1;
            },
            function (editadmin_1_1) {
                editadmin_1 = editadmin_1_1;
            },
            function (addadmin_1_1) {
                addadmin_1 = addadmin_1_1;
            }],
        execute: function() {
            // Route Configuration
            //export const routes: Routes = [
            //		{ path: '/manageadmins', component: AdminUserComponent }
            //];
            appRoutes = [
                {
                    path: 'manageadmins',
                    component: adminuser_1.AdminUserComponent
                },
                {
                    path: 'addadmin',
                    component: addadmin_1.AddAdminComponent
                },
                {
                    path: 'admindetails/:id', component: editadmin_1.EditAdminComponent,
                }
            ];
            exports_1("routing", routing = router_1.RouterModule.forRoot(appRoutes));
        }
    }
});
//# sourceMappingURL=app.routing.js.map