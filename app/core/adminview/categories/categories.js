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
    var core_1, msn_service_1, router_1, CategoriesComponent;
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
            CategoriesComponent = (function () {
                function CategoriesComponent(mSNService, router) {
                    this.mSNService = mSNService;
                    this.router = router;
                    this.init();
                    this.gridOptions = {};
                    this.createColumnDefs();
                    this.showGrid = true;
                }
                CategoriesComponent.prototype.init = function () {
                    var _this = this;
                    this.mSNService.getContext(function (context) { return _this.OnContextLoaded(context); });
                };
                CategoriesComponent.prototype.OnContextLoaded = function (context) {
                    var _this = this;
                    _this.context = context;
                    context.SERVICECATEGORies.toArray().then(function (categories) {
                        _this.categories = categories;
                        console.log(_this.categories);
                        _this.createRowData();
                    });
                };
                CategoriesComponent.prototype.createRowData = function () {
                    var rowData = [];
                    for (var i = 0; i < this.categories.length; i++) {
                        var category = this.categories;
                        rowData.push({
                            id: category[i].ID,
                            name: category[i].NAME,
                            desc: category[i].DESCRIPTION
                        });
                    }
                    this.rowData = rowData;
                };
                CategoriesComponent.prototype.createColumnDefs = function () {
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
                CategoriesComponent.prototype.calculateRowCount = function () {
                    if (this.gridOptions.api && this.rowData) {
                        var model = this.gridOptions.api.getModel();
                        var totalRows = this.rowData.length;
                        var processedRows = model.getRowCount();
                        this.rowCount = processedRows.toLocaleString() + ' / ' + totalRows.toLocaleString();
                    }
                };
                CategoriesComponent.prototype.editCellRenderer = function (params) {
                    var flag = "<button type=\"button\" data-action-type=\"view\" class=\"btn btn-default\">\n               View\n             </button>\n\n            <button type=\"button\" data-action-type=\"remove\" class=\"btn btn-default\">\n               Remove\n            </button>";
                    //var flag = "<a  href='admindetails" + "/" + params.data.id  + "' > edit </a>";
                    return flag;
                };
                CategoriesComponent.prototype.onRowClicked = function (e) {
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
                CategoriesComponent.prototype.onActionViewClick = function (data) {
                    this.router.navigate(['categories', data.id]);
                };
                CategoriesComponent.prototype.onActionRemoveClick = function (data) {
                    var _this = this;
                    this.context.SERVICECATEGORies.remove({ ID: data.id });
                    this.context.saveChanges().then(function () {
                        _this.init();
                    });
                };
                return CategoriesComponent;
            }());
            CategoriesComponent = __decorate([
                core_1.Component({
                    selector: 'adminuser',
                    templateUrl: 'app/core/adminview/categories/categories.html',
                    styleUrls: ['app/core/adminview/categories/categories.css']
                }),
                __metadata("design:paramtypes", [msn_service_1.MSNService, router_1.Router])
            ], CategoriesComponent);
            exports_1("CategoriesComponent", CategoriesComponent);
        }
    };
});
//# sourceMappingURL=categories.js.map