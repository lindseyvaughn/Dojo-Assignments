import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
    this.getCakes()
  }
  getCakes(){
    return this._http.get('/cakes')
  }
  getOneCake(id){
    return this._http.get('/cakes/' + id);
  }
  addCake(newcake){
    return this._http.post('/cakes', newcake)
  }
  addRating(cakeId, newRating){
    console.log('Made it to service', newRating)
    return this._http.post('/ratings/' + cakeId, newRating)
  }
  deleteCake(cake_id){
    return this._http.delete('/remove/'+cake_id)
  }
}
