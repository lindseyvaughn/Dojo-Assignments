import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getPokemon();
    this.getability();
  }
  getPokemon() {
    let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
    bulbasaur.subscribe(data => console.log('Got our pokemons!', data));

  }
  getability() {
    let bulbasaur = this._http.get('https://pokeapi.co/api/v2/ability/1/');
    bulbasaur.subscribe(data => console.log('Got our pokemons!', data));

  }

}