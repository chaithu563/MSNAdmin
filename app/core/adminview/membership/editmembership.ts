import { Component } from '@angular/core';
import {GridOptions} from 'ag-grid/main';
import { MSNService } from '../../../services/msn.service';
import {Router, ActivatedRoute } from '@angular/router';
@Component({
    selector: 'editadmin',
    templateUrl: 'app/core/adminview/membership/editmembership.html',

})


export class EditMembershipComponent {

    private gridOptions: GridOptions;
    private showGrid: boolean;
    private rowData: any[];
    private columnDefs: any[];
    private rowCount: string;
    private membership: any;
    private membershiporig: any;
    private context: any;
    constructor(private mSNService: MSNService, private route: ActivatedRoute, private router: Router) {

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
        var membershipid = _this.route.snapshot.params['id'];
        _this.context.MEMBERSHIPs.first("x=> x.ID == this.Membershipid", { Membershipid: membershipid })
            .then(function (membership) {

                _this.membership = JSON.parse(JSON.stringify(membership));
                _this.membershiporig = membership;

            });

    }

    private saveMembership(membership) {
        this.context.MEMBERSHIPs.attachOrGet(this.membershiporig);
        var _this = this;
        this.membershiporig.NAME = membership.NAME;
        this.membershiporig.DESCRIPTION = membership.DESCRIPTION;
        // this.context.CITies.add(this.cityorig);
        console.log(membership);
        this.context.saveChanges().then(function () {
            _this.router.navigate(['memberships']);
        });



    }

}
