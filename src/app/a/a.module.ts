import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ARoutingModule } from './a-routing.module';
import { LoComponent } from './lo/lo.component';
import { SiComponent } from './si/si.component';


@NgModule({
  declarations: [
    LoComponent,
    SiComponent
  ],
  imports: [
    CommonModule,
    ARoutingModule,
  ]
})
export class AModule { }
