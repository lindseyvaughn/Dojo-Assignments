import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private _httpService: HttpService) { }
  tasks = [];
  oneTask:any;
  newTask: any;
  thirdTask:any;
  editTask:any;

  ngOnInit(){
    this.getOneTaskFromService();
    this.newTask= {title:"", description:""}
  }
  onSubmit(){
    let observable = this._httpService.addTask(this.newTask);
    observable.subscribe(data => {
      console.log("Got data from post back", data);
      this.newTask = {title: "", description: ""}
    })
  }

  getTasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Got lindsey's tasks!", data)
      this.tasks = data
    });  
    }
  getOneTaskFromService(){
    let observable = this._httpService.getOneTask("5dc5b3113f6cf9e2937d9dca");
    observable.subscribe(data => {
      console.log("Got Lindsey's tasks!", data)
      this.thirdTask = data
    });
  }

  showTask(task){
    let observable = this._httpService.getOneTask(task._id);
    observable.subscribe(data => {
      console.log("Got Lindsey's one tasks!", data)
      this.oneTask = data;
    });
  }
  deleteTask(task){
    let observ = this._httpService.deleteTask(task._id);
    observ.subscribe(data => {
      console.log("DATA FROM DELETE: ", data)
      this.getTasksFromService()
    })
  }

  
  updateTask(task){
    this.editTask = task;
  }
  sendEdit(){
    let observ = this._httpService.sendEdit(this.editTask)
    observ.subscribe(data => {
      console.log('EDIT:', data)
      this.getTasksFromService()
    })

  }







};