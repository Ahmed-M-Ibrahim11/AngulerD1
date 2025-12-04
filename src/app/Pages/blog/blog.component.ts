import { Component } from '@angular/core';
import { CardsComponent } from "./cards/cards.component";

@Component({
  selector: 'app-blog',
  imports: [CardsComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
  standalone: true
})
export class BlogComponent {

}
