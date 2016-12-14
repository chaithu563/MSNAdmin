System.register(["@angular/core", "../../../services/msn.service", "@angular/router"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, msn_service_1, router_1, CityAreasComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (msn_service_1_1) {
                msn_service_1 = msn_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }
        ],
        execute: function () {
            CityAreasComponent = (function () {
                function CityAreasComponent(mSNService, router) {
                    this.mSNService = mSNService;
                    this.router = router;
                    // this.init();
                    this.gridOptions = {};
                    this.createColumnDefs();
                    this.showGrid = true;
                }
                CityAreasComponent.prototype.onCityChange = function (id) {
                    var _this = this;
                    this.mSNService.getContext(function (context) { return _this.OnContextLoaded(context, id); });
                };
                CityAreasComponent.prototype.OnContextLoaded = function (context, id) {
                    var _this = this;
                    _this.context = context;
                    context.CITYAREAs.filter("x=>x.CITYID==this.cityid", { cityid: parseFloat(id.toString()) }).toArray().then(function (areas) {
                        _this.areas = areas;
                        console.log(_this.areas);
                        _this.createRowData();
                    });
                };
                CityAreasComponent.prototype.createRowData = function () {
                    var rowData = [];
                    for (var i = 0; i < this.areas.length; i++) {
                        var area = this.areas;
                        rowData.push({
                            id: area[i].ID,
                            name: area[i].NAME,
                            cityid: area[i].CITYID,
                            desc: area[i].DESCRIPTION
                        });
                    }
                    this.rowData = rowData;
                };
                CityAreasComponent.prototype.createColumnDefs = function () {
                    this.columnDefs = [
                        {
                            headerName: 'ID', field: "id", width: 150, pinned: true
                        },
                        {
                            headerName: 'Name', field: "name", width: 150, pinned: true
                        },
                        {
                            headerName: 'Description', field: "desc", width: 150, pinned: true
                        },
                        {
                            headerName: "Edit", width: 150, pinned: true, cellRenderer: this.editCellRenderer,
                        }
                    ];
                };
                CityAreasComponent.prototype.calculateRowCount = function () {
                    if (this.gridOptions.api && this.rowData) {
                        var model = this.gridOptions.api.getModel();
                        var totalRows = this.rowData.length;
                        var processedRows = model.getRowCount();
                        this.rowCount = processedRows.toLocaleString() + ' / ' + totalRows.toLocaleString();
                    }
                };
                CityAreasComponent.prototype.editCellRenderer = function (params) {
                    var flag = "<button type=\"button\" data-action-type=\"view\" class=\"btn btn-default\">\n               View\n             </button>\n\n            <button type=\"button\" data-action-type=\"remove\" class=\"btn btn-default\">\n               Remove\n            </button>";
                    //var flag = "<a  href='admindetails" + "/" + params.data.id  + "' > edit </a>";
                    return flag;
                };
                CityAreasComponent.prototype.onRowClicked = function (e) {
                    if (e.event.target !== undefined) {
                        var data = e.data;
                        var actionType = e.event.target.getAttribute("data-action-type");
                        switch (actionType) {
                            case "view":
                                return this.onActionViewClick(data);
                            case "remove":
                                return this.onActionRemoveClick(data);
                        }
                    }
                };
                CityAreasComponent.prototype.onActionViewClick = function (data) {
                    this.router.navigate(['area', data.id]);
                };
                CityAreasComponent.prototype.onActionRemoveClick = function (data) {
                    var _this = this;
                    this.context.CITYAREAs.remove({ ID: data.id });
                    this.context.saveChanges().then(function () {
                        _this.onCityChange(data.cityid);
                    });
                };
                CityAreasComponent.prototype.OnCitiesContextLoaded = function (context) {
                    var _this = this;
                    _this.context = context;
                    context.CITies.toArray().then(function (cities) {
                        _this.cities = cities;
                        console.log(_this.cities);
                        // _this.createRowData();
                    });
                };
                CityAreasComponent.prototype.loadCitiesContext = function () {
                    var _this = this;
                    this.mSNService.getContext(function (context) { return _this.OnCitiesContextLoaded(context); });
                };
                CityAreasComponent.prototype.getCitiesOnOpen = function () {
                    this.loadCitiesContext();
                };
                CityAreasComponent.prototype.doSomeActionOnClose = function () {
                };
                return CityAreasComponent;
            }());
            CityAreasComponent = __decorate([
                core_1.Component({
                    selector: 'adminuser',
                    templateUrl: 'app/core/adminview/cityareas/cityareas.html',
                    styleUrls: ['app/core/adminview/cityareas/cityareas.css']
                }),
                __metadata("design:paramtypes", [msn_service_1.MSNService, router_1.Router])
            ], CityAreasComponent);
            exports_1("CityAreasComponent", CityAreasComponent);
        }
    };
});
//# sourceMappingURL=cityareas.js.map