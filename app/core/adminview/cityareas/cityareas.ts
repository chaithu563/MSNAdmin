import { Component } from '@angular/core';
import {GridOptions} from 'ag-grid/main';
import { MSNService } from '../../../services/msn.service';

import {Router} from '@angular/router';
@Component({
    selector: 'adminuser',
    templateUrl: 'app/core/adminview/cityareas/cityareas.html',
    styleUrls: ['app/core/adminview/cityareas/cityareas.css']
    //providers: [],
    //children: [
    //	{ path: '' },
    //	{ path: 'manageadmins/:id', component: EditAdminComponent },
    //]
})


export class CityAreasComponent {

    private gridOptions: GridOptions;
    private showGrid: boolean;
    private rowData: any[];
    private columnDefs: any[];
    private rowCount: string;
    private cities: any;
    private areas: any;
    private context: any;
    private _this: any;
    constructor(private mSNService: MSNService, private router: Router) {

       // this.init();
        this.gridOptions = <GridOptions>{};

        this.createColumnDefs();
        this.showGrid = true;

    }

    private onCityChange(id) {

        this.mSNService.getContext(
            context => this.OnContextLoaded(context)
        );
    }
    private OnContextLoaded(context: any) {
        var _this = this;
        _this.context = context;
        context.CITYAREAs.toArray().then(function (areas) {

            _this.areas = areas;
            console.log(_this.areas);
            _this.createRowData();

        });

    }

    public createRowData() {
        var rowData: any[] = [];

        for (var i = 0; i < this.areas.length; i++) {
            var area = this.areas;
            rowData.push({
                id: area[i].ID,
                name: area[i].NAME,
                desc: area[i].DESCRIPTION



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

        this.router.navigate(['areas', data.id]);

    }

    public onActionRemoveClick(data) {
        var _this = this;
        this.context.CITYAREAs.remove({ ID: data.id });
        this.context.saveChanges().then(function () {
            _this.getCitiesOnOpen();
        });

    }
    private OnCitiesContextLoaded(context) {

        var _this = this;
        _this.context = context;
        context.CITies.toArray().then(function (cities) {

            _this.cities = cities;
            console.log(_this.cities);
           // _this.createRowData();

        });

    }

    private loadCitiesContext() {

        this.mSNService.getContext(
            context => this.OnCitiesContextLoaded(context)
        );

    }

    private getCitiesOnOpen() {

        this.loadCitiesContext();

    }

    private doSomeActionOnClose() {


    }


}