import { AppComponent }   from './app.component';
import { HeaderComponent } from './core/header/header';
import {LeftMenuComponent} from './core/leftmenu/leftmenu';
import {AdminViewComponent} from './core/adminview/adminview';
import {AdminUserComponent} from './core/adminview/adminuser/adminuser';
import {EditAdminComponent} from './core/adminview/adminuser/editadmin';
import {AddAdminComponent} from './core/adminview/adminuser/addadmin';

import {CitiesComponent} from './core/adminview/cities/cities';
import {EditCityComponent} from './core/adminview/cities/EditCity';
import {AddCitiesComponent} from './core/adminview/cities/AddCities';
//import {AccordionPanelComponent, AccordionComponent} from 'ng2-bootstrap/components/accordion';
export const myComponents = [
    HeaderComponent, LeftMenuComponent, AdminViewComponent, AppComponent, AdminUserComponent, EditAdminComponent, AddAdminComponent, CitiesComponent, EditCityComponent, AddCitiesComponent
];

export const myDirectives = [
   
];

export const myPipes = [
    
];