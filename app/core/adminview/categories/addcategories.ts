import { Component } from '@angular/core';
import {GridOptions} from 'ag-grid/main';
import { MSNService } from '../../../services/msn.service';
import {Router} from '@angular/router';
@Component({
    selector: 'addcity',
    templateUrl: 'app/core/adminview/categories/addcategories.html',

})


export class AddCategoriesComponent {



    private rowData: any[];
    private columnDefs: any[];
    private rowCount: string;
    private categories: any;
   
    private context: any;
    constructor(private mSNService: MSNService, private router: Router) {

        this.init();

        this.categories = [];

    }

    private init() {

        this.mSNService.getContext(
            context => this.OnContextLoaded(context)
        );
    }
    private OnContextLoaded(context: any) {
        var _this = this;
        _this.context = context;


    }

    private saveCategories(categories) {

        // var userdetails=[];
      
        var _this = this;
        this.categories.NAME = categories.NAME;
        this.categories.DESCRIPTION = categories.DESCRIPTION;
        this.context.SERVICECATEGORies.add(this.categories);
        //this.userdetailsorig.ID = 2;
        //	this.context.ADMININFOes.add(this.userdetailsorig);
        console.log(categories);
        //this.context.saveChanges();

    
        this.context.saveChanges().then(function () {
            _this.router.navigate(['categories']);
        });

    }

}
   