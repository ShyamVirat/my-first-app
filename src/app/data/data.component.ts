import { Component } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  // styleUrls: ['./data.component.css']
  styles:[`
  .online{
    color: blue;
  }
  `]
})
export class DataComponent {
  serverID:number = 10;
  serverStatus:string = 'offline';
red: any;
backgroundcolor: any;
  constructor(){
    this.serverStatus=Math.random()>0.5 ? 'online':'offline';
  }

  getServerStatus(){
  
   return this.serverStatus;
  }
  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  
  }

}
