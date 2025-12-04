import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProuductsService } from '../../prouducts.service';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-product',
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  standalone: true
})
export class ProductComponent {
  products: any[] = [];

  constructor(private service: ProuductsService) {
    this.products = this.service.all();
  }

  trackById(index: number, item: any) { return item.id; }

  onSelectProduct(id: number) {
    // example: handle selection (navigate or open modal) - for now console
    console.log('selected product', id);
  }
}




