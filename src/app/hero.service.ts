import { Injectable } from '@angular/core';
import { data } from 'src/assets/data';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  givedata() {
    return data
  }
}
