
import { Component, OnInit } from "@angular/core";
import { HeroService } from "./hero.service";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Observable } from "rxjs";
import { switchMap, catchError } from "rxjs/operators";
import { Hero } from "./heho";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
  selectedId!: number;
  heroes$!: Observable<Hero[]>;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.heroes$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const id = params.get("id");
        this.selectedId = id ? parseInt(id, 10) : 0;
        return this.heroService.getHeroes().pipe(
          catchError((error) => {
            console.error("Error fetching heroes", error);
            // Handle error appropriately, maybe return an empty array or navigate elsewhere
            return [];
          })
        );
      })
    );
  }
}









// import { Component, OnInit } from "@angular/core";
// import { Hero } from "./heho";
// import { HeroService } from "./hero.service";
// import { ActivatedRoute } from "@angular/router";
// import { Observable, switchMap } from "rxjs";

// @Component({
//   selector: "app-card",
//   templateUrl: "./card.component.html",
//   styleUrls: ["./card.component.scss"],
// })
// export class CardComponent implements OnInit {
//   selectedId = 0;
//   heroes$!: Observable<Hero[]>;
//   constructor(
//     private heroService: HeroService,
//     private route: ActivatedRoute
//   ) {}
//   ngOnInit(): void {
//     this.heroes$ = this.route.paramMap.pipe(
//       switchMap((params) => {
//         this.selectedId = parseInt(params.get("id")!, 10);
//         return this.heroService.getHeroes();
//       })
//     );
//   }
// }
