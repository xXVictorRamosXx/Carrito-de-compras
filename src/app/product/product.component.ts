import { Component, Input } from '@angular/core';
import { Product } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent { 
  @Input() product!: Product;
  
  share() {
    window.alert('The product has been shared!');
  };

  display: boolean = false;
	showDialog() {
        this.display = true;
      };


  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  };
  
  constructor(
    private cartService: CartService
  ) { }
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

}