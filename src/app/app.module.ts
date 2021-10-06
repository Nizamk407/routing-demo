import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import {UsersModule} from './users/users.module'
import {AModule} from './a/a.module'
import {UModule} from './u/u.module'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UsersModule,
    AModule,
    UModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
