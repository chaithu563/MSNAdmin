import { Component } from '@angular/core';
import {GridOptions} from 'ag-grid/main';
import { MSNService } from '../../../services/msn.service';
import {Router} from '@angular/router';
@Component({
    selector: 'addcity',
    templateUrl: 'app/core/adminview/cityareas/addarea.html',

})


export class AddAreaComponent {



    private rowData: any[];
    private columnDefs: any[];
    private rowCount: string;
    private area: any;
    private cities: any;
    private userdetailsorig: any;
    private context: any;
    constructor(private mSNService: MSNService, private router: Router) {

        this.init();

        this.area = [];

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

    private saveArea(area) {

        // var userdetails=[];
      
        var _this = this;
        this.area.NAME = area.NAME;
        this.area.DESCRIPTION = area.DESCRIPTION;
        this.area.CITYID = area.CITYID;
        this.context.CITYAREAs.add(this.area);
        //this.userdetailsorig.ID = 2;
        //	this.context.ADMININFOes.add(this.userdetailsorig);
        console.log(area);
        //this.context.saveChanges();

        //this.router.navigate(['cityareas']);
        this.context.saveChanges().then(function () {
            _this.router.navigate(['cityareas']);
        });

    }

    private onCityChange(id) {

        this.area.CITYID = id;
    }
}
   