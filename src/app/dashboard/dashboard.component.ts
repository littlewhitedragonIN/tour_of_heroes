import { Component, OnInit } from '@angular/core';
import {Hero} from "../Hero";
import {HeroesService} from "../service/heroes.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  topHeroes: Hero[] = [];
  constructor(private heroSvr: HeroesService) { }

  ngOnInit(): void {
   this.heroSvr.getHeroes().subscribe(data => {
     this.topHeroes = data.slice(0,4);
   });
  }

}
