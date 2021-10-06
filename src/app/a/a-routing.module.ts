import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{LoComponent} from './lo/lo.component'
import{SiComponent} from './si/si.component'

const routes: Routes = [
  {
    path:'a',children:[
      {
        path:'lo',component:LoComponent
      },
      {
        path:'si',component:SiComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ARoutingModule { }
