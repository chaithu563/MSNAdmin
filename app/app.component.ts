import { Component } from '@angular/core';
import { MSN } from './jaydata-model/MSN';
import { MSNService } from './services/msn.service';
@Component({
    selector: 'my-app',
    template: '<h1>Hello Angularnn!</h1>',
    providers: [MSNService]
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
