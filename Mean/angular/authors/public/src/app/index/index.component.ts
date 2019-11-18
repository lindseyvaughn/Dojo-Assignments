import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';



@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  authors: any;

  constructor(
    private _httpService: HttpService,
    private _router: Router) { }

  ngOnInit() {
    this._httpService.getAuthors().subscribe(data => {
      console.log(data);
      this.authors = data
    })
  }
  deleteAuthor(author_id) {
    let observable = this._httpService.deleteAuthor(author_id);
    observable.subscribe((data) => {
      console.log("deleting author", data)
      this.ngOnInit()
    })

  }
  goHome() {
    this._router.navigate(['/']);
  }
}
