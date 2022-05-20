import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appCustome]'
})
export class CustomeDirective implements OnInit{
  name:any = "chanikya"
  constructor(private element:ElementRef) {
    console.log(element);
   }
  ngOnInit(): void {
    if(this.name=="chanikya"){
      this.element.nativeElement.style.color = "yellow";
      this.element.nativeElement.style.textAlign = "center";
      this.element.nativeElement.style.fontWeight = 800;
      this.element.nativeElement.style.backgroundColor = "blue"
      this.element.nativeElement.style.paddingBottom = "30px"
    }
  }
}
