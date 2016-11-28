import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {myComponents} from './app.depend';
import {Ng2BootstrapModule} from 'ng2-bootstrap';
@NgModule({
	imports: [BrowserModule, Ng2BootstrapModule],
    declarations: [...myComponents],
    bootstrap: [AppComponent]
})
export class AppModule { }
