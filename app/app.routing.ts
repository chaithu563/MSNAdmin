import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {AdminUserComponent} from './core/adminview/adminuser/adminuser';
import {EditAdminComponent} from './core/adminview/adminuser/editadmin';

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
		 path: 'admindetails/:id', component: EditAdminComponent,
    //children: [
    //  { path: '', redirectTo: 'overview', pathMatch: 'full' },
    //  { path: 'overview', component: EditAdminComponent }
    // // { path: 'specs', component: Specs }
    //]
  }
  //{
  //  	path: 'dashboard',
  //  	component: DashboardComponent
  //  },
	//{
	//	path: '',
	//	component: AppComponent
	//	//redirectTo: '/dashboard',
	//	//pathMatch: 'full'
	//},
	//{
	//	path: 'detail/:id',
	//	component: HeroDetailComponent
	//},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);