System.register(['@angular/core', '../../../services/msn.service', '@angular/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, msn_service_1, router_1;
    var CitiesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (msn_service_1_1) {
                msn_service_1 = msn_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            CitiesComponent = (function () {
                function CitiesComponent(mSNService, router) {
                    this.mSNService = mSNService;
                    this.router = router;
                    this.init();
                    this.gridOptions = {};
                    this.createColumnDefs();
                    this.showGrid = true;
                }
                CitiesComponent.prototype.init = function () {
                    var _this = this;
                    this.mSNService.getContext(function (context) { return _this.OnContextLoaded(context); });
                };
                CitiesComponent.prototype.OnContextLoaded = function (context) {
                    var _this = this;
                    _this.context = context;
                    context.CITies.toArray().then(function (cities) {
                        _this.cities = cities;
                        console.log(_this.cities);
                        _this.createRowData();
                    });
                };
                CitiesComponent.prototype.createRowData = function () {
                    var rowData = [];
                    for (var i = 0; i < this.cities.length; i++) {
                        var city = this.cities;
                        rowData.push({
                            id: city[i].ID,
                            name: city[i].NAME
                        });
                    }
                    this.rowData = rowData;
                };
                CitiesComponent.prototype.createColumnDefs = function () {
                    this.columnDefs = [
                        {
                            headerName: 'ID', field: "id", width: 150, pinned: true
                        },
                        {
                            headerName: 'Name', field: "name", width: 150, pinned: true
                        },
                        {
                            headerName: "Edit", width: 150, pinned: true, cellRenderer: this.editCellRenderer,
                        }
                    ];
                };
                CitiesComponent.prototype.calculateRowCount = function () {
                    if (this.gridOptions.api && this.rowData) {
                        var model = this.gridOptions.api.getModel();
                        var totalRows = this.rowData.length;
                        var processedRows = model.getRowCount();
                        this.rowCount = processedRows.toLocaleString() + ' / ' + totalRows.toLocaleString();
                    }
                };
                CitiesComponent.prototype.editCellRenderer = function (params) {
                    var flag = "<button type=\"button\" data-action-type=\"view\" class=\"btn btn-default\">\n               View\n             </button>\n\n            <button type=\"button\" data-action-type=\"remove\" class=\"btn btn-default\">\n               Remove\n            </button>";
                    //var flag = "<a  href='admindetails" + "/" + params.data.id  + "' > edit </a>";
                    return flag;
                };
                CitiesComponent.prototype.onRowClicked = function (e) {
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
                CitiesComponent.prototype.onActionViewClick = function (data) {
                    this.router.navigate(['cities', data.id]);
                };
                CitiesComponent.prototype.onActionRemoveClick = function (data) {
                    var _this = this;
                    this.context.CITies.remove({ ID: data.id });
                    this.context.saveChanges().then(function () {
                        _this.init();
                    });
                };
                CitiesComponent = __decorate([
                    core_1.Component({
                        selector: 'adminuser',
                        templateUrl: 'app/core/adminview/cities/cities.html',
                        styleUrls: ['app/core/adminview/cities/cities.css']
                    }), 
                    __metadata('design:paramtypes', [msn_service_1.MSNService, router_1.Router])
                ], CitiesComponent);
                return CitiesComponent;
            }());
            exports_1("CitiesComponent", CitiesComponent);
        }
    }
});
//# sourceMappingURL=cities.js.map