import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  @Input() name!:string
@Output()massagess =new EventEmitter<string>()
  
sayhi(){

console.log("hi from child")
  this.massagess.emit("how we do")
}
}
