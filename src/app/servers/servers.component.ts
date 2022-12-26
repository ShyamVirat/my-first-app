import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
onUpdateServerName$(arg0: any) {
throw new Error('Method not implemented.');
}
  allowNewServer =false;
  serverCreateStatus ="No server created";
  serverCreated= false;
  serverName ="TestServe";
  servers =["Testserver1","MyTestServer2"];
  constructor(){
    setTimeout(()=>{
      this.allowNewServer =true;
        },5000);
        }

  ngOnInit() {
      {}
  }

   onCreateServer(){
    this.serverCreated= true;
    this.servers.push(this.serverName);
    this.serverCreateStatus ="Server was created! Name is" + this.serverName;
   }
   onUpdateServerName(event:any){
    this.serverName =(<HTMLInputElement>event.target).value;

   
   }
  }


