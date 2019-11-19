import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  newProduct= {name : "", quantity: "", price: ""};
  errors: [];

  constructor(  
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService){ }

  ngOnInit() {

  }
  addProduct(){
    this._httpService.addProduct(this.newProduct).subscribe(data =>{
      console.log(data);
      if (data['errors']){
        this.errors = data['errors']
      }else{
        this.errors = [];
        //this.newProduct = { name : "", quantity: "", price: "" }
        this.goHome();
      }

    })
  }
  goHome(){
    this._router.navigate(['/']);
  }

}
