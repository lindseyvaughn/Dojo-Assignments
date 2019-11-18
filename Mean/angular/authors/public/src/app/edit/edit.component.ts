import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: any;
  newAuthor = { 'name': '' }
  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
      this.id = params['id']
    });
  }
  editAuthor() {
    this._httpService.editAuthor(this.newAuthor, this.id).subscribe(data => {
      console.log(data);
      this.goHome()
    })

  }
  goHome() {
    this._router.navigate(['/']);
  }

}
