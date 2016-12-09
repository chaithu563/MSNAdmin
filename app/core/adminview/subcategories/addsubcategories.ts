import { Component } from '@angular/core';
import {GridOptions} from 'ag-grid/main';
import { MSNService } from '../../../services/msn.service';
import {Router} from '@angular/router';
@Component({
    selector: 'addcity',
    templateUrl: 'app/core/adminview/subcategories/addsubcategories.html',

})


export class AddSubCategoriesComponent {



    private rowData: any[];
    private columnDefs: any[];
    private rowCount: string;
    private subcategory: any;
    private categories: any;
    private subcategoryorig: any;
    private context: any;
    constructor(private mSNService: MSNService, private router: Router) {

        this.init();
        this.getCategoriesOnOpen();
        this.subcategory = [];

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

    private OnCategoriesContextLoaded(context) {

        var _this = this;
        _this.context = context;
        context.SERVICECATEGORies.toArray().then(function (categories) {

            _this.categories = categories;
            console.log(_this.categories);
            // _this.createRowData();

        });

    }

    private loadCategoriesContext() {

        this.mSNService.getContext(
            context => this.OnCategoriesContextLoaded(context)
        );

    }

    private getCategoriesOnOpen() {

        this.loadCategoriesContext();

    }

    private saveSubCategory(subcategory) {

        // var userdetails=[];
      
        var _this = this;
        this.subcategory.NAME = subcategory.NAME;
        this.subcategory.DESCRIPTION = subcategory.DESCRIPTION;
        this.subcategory.SERVICECATEGORYID = subcategory.SERVICECATEGORYID;
        this.context.SERVICESUBCATEGORies.add(this.subcategory);
        //this.userdetailsorig.ID = 2;
        //	this.context.ADMININFOes.add(this.userdetailsorig);
        console.log(subcategory);
        //this.context.saveChanges();

        //this.router.navigate(['cityareas']);
        this.context.saveChanges().then(function () {
            _this.router.navigate(['subcategories']);
        });

    }

    private onCategoryChange(id) {

        this.subcategory.SERVICECATEGORYID = id;
    }
}
   