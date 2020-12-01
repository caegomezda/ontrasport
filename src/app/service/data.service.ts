import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Componente } from '../interfaces/interfaces';
import {delay} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getCompanies(){
    return this.http.get<Componente[]>('/assets/database/companies.json');
  }

  getHeroes(){
    return this.http.get<Componente[]>('/assets/database/superheroes.json')
    .pipe(
      delay(3000)
    );
  }
}
