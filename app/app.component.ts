﻿import { Component } from '@angular/core';


import { MSN } from './jaydata-model/MSN';
import { MSNService } from './services/msn.service';

@Component({
    selector: 'my-app',
  //  template: '<header> </header> <leftmenu> </leftmenu> <adminview></adminview>',
		template: '<header> </header> <div class="row" >  <div class="col-md-3" style="height: 100%;"> <leftmenu> </leftmenu> </div> <div class="col-md-9" style="height: 100%;"> <adminview></adminview>  </div> </div>',
    providers: [MSNService]
   // directives: [HeaderComponent]
   
})
export class AppComponent {
    cities: any;
    constructor(private mSNService: MSNService) {

			this.init();
		}

    private init() {
        this.mSNService.getContext(
            context => this.OnContextLoaded(context)
        );
    }
    private OnContextLoaded(context:any) {
			context.CITies.toArray(function(cities){
            
                this.cities = cities;
                console.log(this.cities);
			});
				
    }

}
