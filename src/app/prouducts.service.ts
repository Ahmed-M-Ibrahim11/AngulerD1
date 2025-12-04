import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProuductsService {
  // simple product model
  private products = [
    { id: 100, name: 'LenovoThinkpad laptop', price: 100000000, quantity: 1, imgURL: '/assets/1348364.jpeg', categoryID: 1 },
    { id: 200, name: 'Apple MacBook laptop', price: 2007780, quantity: 0, imgURL: '/assets/1350182.png', categoryID: 1 },
    { id: 300, name: 'Lenovo Tab 2', price: 3000, quantity: 10, imgURL: '/assets/1350183.png', categoryID: 2 },
    { id: 400, name: 'Samsung Tab', price: 40.5, quantity: 2, imgURL: '/assets/1355118.jpeg', categoryID: 2 },
    { id: 500, name: 'Smasung Note 10', price: 50000, quantity: 0, imgURL: '/assets/1356778.jpeg', categoryID: 3 },
    { id: 600, name: 'Samsung S22 Utlra', price: 600, quantity: 1, imgURL: '/assets/1357723.jpeg', categoryID: 3 },
    { id: 700, name: 'apple S22 Utlra', price: 500, quantity: 4, imgURL: '/assets/1357819.jpeg', categoryID: 4 },
    { id: 800, name: 'tochiba Utlra', price: 60000, quantity: 14, imgURL: '/assets/1358128.png', categoryID: 4 },
    { id: 900, name: 'ththt Utlra', price: 60, quantity: 0, imgURL: '/assets/1358129.png', categoryID: 4 },
  ];

  constructor() { }

  all(): any[] {
    return this.products.slice();
  }

  getById(id: number): any | null {
    return this.products.find(p => p.id === id) || null;
  }

  filterByCategory(categoryId: number): any[] {
    if (!categoryId) return this.all();
    return this.products.filter(p => p.categoryID === categoryId);
  }
}
