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
		context.ADMININFOes.find(x=>x.ID==1)
			.then(function (admininfoes) {
			
			//_this.userdetailsorig = admininfoes;
            _this.userdetails = admininfoes;
           // _this.context.saveChanges();
		});

	}

    private saveUser(user) {
        this.mSNService.getContext(
            context => this.OnContextLoaded(context)
        );
      //  this.context.ADMININFOes.attachOrGet(this.userdetailsorig);
      //  this.userdetailsorig.NAME = this.userdetails.NAME;
      //  this.userdetailsorig.ID = Number(user.ID);
        //this.userdetailsorig.EMAIL = user.EMAIL;
        //this.userdetailsorig.PHONE = user.PHONE;
		console.log(user);
		//this.context.saveChanges();
		}

}
