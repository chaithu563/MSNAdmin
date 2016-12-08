import { Component } from '@angular/core';
import {GridOptions} from 'ag-grid/main';
import { MSNService } from '../../../services/msn.service';
import {Router, ActivatedRoute } from '@angular/router';
@Component({
    selector: 'editadmin',
    templateUrl: 'app/core/adminview/categories/editcategories.html',

})


export class EditCategoriesComponent {

    private gridOptions: GridOptions;
    private showGrid: boolean;
    private rowData: any[];
    private columnDefs: any[];
    private rowCount: string;
    private categories: any;
    private categoriesorig: any;
    private context: any;
    constructor(private mSNService: MSNService, private route: ActivatedRoute, private router: Router) {

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
        var categoriesid = _this.route.snapshot.params['id'];
        _this.context.SERVICECATEGORies.first("x=> x.ID == this.Categoriesid", { Categoriesid: categoriesid })
            .then(function (categories) {

                _this.categories = JSON.parse(JSON.stringify(categories));
                _this.categoriesorig = categories;

            });

    }

    private saveCategories(categories) {
        this.context.SERVICECATEGORies.attachOrGet(this.categoriesorig);
        var _this = this;
        this.categoriesorig.NAME = categories.NAME;
        this.categoriesorig.DESCRIPTION = categories.DESCRIPTION;
        // this.context.CITies.add(this.cityorig);
        console.log(categories);
        this.context.saveChanges().then(function () {
            _this.router.navigate(['categories']);
        });



    }

}
