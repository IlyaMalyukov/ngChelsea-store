import { Injectable } from "@angular/core";

export interface Product {
  id: number
  name: string
  img: string
  category: string
  price: number
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products = [
    {id: 1, name: 'Футболка 1', img: "https://clck.ru/Smwci", category: 'Футболки', price: 2500},
    {id: 2, name: 'Футболка 2', img: "https://clck.ru/Smwee", category: 'Футболки', price: 2500},
    {id: 3, name: 'Футболка 3', img: "https://clck.ru/Smwg4", category: 'Футболки', price: 2500},
    {id: 4, name: 'Футболка 4', img: "https://clck.ru/Smwhs", category: 'Футболки', price: 2500},
    {id: 5, name: 'Комплект 1', img: "https://clck.ru/Smwit", category: 'Комплекты', price: 3500},
    {id: 6, name: 'Комплект 2', img: "https://clck.ru/Smwjd", category: 'Комплекты', price: 3500}
  ];

  cart: Product[] = [];

  getById(id: number) {
    return this.products.find(p => p.id === id)
  }

  addToCart(product: Product) {
    this.cart.push(product)
  }

  removeFromCart(product: Product) {
    let elem = this.cart.indexOf(product)
    this.cart.splice(elem, 1)
  }
};