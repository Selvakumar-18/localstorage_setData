import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'localstorage';
  getAllData:any;
  arrObj:any[]=[];
  saveSData:any;
  constructor(private appService:AppService){}
  ngOnInit(){}

  getObj(names:any,gmail:any){
    const temp = {nameS:names.value,gmail:gmail.value}
    
     this.arrObj.push(temp)
    console.log(this.arrObj )
    this.saveData(this.arrObj)
  }
  saveData(data:any){
    this.saveSData = data
    this.appService.setDataLocal('useData',this.saveSData)
    this.getData()
  }

  getData(){
    let getDatas = localStorage.getItem('userData');
    console.log('getDta',getDatas)
  }
}
