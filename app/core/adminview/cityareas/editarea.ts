import { Component } from '@angular/core';
import {GridOptions} from 'ag-grid/main';
import { MSNService } from '../../../services/msn.service';
import {Router, ActivatedRoute } from '@angular/router';
@Component({
    selector: 'editadmin',
    templateUrl: 'app/core/adminview/cityareas/editarea.html',

})


export class EditAreaComponent {

   
   
    private rowData: any[];
    private columnDefs: any[];
    private rowCount: string;
    private area: any;
    private areaorig: any;
    private context: any;
    constructor(private mSNService: MSNService, private route: ActivatedRoute, private router: Router) {

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
        var areaid = _this.route.snapshot.params['id'];
        _this.context.CITYAREAs.first("x=> x.ID == this.Areaid", { Areaid: areaid })
            .then(function (area) {

                _this.area = JSON.parse(JSON.stringify(area));
                _this.areaorig = area;

            });

    }

    private saveArea(area) {
        this.context.CITYAREAs.attachOrGet(this.areaorig);
        var _this = this;
        this.areaorig.NAME = area.NAME;
        this.areaorig.DESCRIPTION = area.DESCRIPTION;
        console.log(area);
        this.context.saveChanges().then(function () {
            _this.router.navigate(['cityareas']);
        });



    }

}
