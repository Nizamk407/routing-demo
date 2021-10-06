import { Component } from '@angular/core';
import{UserdataService} from './userdata.service'
import{DummyService} from './dummy.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-demo';
  name='';
  age='';
  li:any;
  lis=[];
  constructor(private dummy:DummyService)
  {
    this.dummy.getData().subscribe(dummy=>{
    console.warn(dummy);
     this.li=dummy;
     this.lis=this.li;
    })
  }
  // constructor(private user:UserdataService)
  // {
  //   console.warn(this.user.getData())
  //   let data=this.user.getData();
  //   this.name=data.name;
  //   this.age=data.age;

  // }
}
