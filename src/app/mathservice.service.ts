import { Injectable } from '@angular/core';

//Injectable if other services need to be injected into this service
@Injectable()
export class MathserviceService {

  result : number;

  constructor() { }

  add(x:number, y:number) {
    this.result =  x + y;
    return this.result;
  }

  substract (x:number, y:number) {
    this.result = x - y;
    return this.result;
    
  }
  
}
