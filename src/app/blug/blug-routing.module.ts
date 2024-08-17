import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlugComponent } from './blug.component';

const routes: Routes = [{ path: '', component: BlugComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlugRoutingModule { }
