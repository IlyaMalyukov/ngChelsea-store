import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart!: any;

  constructor() { 
  }

  ngOnInit() {
    this.cart = [
    {id: 1, name: 'Футболка 1', img: "https://clck.ru/Smwci", category: 'Футболки', price: 2500},
    {id: 2, name: 'Футболка 2', img: "https://clck.ru/Smwee", category: 'Футболки', price: 2500}
    ]
    if(!this.cart){
      this.cart = "Ничего не добавлено"
    } else { 
      this.cart;
    }
  }



}
