import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {myComponents} from './app.depend';
@NgModule({
    imports: [BrowserModule],
    declarations: [...myComponents],
    bootstrap: [AppComponent]
})
export class AppModule { }
