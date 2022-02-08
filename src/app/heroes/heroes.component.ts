import {Component, OnInit} from '@angular/core';
import {HEROES} from "../../mock-heroes";
import {Hero} from "../Hero";
import {HeroesService} from "../service/heroes.service";
import {MessageService} from "../service/message.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero?:Hero;

  constructor(private heroSvr: HeroesService, private msgSvr: MessageService) {
  }

  ngOnInit(): void {
    this.heroSvr.getHeroes().subscribe(data=>{
      this.heroes = data;
    });
  }

  onSelect(hero:Hero){
    this.msgSvr.addMsg(`HeroesComponent: Selected hero id=${hero.id}`);
    this.selectedHero = hero;
  }

}
