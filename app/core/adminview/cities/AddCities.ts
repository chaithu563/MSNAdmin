import { Component } from '@angular/core';
import {GridOptions} from 'ag-grid/main';
import { MSNService } from '../../../services/msn.service';
import {Router} from '@angular/router';
@Component({
    selector: 'addcity',
    templateUrl: 'app/core/adminview/cities/AddCities.html',

})


export class AddCitiesComponent {



    private rowData: any[];
    private columnDefs: any[];
    private rowCount: string;
    private city: any;
    private userdetailsorig: any;
    private context: any;
    constructor(private mSNService: MSNService, private router: Router) {

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


    }

    private saveCity(city) {

        // var userdetails=[];
      
        var _this = this;
        this.city.NAME = city.NAME;
       
        this.context.CITies.add(this.city);
        //this.userdetailsorig.ID = 2;
        //	this.context.ADMININFOes.add(this.userdetailsorig);
        console.log(city);
        //this.context.saveChanges();

        //this.router.navigate(['manageadmins']);
        this.context.saveChanges().then(function () {
            _this.router.navigate(['cities']);
        });

    }

}
   