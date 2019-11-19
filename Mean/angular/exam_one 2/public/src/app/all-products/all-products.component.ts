import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
    ) { }
    products: any;
    
  ngOnInit() {
    this.getProduct(); 
    }
  
  getProduct() {
    let observable = this._httpService.getProduct();
    observable.subscribe((data) => {
      console.log("got product", data)
      this.products=data;
    })

  }

  deleteProduct(product_id) {
    let observable = this._httpService.deleteProduct(product_id);
    observable.subscribe((data) => {
      console.log("deleting product", data)
      this.ngOnInit()
    })

  }
  goHome() {
    this._router.navigate(['/']);
  }

}
