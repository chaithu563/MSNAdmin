import { Component } from '@angular/core';
import {GridOptions} from 'ag-grid/main';
import { MSNService } from '../../../services/msn.service';
import {Router} from '@angular/router';
@Component({
    selector: 'addcity',
    templateUrl: 'app/core/adminview/membership/addmembership.html',

})


export class AddMembershipComponent {



    private rowData: any[];
    private columnDefs: any[];
    private rowCount: string;
    private membership: any;
    private userdetailsorig: any;
    private context: any;
    constructor(private mSNService: MSNService, private router: Router) {

        this.init();

        this.membership = [];

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

    private saveMembership(membership) {

        // var userdetails=[];
      
        var _this = this;
        this.membership.NAME = membership.NAME;
        this.membership.DESCRIPTION = membership.DESCRIPTION;
        this.context.MEMBERSHIPs.add(this.membership);
        //this.userdetailsorig.ID = 2;
        //	this.context.ADMININFOes.add(this.userdetailsorig);
        console.log(membership);
        //this.context.saveChanges();

    
        this.context.saveChanges().then(function () {
            _this.router.navigate(['memberships']);
        });

    }

}
   