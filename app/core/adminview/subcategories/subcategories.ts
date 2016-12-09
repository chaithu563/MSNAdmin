import { Component } from '@angular/core';
import {GridOptions} from 'ag-grid/main';
import { MSNService } from '../../../services/msn.service';

import {Router} from '@angular/router';
@Component({
    selector: 'adminuser',
    templateUrl: 'app/core/adminview/subcategories/subcategories.html',
    styleUrls: ['app/core/adminview/subcategories/subcategories.css']
    //providers: [],
    //children: [
    //	{ path: '' },
    //	{ path: 'manageadmins/:id', component: EditAdminComponent },
    //]
})


export class SubCategoriesComponent {

    private gridOptions: GridOptions;
    private showGrid: boolean;
    private rowData: any[];
    private columnDefs: any[];
    private rowCount: string;
    private categories: any;
    private subcategories: any;
    private context: any;
    private _this: any;
    constructor(private mSNService: MSNService, private router: Router) {

       // this.init();
        this.gridOptions = <GridOptions>{};

        this.createColumnDefs();
        this.showGrid = true;

    }

    private onCategoryChange(id) {

        this.mSNService.getContext(
            context => this.OnContextLoaded(context,id)
        );
    }
    private OnContextLoaded(context: any,id: number) {
        var _this = this;
        _this.context = context;
        context.SERVICESUBCATEGORies.filter("x=>x.SERVICECATEGORYID==this.catid", { catid: parseFloat(id.toString()) }).toArray().then(function (subcategories) {

            _this.subcategories = subcategories;
            console.log(_this.subcategories);
            _this.createRowData();

        });

    }

    public createRowData() {
        var rowData: any[] = [];

        for (var i = 0; i < this.subcategories.length; i++) {
            var subcategory = this.subcategories;
            rowData.push({
                id: subcategory[i].ID,
                name: subcategory[i].NAME,
                categoryid: subcategory[i].SERVICECATEGORYID,
                desc: subcategory[i].DESCRIPTION



            });
        }

        this.rowData = rowData;
    }

    private createColumnDefs() {
        this.columnDefs = [
            {
                headerName: 'ID', field: "id", width: 150, pinned: true
            },


            {
                headerName: 'Name', field: "name", width: 150, pinned: true
            },

            {
                headerName: 'Description', field: "desc", width: 150, pinned: true
            },
            {
                headerName: "Edit", width: 150, pinned: true, cellRenderer: this.editCellRenderer,
            }





        ];
    }

    private calculateRowCount() {
        if (this.gridOptions.api && this.rowData) {
            var model = this.gridOptions.api.getModel();
            var totalRows = this.rowData.length;
            var processedRows = model.getRowCount();
            this.rowCount = processedRows.toLocaleString() + ' / ' + totalRows.toLocaleString();
        }
    }

    private editCellRenderer(params) {
        var flag =
            `<button type="button" data-action-type="view" class="btn btn-default">
               View
             </button>

            <button type="button" data-action-type="remove" class="btn btn-default">
               Remove
            </button>`;
        //var flag = "<a  href='admindetails" + "/" + params.data.id  + "' > edit </a>";
        return flag;

    }

    public onRowClicked(e) {
        if (e.event.target !== undefined) {
            let data = e.data;
            let actionType = e.event.target.getAttribute("data-action-type");

            switch (actionType) {
                case "view":
                    return this.onActionViewClick(data);
                case "remove":
                    return this.onActionRemoveClick(data);
            }
        }
    }
    public onActionViewClick(data) {

        this.router.navigate(['subcategories', data.id]);

    }

    public onActionRemoveClick(data) {
        var _this = this;
        this.context.SERVICESUBCATEGORies.remove({ ID: data.id });
        this.context.saveChanges().then(function () {
            _this.onCategoryChange(data.categoryid);
        });

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

    private doSomeActionOnClose() {


    }


}