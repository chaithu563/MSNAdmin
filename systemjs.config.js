﻿/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',
      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',
      'ng2-bootstrap': 'node_modules/ng2-bootstrap/bundles/ng2-bootstrap.umd.js',
      'ng2-dropdown': 'node_modules/ng2-dropdown',
      'ng2-file-upload': 'npm:ng2-file-upload',
      'moment': 'node_modules/moment/moment.js',
      // other libraries
      'rxjs':                      'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
      'jaydata/core': 'lib/jaydata/jaydata.js',
      'jaydata/odata': 'lib/jaydata/jaydataproviders/oDataProvider.min.js',
      'ag-grid-ng2': 'node_modules/ag-grid-ng2',
      'ag-grid': 'node_modules/ag-grid',
      'ng2-cloudinary': 'node_modules/ng2-cloudinary/dist/umd/ng2-cloudinary.js'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './app.main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'ag-grid-ng2': {
      	defaultExtension: "js"
      },
      'ag-grid': {
      	defaultExtension: "js"
      },
      'ng2-dropdown': {
          main: "index.js",
          defaultExtension: "js"
      },
      'ng2-file-upload': {
          main: "ng2-file-upload",
          defaultextension: "js"
      },
			
    },

    meta: {
        //'jaydata/odata': {
        //    format: 'cjs',
        //    deps: ['jaydata/core']
    	//},
    	'jaydata/core': {
    		format: 'cjs'
    	},
    	'jaydata/odata': {
    		format: 'cjs',
    		deps: ['jaydata/core']
    	},
        './jaydata-model/MSN': {
        	deps: ['jaydata/core', 'jaydata/odata']
        }
    }
  });
})(this);
