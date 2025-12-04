import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-dashbord',
  imports: [RouterModule,RouterLink,RouterOutlet],
  templateUrl: './dashbord.component.html',
  styleUrl: './dashbord.component.css'
})
export class DashbordComponent {

}
