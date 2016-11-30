import { Component } from '@angular/core';
import {GridOptions} from 'ag-grid/main';
import { MSNService } from '../../../services/msn.service';
@Component({
	selector: 'adminuser',
	templateUrl: 'app/core/adminview/adminuser/adminuser.html',
	styleUrls: ['app/core/adminview/adminuser/adminuser.css'],
	providers: []
})

export class AdminUserComponent {

	private gridOptions: GridOptions;
	private showGrid: boolean;
	private rowData: any[];
	private columnDefs: any[];
	private rowCount: string;
	private adminusers: any;
	private _this: any;
	constructor(private mSNService: MSNService) {

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
						headerName: 'User', field: "name", width: 150, pinned: true
					},
			

		
					{
						headerName: "Email", field: "email", width: 150, pinned: true
					}
				,
			
					{
						headerName: "Phone", field: "phone", width: 150, pinned: true
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



}
