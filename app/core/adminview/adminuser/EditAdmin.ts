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
	private userdetails: any;
	private userdetailsorig: any;
	private context: any;
	constructor(private mSNService: MSNService) {

		this.init();

		this.userdetails = [];

		}

	private init() {

		this.mSNService.getContext(
			context => this.OnContextLoaded(context)
			);
	}
	private OnContextLoaded(context: any) {
		var _this = this;
		_this.context = context;
		context.ADMININFOes.first(x=>x.ID==1)
			.then(function (admininfoes) {
			
			_this.userdetailsorig = admininfoes;
			_this.userdetails = admininfoes;
		});

	}

	private saveUser(user) {
		this.context.ADMININFOes.attach(this.userdetailsorig)
		this.userdetailsorig.NAME = user.NAME;
		console.log(user);
		this.context.saveChanges();
		}

}
