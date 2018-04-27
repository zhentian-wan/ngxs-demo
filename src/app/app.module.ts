import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {NgxsModule} from "@ngxs/store";
import { ZooComponent } from './zoo/zoo.component';
import {ZooState} from "./zoo/animals.state";
import {ZooService} from "./zoo/zoo.service";
import {SelectState} from './zoo/select.state';

@NgModule({
  declarations: [
    AppComponent,
    ZooComponent
  ],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([
      ZooState,
      SelectState
    ])
  ],
  providers: [
    ZooService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
