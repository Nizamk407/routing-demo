import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { URoutingModule } from './u-routing.module';
import { LiComponent } from './li/li.component';
import { LoComponent } from './lo/lo.component';


@NgModule({
  declarations: [
    LiComponent,
    LoComponent
  ],
  imports: [
    CommonModule,
    URoutingModule
  ]
})
export class UModule { }
