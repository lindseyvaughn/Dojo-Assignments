import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }
  productId: any;
  viewProduct: any = {name: "", quantity: "", price: ""};

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
      this.productId= params['id']
    });
    this.readOneProduct();

  }
  readOneProduct(){
    let observable = this._httpService.readOneProduct(this.productId);
    observable.subscribe(data => {
      console.log("Read one product", data)
      this.viewProduct = data; 
    })
  }


}
