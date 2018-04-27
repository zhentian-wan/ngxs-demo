import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {NgxsModule} from "@ngxs/store";
import { ZooComponent } from './zoo/zoo.component';
import {ZooState} from "./zoo/animals.state";
import {ZooService} from "./zoo/zoo.service";

@NgModule({
  declarations: [
    AppComponent,
    ZooComponent
  ],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([
      ZooState
    ])
  ],
  providers: [
    ZooService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
