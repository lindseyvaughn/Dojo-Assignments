import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _httpService: HttpService) { }
  cake:'';
  cakes:any;
  newCake:any;
  newRating:any={"rating":0,"comment":""};
  selectedCake;

  ngOnInit(){
    this.getCakesFromService();
    this.newCake= {baker:"", image:""}
  }
  getCakesFromService(){
    console.log("HELLO INSIDE GET ONE CAKE FROM SERVICE")
    let observable = this._httpService.getCakes();
    observable.subscribe((data:any[]) =>{
      console.log('All Cakes', data)
      for(var cake of data){
        console.log(cake)
        cake.newRating = {comment: '', rating: 0 }
      }
      this.cakes=data
    })
  }
  cakeSubmit() {
    console.log("HELLO INSIDE GET ONE CAKE FROM SERVICE")
    let observable = this._httpService.addCake(this.newCake);
    observable.subscribe((data) =>{
      console.log('Submitted Cake', data)
    })
    this.getCakesFromService()
  }
  ratingSubmit(cake) {
    console.log("Trying to Submit Rating", cake._id)
    let observable = this._httpService.addRating(cake._id, cake.newRating);
    observable.subscribe((data) =>{
      console.log('Submitted Rating', data)
      
    })
    this.getCakesFromService()
  }
  getOneCake(cake){
    this.selectedCake=cake
    var sum = 0;
            var count = 0;
            for (var item of this.cake.ratings){
                sum+=item.rating;
                count ++;
            }
            if (count == 0){
                this.cake.avgRating=0;
            }
            else{
                this.cake.avgRating = Math.round(sum/count);
            }


  }
  deleteCake(cake){
    this._httpService.deleteCake(cake._id).subscribe(date =>{
      console.log('delete successful')
      this.getCakesFromService();
    })
  }

}
