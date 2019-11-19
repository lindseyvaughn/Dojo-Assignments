import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { observable } from 'rxjs';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  constructor(  
                private _route: ActivatedRoute,
                private _router: Router,
                private _httpService: HttpService

  ){ }
  updateproduct: any = {name: "", quantity: "", price: "",};
  productId: any;
  errors: any;


  ngOnInit() {
    this.errors = {};
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
      this.productId = params['id']
    });
    this.readOneProduct();
  }
  readOneProduct(){
    let observable = this._httpService.readOneProduct(this.productId);
    observable.subscribe(data => {
      console.log("Read one product", data)
      this.updateproduct = data; 
      console.log(this.updateproduct)
    })
  }
  updatedProduct(){
    let observable= this._httpService.updatedProduct(this.updateproduct, this.productId);
    observable.subscribe(data => {
      console.log(data);
      if (data['errors']){
        this.errors = data['errors']
      }else{
        this.errors = [];
        //this.updateproduct = { name: "", quantity: "", price: "" }
        this.goHome();
      }
    })
  }
  goHome() {
    this._router.navigate(['/']);
  }


}
