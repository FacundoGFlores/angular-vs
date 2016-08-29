import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/hero-detail.component.html'
})

export class HeroDetailComponent implements OnInit {
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute
  ) {

  }
  @Input()
  hero: Hero;
  
  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id']; // Convert route parameter to number with + JS
      this.heroService.getHero(id).then(hero => this.hero = hero);
    });
  }
  goBack(): void {
    window.history.back(); // Navigates backward one step in browser his stack
  }

}
