import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';//MAKE SURE YOU DO TWO DOTS TO ACCESS HTTPSERVICE

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newAuthor= {'name':''}

  constructor(private _httpService: HttpService) { }

  ngOnInit() {

  }
  addAuthor(){
    this._httpService.addAuthor(this.newAuthor).subscribe(data =>{
      console.log(data);
      this.newAuthor = {'name':''}
    })
  }

}
