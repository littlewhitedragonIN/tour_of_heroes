import { Injectable } from '@angular/core';
import {Hero} from "../Hero";
import {Observable, of} from "rxjs";
import {HEROES} from "../../mock-heroes";
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private msgSvr: MessageService) { }

  getHeroes(): Observable<Hero[]>{
    this.msgSvr.addMsg('Fetching all heroes');
    return of(HEROES);
}

  getHeroByID(id: number): Observable<Hero | undefined>{
    this.msgSvr.addMsg(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(item=> item.id === id)?? undefined);
  }
}
