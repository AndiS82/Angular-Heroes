import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  constructor(private heroService: HeroService){}

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  heroes: Hero[] = [];
  
  getHeroes() {
    this.heroes = this.heroService.getHeroes();
  }

  onInit() {
    this.getHeroes();
  }

  selectedHero?: Hero;
  onSelect(hero:Hero) {
    this.selectedHero = hero;
  }
}


