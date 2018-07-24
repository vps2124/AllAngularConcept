import { Injectable } from '@angular/core';

@Injectable()
export class CalculatorService {

  constructor() {
    console.log("Calculator Service created....");
   }

   add(a:number,b:number):number
   {
     return a+b;
   }
   sub(a:number,b:number):number
   {
     return a-b;
   }
   mul(a:number,b:number):number
   {
     return a*b;
   }
   div(a:number,b:number):number
   {
     return a/b;
   }
   mod(a:number,b:number):number
   {
     return a%b;
   }


}
