import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { HeroService } from "../hero.service";

import { Observable, switchMap, Subscription } from "rxjs";
import { catchError } from "rxjs/operators";
import { Hero } from "../heho";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"],
})
export class DetailsComponent implements OnInit, OnDestroy {
  goBack() {
    this.router.navigate(["/card"]);
  }
  hero$!: Observable<Hero>;
  private subscription!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HeroService
  ) {}

  ngOnInit(): void {
    this.hero$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getHero(params.get("id")!).pipe(
          catchError((error) => {
            console.error("Error fetching hero", error);
            // Handle error here, perhaps by navigating to an error page
            this.router.navigate(["/error"]);
            throw error;
          })
        )
      )
    );
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

// import { Component, OnInit } from "@angular/core";
// import { ActivatedRoute, ParamMap, Router } from "@angular/router";
// import { HeroService } from "../hero.service";
// import { Hero } from "../heho";
// import { Observable, switchMap } from "rxjs";

// @Component({
//   selector: "app-details",
//   templateUrl: "./details.component.html",
//   styleUrls: ["./details.component.scss"],
// })
// export class DetailsComponent implements OnInit {
//   $heroes!: Observable<Hero[]>;
//   constructor(
//     private route: ActivatedRoute,
//     private router: Router,
//     private service: HeroService
//   ) {}
//   ngOnInit(): void {
//     this.$heroes = this.route.paramMap.pipe(
//       switchMap((params: ParamMap) => this.service.getHero(params.get("id")!))
//     );
//   }
// }
