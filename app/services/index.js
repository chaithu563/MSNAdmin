System.register(['./provider', './msn.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (provider_1_1) {
                exportStar_1(provider_1_1);
            },
            function (msn_service_1_1) {
                exportStar_1(msn_service_1_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=index.js.map