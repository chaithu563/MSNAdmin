System.register(['./app.component', './core/header/header', './core/leftmenu/leftmenu', './core/adminview/adminview', './core/adminview/adminuser/adminuser', './core/adminview/adminuser/editadmin', './core/adminview/adminuser/addadmin', './core/adminview/cities/cities', './core/adminview/cities/EditCity', './core/adminview/cities/AddCities', './core/adminview/cityareas/cityareas', './core/adminview/cityareas/editarea', './core/adminview/cityareas/addarea'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var app_component_1, header_1, leftmenu_1, adminview_1, adminuser_1, editadmin_1, addadmin_1, cities_1, EditCity_1, AddCities_1, cityareas_1, editarea_1, addarea_1;
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
            }],
        execute: function() {
            //import {AccordionPanelComponent, AccordionComponent} from 'ng2-bootstrap/components/accordion';
            exports_1("myComponents", myComponents = [
                header_1.HeaderComponent, leftmenu_1.LeftMenuComponent, adminview_1.AdminViewComponent, app_component_1.AppComponent, adminuser_1.AdminUserComponent, editadmin_1.EditAdminComponent, addadmin_1.AddAdminComponent, cities_1.CitiesComponent, EditCity_1.EditCityComponent, AddCities_1.AddCitiesComponent, cityareas_1.CityAreasComponent, editarea_1.EditAreaComponent, addarea_1.AddAreaComponent
            ]);
            exports_1("myDirectives", myDirectives = []);
            exports_1("myPipes", myPipes = []);
        }
    }
});
//# sourceMappingURL=app.depend.js.map