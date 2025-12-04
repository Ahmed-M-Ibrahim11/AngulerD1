import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';

@Component({
  selector: 'app-about',
  imports: [HeroComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  standalone: true
})
export class AboutComponent {

// username="ahmed"


// reciveMassage(val:string){
// console.log(val,"hi from parent");

// }

}
