System.register(["@angular/router", "./core/adminview/adminuser/adminuser", "./core/adminview/adminuser/editadmin", "./core/adminview/adminuser/addadmin", "./core/adminview/cities/cities", "./core/adminview/cities/EditCity", "./core/adminview/cities/AddCities", "./core/adminview/cityareas/cityareas", "./core/adminview/cityareas/editarea", "./core/adminview/cityareas/addarea", "./core/adminview/membership/membership", "./core/adminview/membership/editmembership", "./core/adminview/membership/addmembership", "./core/adminview/categories/categories", "./core/adminview/categories/editcategories", "./core/adminview/categories/addcategories", "./core/adminview/subcategories/subcategories", "./core/adminview/subcategories/editsubcategories", "./core/adminview/subcategories/addsubcategories"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, adminuser_1, editadmin_1, addadmin_1, cities_1, EditCity_1, AddCities_1, cityareas_1, editarea_1, addarea_1, membership_1, editmembership_1, addmembership_1, categories_1, editcategories_1, addcategories_1, subcategories_1, editsubcategories_1, addsubcategories_1, appRoutes, routing;
    return {
        setters: [
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
            },
            function (cities_1_1) {
                cities_1 = cities_1_1;
            },
            function (EditCity_1_1) {
                EditCity_1 = EditCity_1_1;
            },
            function (AddCities_1_1) {
                AddCities_1 = AddCities_1_1;
            },
            function (cityareas_1_1) {
                cityareas_1 = cityareas_1_1;
            },
            function (editarea_1_1) {
                editarea_1 = editarea_1_1;
            },
            function (addarea_1_1) {
                addarea_1 = addarea_1_1;
            },
            function (membership_1_1) {
                membership_1 = membership_1_1;
            },
            function (editmembership_1_1) {
                editmembership_1 = editmembership_1_1;
            },
            function (addmembership_1_1) {
                addmembership_1 = addmembership_1_1;
            },
            function (categories_1_1) {
                categories_1 = categories_1_1;
            },
            function (editcategories_1_1) {
                editcategories_1 = editcategories_1_1;
            },
            function (addcategories_1_1) {
                addcategories_1 = addcategories_1_1;
            },
            function (subcategories_1_1) {
                subcategories_1 = subcategories_1_1;
            },
            function (editsubcategories_1_1) {
                editsubcategories_1 = editsubcategories_1_1;
            },
            function (addsubcategories_1_1) {
                addsubcategories_1 = addsubcategories_1_1;
            }
        ],
        execute: function () {
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
                    path: 'admindetails/:id', component: editadmin_1.EditAdminComponent
                },
                {
                    path: 'cities',
                    component: cities_1.CitiesComponent
                },
                {
                    path: 'addcities',
                    component: AddCities_1.AddCitiesComponent
                },
                {
                    path: 'cities/:id', component: EditCity_1.EditCityComponent
                },
                {
                    path: 'cityareas',
                    component: cityareas_1.CityAreasComponent
                },
                {
                    path: 'cities/:id', component: EditCity_1.EditCityComponent
                },
                {
                    path: 'area/:id',
                    component: editarea_1.EditAreaComponent
                },
                {
                    path: 'addarea',
                    component: addarea_1.AddAreaComponent
                },
                {
                    path: 'memberships',
                    component: membership_1.MembershipComponent
                },
                {
                    path: 'addmembership',
                    component: addmembership_1.AddMembershipComponent
                },
                {
                    path: 'membership/:id', component: editmembership_1.EditMembershipComponent
                },
                {
                    path: 'categories',
                    component: categories_1.CategoriesComponent
                },
                {
                    path: 'addcategories',
                    component: addcategories_1.AddCategoriesComponent
                },
                {
                    path: 'categories/:id', component: editcategories_1.EditCategoriesComponent
                },
                {
                    path: 'subcategories',
                    component: subcategories_1.SubCategoriesComponent
                },
                {
                    path: 'addsubcategories',
                    component: addsubcategories_1.AddSubCategoriesComponent
                },
                {
                    path: 'subcategories/:id', component: editsubcategories_1.EditSubCategoriesComponent
                },
            ];
            exports_1("routing", routing = router_1.RouterModule.forRoot(appRoutes));
        }
    };
});
//# sourceMappingURL=app.routing.js.map