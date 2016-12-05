import { Component } from '@angular/core';
import {GridOptions} from 'ag-grid/main';
import { MSNService } from '../../../services/msn.service';
import {EditAdminComponent} from './editadmin';
import {Router} from '@angular/router';
@Component({
	selector: 'adminuser',
	templateUrl: 'app/core/adminview/adminuser/adminuser.html',
	styleUrls: ['app/core/adminview/adminuser/adminuser.css']
	//providers: [],
	//children: [
	//	{ path: '' },
	//	{ path: 'manageadmins/:id', component: EditAdminComponent },
	//]
})


export class AdminUserComponent {

	private gridOptions: GridOptions;
	private showGrid: boolean;
	private rowData: any[];
	private columnDefs: any[];
	private rowCount: string;
    private adminusers: any;
    private context: any;
	private _this: any;
	constructor(private mSNService: MSNService, private router: Router) {

		this.init();
		this.gridOptions = <GridOptions>{};
		
		this.createColumnDefs();
		this.showGrid = true;
		
		}

	private init() {
		 
		this.mSNService.getContext(
			context => this.OnContextLoaded(context)
			);
	}
	private OnContextLoaded(context: any) {
        var _this = this;
        _this.context = context;
		context.ADMININFOes.toArray().then(function (admininfoes) {

			_this.adminusers = admininfoes;
			console.log(_this.adminusers);
			_this.createRowData();
			
		});

	}

	 public createRowData() {
		var rowData: any[] = [];

		for (var i = 0; i < this.adminusers.length; i++) {
			var userData = this.adminusers;
			rowData.push({
				id: userData[i].ID,
				name: userData[i].NAME,
				
				email: userData[i].EMAIL,
				
				phone: userData[i].PHONE

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
						headerName: 'User', field: "name", width: 150, pinned: true
					},
			

		
					{
						headerName: "Email", field: "email", width: 150, pinned: true
					}
				,
			
					{
						headerName: "Phone", field: "phone", width: 150, pinned: true
					}
				,

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
	return flag ;
		
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

		 this.router.navigate(['admindetails', data.id ]);

		 }

	 public onActionRemoveClick(data) {
         var _this = this;
         this.context.ADMININFOes.remove({ ID: data.id });
         this.context.saveChanges().then(function () {
             _this.init();
         });             
        
		 }


}
