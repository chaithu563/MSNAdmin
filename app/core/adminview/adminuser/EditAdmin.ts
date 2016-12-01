import { Component } from '@angular/core';
import {GridOptions} from 'ag-grid/main';
import { MSNService } from '../../../services/msn.service';
@Component({
	selector: 'editadmin',
	templateUrl: 'app/core/adminview/adminuser/editadmin.html',
	
})


export class EditAdminComponent {

	private gridOptions: GridOptions;
	private showGrid: boolean;
	private rowData: any[];
	private columnDefs: any[];
	private rowCount: string;
	private adminusers: any;
	private _this: any;
	constructor(private mSNService: MSNService) {

		this.init();



		}

	private init() {

		this.mSNService.getContext(
			context => this.OnContextLoaded(context)
			);
	}
	private OnContextLoaded(context: any) {

		context.ADMININFOes.toArray().then(function (admininfoes) {



		});

	}



}
