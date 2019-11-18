import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAuthors(){
    return this._http.get('/authors_json');
  }
  addAuthor(newAuthor){
    return this._http.post('/authors_json', newAuthor);
  }
  editAuthor(newAuthor, author_id){
    return this._http.put('/authors_json/' + author_id, newAuthor);
  }
  deleteAuthor(author_id){
    return this._http.delete('/authors_json/' + author_id)
  }

}
