import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product: any | null = null;
  @Output() select = new EventEmitter<number>();

  onView() {
    if (this.product && this.product.id) {
      this.select.emit(this.product.id);
    }
  }
}
