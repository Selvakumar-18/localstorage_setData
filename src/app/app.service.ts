import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  setDataLocal(key:string,value:any[]){
    localStorage.setItem(key,JSON.stringify(value))
  }

  // getObjectArray(key: string): any[] | null {
  //   const storedValue = localStorage.getItem(key);
  //   return storedValue ? JSON.parse(storedValue) : null;
  // }
}
