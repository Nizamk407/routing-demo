import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LiComponent} from './li/li.component'
import {LoComponent} from './lo/lo.component'
const routes: Routes = [
  {
    path:'u',children:[
      {
        path:'li',component:LiComponent
      },
      {
        path:'lo',component:LoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class URoutingModule { }
