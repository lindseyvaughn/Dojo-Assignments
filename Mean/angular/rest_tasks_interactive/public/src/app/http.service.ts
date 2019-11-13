import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {
    this.getTasks()
   }
  getTasks() {
    console.log("TRIGGER getTasks SERVICE")
    return this._http.get('/allTask')
  }
  getOneTask(id) {
    return this._http.get('/tasks/' + id);
  }
}
