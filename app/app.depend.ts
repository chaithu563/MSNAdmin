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

import {CityAreasComponent} from './core/adminview/cityareas/cityareas';
import {EditAreaComponent} from './core/adminview/cityareas/editarea';
import {AddAreaComponent} from './core/adminview/cityareas/addarea';

import {MembershipComponent} from './core/adminview/membership/membership';
import {EditMembershipComponent} from './core/adminview/membership/editmembership';
import {AddMembershipComponent} from './core/adminview/membership/addmembership';


import {CategoriesComponent} from './core/adminview/categories/categories';
import {EditCategoriesComponent} from './core/adminview/categories/editcategories';
import {AddCategoriesComponent} from './core/adminview/categories/addcategories';

import {SubCategoriesComponent} from './core/adminview/subcategories/subcategories';
import {EditSubCategoriesComponent} from './core/adminview/subcategories/editsubcategories';
import {AddSubCategoriesComponent} from './core/adminview/subcategories/addsubcategories';


//import {AccordionPanelComponent, AccordionComponent} from 'ng2-bootstrap/components/accordion';
export const myComponents = [
    HeaderComponent, LeftMenuComponent, AdminViewComponent, AppComponent, AdminUserComponent, EditAdminComponent, AddAdminComponent, CitiesComponent, EditCityComponent, AddCitiesComponent, CityAreasComponent, EditAreaComponent, AddAreaComponent,
    MembershipComponent, EditMembershipComponent, AddMembershipComponent, CategoriesComponent, EditCategoriesComponent, AddCategoriesComponent, SubCategoriesComponent, EditSubCategoriesComponent, AddSubCategoriesComponent
];

export const myDirectives = [
   
];

export const myPipes = [
    
];