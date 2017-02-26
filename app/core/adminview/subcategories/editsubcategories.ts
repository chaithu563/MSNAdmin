import { Component } from '@angular/core';
import {GridOptions} from 'ag-grid/main';
import { MSNService } from '../../../services/msn.service';
import {Router, ActivatedRoute } from '@angular/router';
import {CloudinaryOptions, CloudinaryUploader, CloudinaryImageComponent}  from 'ng2-cloudinary';


@Component({
    selector: 'editadmin',
    templateUrl: 'app/core/adminview/subcategories/editsubcategories.html',
    styleUrls: ['app/core/adminview/subcategories/subcategories.css'],
})


export class EditSubCategoriesComponent {



    private rowData: any[];
    private columnDefs: any[];
    private rowCount: string;
    private subcategory: any;
    private subcategoryorig: any;
    private context: any;
    serviceicon: any;
    serviceimage: any;
    cloudinaryOptions: CloudinaryOptions = new CloudinaryOptions({
        cloud_name: 'myserviceneed',
        upload_preset: 'e8pd1qgk',
        autoUpload: true,
        api_key: 375471576546793,
        api_secret: "u0oknAWF4KFEswzF-OOs_KubB30"
    });
    serviceiconuploader: CloudinaryUploader = new CloudinaryUploader(this.cloudinaryOptions);
    serviceimageuploader: CloudinaryUploader = new CloudinaryUploader(this.cloudinaryOptions);

    constructor(private mSNService: MSNService, private route: ActivatedRoute, private router: Router) {

        this.init();

        this.subcategory = [];
       var  _this = this;
        this.serviceiconuploader.onSuccessItem = function (item: any, response: string, status: number, headers: any) {

            let image = JSON.parse(response);

            _this.serviceicon = (image.public_id);
           
            this.subcategory.ICONPUBLICKEY = _this.serviceicon;
            return { item, response, status, headers };


        };

        this.serviceimageuploader.onSuccessItem = function (item: any, response: string, status: number, headers: any) {

            let image = JSON.parse(response);
            _this.serviceimage = (image.public_id);

            _this.subcategory.IMAGEPUBLICKEY = _this.serviceimage;

            return { item, response, status, headers };


        };



    }

    private init() {

        this.mSNService.getContext(
            context => this.OnContextLoaded(context)
        );
    }
    private OnContextLoaded(context: any) {
        var _this = this;
        _this.context = context;
        var subcatid = _this.route.snapshot.params['id'];
        _this.context.SERVICESUBCATEGORies.first("x=> x.ID == this.SubCatid", { SubCatid: subcatid })
            .then(function (subcategory) {

                _this.subcategory = JSON.parse(JSON.stringify(subcategory));
                _this.subcategoryorig = subcategory;

            });

    }

    private saveSubCategory(subcat) {
        this.context.SERVICESUBCATEGORies.attachOrGet(this.subcategoryorig);
        var _this = this;
        this.subcategoryorig.NAME = subcat.NAME;
        this.subcategoryorig.DESCRIPTION = subcat.DESCRIPTION;

        this.subcategoryorig.IMAGEPUBLICKEY = this.serviceimage;
        this.subcategoryorig.ICONPUBLICKEY = this.serviceicon;
        console.log(subcat);
        this.context.saveChanges().then(function () {
            _this.router.navigate(['subcategories']);
        });



    }

}
