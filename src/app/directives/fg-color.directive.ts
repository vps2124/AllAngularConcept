import { Directive,ElementRef,Renderer2,Input} from '@angular/core';


@Directive({
  selector: '[fgColor]'
})
export class FgColorDirective {

  constructor(private el:ElementRef,private r:Renderer2){
    console.log("FgColorDirective created......");
   }

  
   @Input()
  set fgColor(color:string){
    console.log("FgColorDirective set FgColor Method  :"+color);
    this.r.setStyle(this.el.nativeElement,"color",color);
  } 


}
