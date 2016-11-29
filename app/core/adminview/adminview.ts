import { Component, ModuleWithProviders } from '@angular/core';

import { Routes, RouterModule, ROUTER_DIRECTIVES } from '@angular/router';
import {AdminUserComponent} from './adminuser/adminuser';


// Route Configuration
export const routes: Routes = [
		{ path: '/manageadmins', component: AdminUserComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@Component({
	selector: 'adminview',
	templateUrl: 'app/core/adminview/adminview.html',
	styleUrls: ['app/core/adminview/adminview.css'],
	providers: [],
	directives: [ROUTER_DIRECTIVES]
})
export class AdminViewComponent {

	constructor() {



	}

}
