import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http'
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { HighlightDirective } from './gz1801/directives/highlight.directive';
import { Component1Component } from './gz1801/components/component1/component1.component';
import { DatagridComponent } from './gz1801/components/datagrid/datagrid.component';
import {RangePipe} from './gz1801/pipe/range.pipe'
import CommonService from './gz1801/utils/common';
import HttpClientService from './gz1801/utils/httpclient'
import { Component2Component } from './gz1801/components/component2/component2.component'

import rootRouter from './gz1801/router/router';
import { StudentComponent } from './gz1801/components/student/student.component';
import { DataformComponent } from './gz1801/components/dataform/dataform.component';
import { CnodeComponent } from './gz1801/components/cnode/cnode.component'

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    Component1Component,
    DatagridComponent,
    RangePipe,
    Component2Component,
    StudentComponent,
    DataformComponent,
    CnodeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    rootRouter
  ],
  providers: [
    CommonService,
    HttpClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
