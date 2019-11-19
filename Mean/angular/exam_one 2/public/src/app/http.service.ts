import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getProduct(){
    return this._http.get('/products_json');
  }
  addProduct(newProduct){
    return this._http.post('/products_json', newProduct);
  }
  updatedProduct(newProduct, product_id){
    return this._http.put('/products_json/' + product_id, newProduct);
  }
  readOneProduct(product_id){
    return this._http.get('/productdetails_json/' + product_id);
  }
  deleteProduct(product_id){
    return this._http.delete('/products_json/' + product_id)
  }

}
