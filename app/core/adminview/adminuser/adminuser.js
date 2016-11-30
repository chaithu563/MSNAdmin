System.register(['@angular/core', '../../../services/msn.service'], function(exports_1, context_1) {
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
    var core_1, msn_service_1;
    var AdminUserComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (msn_service_1_1) {
                msn_service_1 = msn_service_1_1;
            }],
        execute: function() {
            AdminUserComponent = (function () {
                function AdminUserComponent(mSNService) {
                    this.mSNService = mSNService;
                    this.init();
                    this.gridOptions = {};
                    this.createColumnDefs();
                    this.showGrid = true;
                }
                AdminUserComponent.prototype.init = function () {
                    var _this = this;
                    this.mSNService.getContext(function (context) { return _this.OnContextLoaded(context); });
                };
                AdminUserComponent.prototype.OnContextLoaded = function (context) {
                    var _this = this;
                    context.ADMININFOes.toArray().then(function (admininfoes) {
                        _this.adminusers = admininfoes;
                        console.log(_this.adminusers);
                        _this.createRowData();
                    });
                };
                AdminUserComponent.prototype.createRowData = function () {
                    var rowData = [];
                    for (var i = 0; i < this.adminusers.length; i++) {
                        var userData = this.adminusers;
                        rowData.push({
                            name: userData[i].NAME,
                            email: userData[i].EMAIL,
                            phone: userData[i].PHONE
                        });
                    }
                    this.rowData = rowData;
                };
                AdminUserComponent.prototype.createColumnDefs = function () {
                    this.columnDefs = [
                        {
                            headerName: 'User', field: "name", width: 150, pinned: true
                        },
                        {
                            headerName: "Email", field: "email", width: 150, pinned: true
                        },
                        {
                            headerName: "Phone", field: "phone", width: 150, pinned: true
                        }
                    ];
                };
                AdminUserComponent.prototype.calculateRowCount = function () {
                    if (this.gridOptions.api && this.rowData) {
                        var model = this.gridOptions.api.getModel();
                        var totalRows = this.rowData.length;
                        var processedRows = model.getRowCount();
                        this.rowCount = processedRows.toLocaleString() + ' / ' + totalRows.toLocaleString();
                    }
                };
                AdminUserComponent = __decorate([
                    core_1.Component({
                        selector: 'adminuser',
                        templateUrl: 'app/core/adminview/adminuser/adminuser.html',
                        styleUrls: ['app/core/adminview/adminuser/adminuser.css'],
                        providers: []
                    }), 
                    __metadata('design:paramtypes', [msn_service_1.MSNService])
                ], AdminUserComponent);
                return AdminUserComponent;
            }());
            exports_1("AdminUserComponent", AdminUserComponent);
        }
    }
});
//# sourceMappingURL=adminuser.js.map