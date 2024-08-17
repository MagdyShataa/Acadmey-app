import { Injectable } from "@angular/core";
import { map, Observable, of } from "rxjs";
import { Hero } from "./heho";
import { HEROES } from "./allheroes";

@Injectable({
  providedIn: "root",
})
export class HeroService {
  constructor() {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }

  getHero(id: number | string) {
    return this.getHeroes().pipe(
      // (+) before `id` turns the string into a number
      map((heroes: Hero[]) => heroes.find((hero) => hero.id === +id)!)
    );
  }
}
