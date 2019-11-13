import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private _httpService: HttpService) { }
  // ngOnInit will run when the component is initialized, after the constructor method.
  tasks = [];
  oneTask;
  ngOnInit(){
    this.getOneTaskFromService();
  }

  getTasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Got lindsey's tasks!", data)
      this.tasks = data
    });
  }
//   // getOneTaskFromService(){
//     let observable = this._httpService.getOneTask("5dc5b3113f6cf9e2937d9dca");
//     observable.subscribe(data => {
//       console.log("Got Lindsey's tasks!", data)
//       this.thirdTask = data
//     });
//   }
// }
showTask(task){
  let observable = this._httpService.getOneTask(task._id);
  observable.subscribe(data => {
    console.log("Got Lindsey's one tasks!", data)
    this.oneTask = data;
  });
}
}