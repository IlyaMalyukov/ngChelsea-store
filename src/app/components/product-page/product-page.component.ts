import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product, ProductsService } from 'src/app/services/products.service';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  product: any

  constructor(
    private route: ActivatedRoute,
    public productsService: ProductsService
    ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.product = this.productsService.getById(+params.id)
    })
  }

}
