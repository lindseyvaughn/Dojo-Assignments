import { Component, OnInit } from '@angular/core';
import {HttpService} from './http.service'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'public';
  tasks = [];
constructor(private _httpService: HttpService){}
ngOnInit(){
  this.getTasksFromService();
  console.log("INSIDE APP COMPONENT")
}
getTasksFromService(){
  let observable = this._httpService.getTasks()
  observable.subscribe(data => {
    console.log('Got Our Data!', data)
    this.tasks = data['tasks'];
  })
}

}
