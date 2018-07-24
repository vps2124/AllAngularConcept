import { Directive,TemplateRef,ViewContainerRef,Input } from '@angular/core';

@Directive({
  selector: '[ngShow]'
})
export class NgShowDirective {

  constructor(private t:TemplateRef<any>,private vcr:ViewContainerRef) {
    console.log("NgShowDirective created.....")
   }

   @Input()
   set ngShow(show:boolean){
    console.log("In NgshowDirective show method...."+show);
    if(show)
    this.vcr.createEmbeddedView(this.t);
    else
    this.vcr.clear();
   }


}
