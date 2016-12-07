import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {AdminUserComponent} from './core/adminview/adminuser/adminuser';
import {EditAdminComponent} from './core/adminview/adminuser/editadmin';
import {AddAdminComponent} from './core/adminview/adminuser/addadmin';

import {CitiesComponent} from './core/adminview/cities/cities';
import {EditCityComponent} from './core/adminview/cities/EditCity';
import {AddCitiesComponent} from './core/adminview/cities/AddCities';

import {CityAreasComponent} from './core/adminview/cityareas/cityareas';

// Route Configuration
//export const routes: Routes = [
//		{ path: '/manageadmins', component: AdminUserComponent }
//];

const appRoutes: Routes = [
  {
    path: 'manageadmins',
    component: AdminUserComponent
    },
  {
      path: 'addadmin',
      component: AddAdminComponent
  },

	 {
		 path: 'admindetails/:id', component: EditAdminComponent
   
  },
     {
         path: 'cities',
         component: CitiesComponent
     },
     {
         path: 'addcities',
         component: AddCitiesComponent
     },

     {
         path: 'cities/:id', component: EditCityComponent

     }
     {
         path: 'cityareas',
         component: CityAreasComponent
     },
 
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);