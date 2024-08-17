import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CardComponent } from "./card.component";
import { DetailsComponent } from "./details/details.component";

const routes: Routes = [
  { path: "", component: CardComponent, data: { animation: "heroes" } },
  {
    path: "details/:id",
    component: DetailsComponent,
    data: { animation: "hero" },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardRoutingModule {}
