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
    return this._http.get('/allTask')
  }
  getOneTask(id) {
    return this._http.get('/tasks/' + id);
  }
  addTask(newtask){
    return this._http.post('/tasks', newtask)
  }
  deleteTask(task_id){
    return this._http.delete('/remove/'+task_id)
  }
  sendEdit(editTask){
    console.log(editTask)
    return this._http.put('/update/'+editTask._id, editTask)
  }

}
