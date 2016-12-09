import { Component } from '@angular/core';
import {GridOptions} from 'ag-grid/main';
import { MSNService } from '../../../services/msn.service';
import {Router, ActivatedRoute } from '@angular/router';
@Component({
    selector: 'editadmin',
    templateUrl: 'app/core/adminview/subcategories/editsubcategories.html',

})


export class EditSubCategoriesComponent {



    private rowData: any[];
    private columnDefs: any[];
    private rowCount: string;
    private subcategory: any;
    private subcategoryorig: any;
    private context: any;
    constructor(private mSNService: MSNService, private route: ActivatedRoute, private router: Router) {

        this.init();

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
        var subcatid = _this.route.snapshot.params['id'];
        _this.context.SERVICESUBCATEGORies.first("x=> x.ID == this.SubCatid", { SubCatid: subcatid })
            .then(function (subcategory) {

                _this.subcategory = JSON.parse(JSON.stringify(subcategory));
                _this.subcategoryorig = subcategory;

            });

    }

    private saveSubCategory(subcat) {
        this.context.SERVICESUBCATEGORies.attachOrGet(this.subcategoryorig);
        var _this = this;
        this.subcategoryorig.NAME = subcat.NAME;
        this.subcategoryorig.DESCRIPTION = subcat.DESCRIPTION;
        console.log(subcat);
        this.context.saveChanges().then(function () {
            _this.router.navigate(['subcategories']);
        });



    }

}
