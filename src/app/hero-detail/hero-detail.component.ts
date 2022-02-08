import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../Hero";
import {ActivatedRoute} from "@angular/router";
import {HeroesService} from "../service/heroes.service";
import {Location} from "@angular/common";


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
   hero?: Hero;
  constructor(private route: ActivatedRoute, private heroSvr: HeroesService, private location: Location) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.heroSvr.getHeroByID(Number(id)).subscribe(data => {
      this.hero = data;
    });
  }
  back(){
    this.location.back();
  }

}
