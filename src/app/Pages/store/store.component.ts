import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandleService } from '../../store.service';


@Component({
  selector: 'app-candels',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class CandelsComponent implements OnInit {

  candels: any[] = [];

  constructor(private candleService: CandleService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.candleService.getCandels().subscribe({
      next: (res: any[]) => {
        console.log(res);
        this.candels = res;
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        console.log('complete');
      }
    });
  }
}
