import { Component } from '@angular/core';
import {GridOptions} from 'ag-grid/main';
import { MSNService } from '../../../services/msn.service';
import {Router, ActivatedRoute } from '@angular/router';
@Component({
    selector: 'editadmin',
    templateUrl: 'app/core/adminview/cities/EditCity.html',

})


export class EditCityComponent {

    private gridOptions: GridOptions;
    private showGrid: boolean;
    private rowData: any[];
    private columnDefs: any[];
    private rowCount: string;
    private city: any;
    private cityorig: any;
    private context: any;
    constructor(private mSNService: MSNService, private route: ActivatedRoute, private router: Router) {

        this.init();

        this.city = [];

    }

    private init() {

        this.mSNService.getContext(
            context => this.OnContextLoaded(context)
        );
    }
    private OnContextLoaded(context: any) {
        var _this = this;
        _this.context = context;
        var cityid = _this.route.snapshot.params['id'];
        _this.context.CITies.first("x=> x.ID == this.Cityid", { Cityid: cityid })
            .then(function (city) {

                _this.city = JSON.parse(JSON.stringify(city));
                _this.cityorig = city;

            });

    }

    private saveCity(city) {
        this.context.CITies.attachOrGet(this.cityorig);
        var _this = this;
        this.cityorig.NAME = city.NAME;
        //this.userdetailsorig.EMAIL = user.EMAIL;
        //this.userdetailsorig.PHONE = user.PHONE;
        //this.userdetailsorig.PWD = user.PWD;
        //this.userdetailsorig.ID = 2;
       // this.context.CITies.add(this.cityorig);
        console.log(city);
        this.context.saveChanges().then(function () {
            _this.router.navigate(['cities']);
        });



    }

}
