import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstScreenComponent } from './first-screen/first-screen.component';
import { VehicleGradeComponent } from './vehicle-grade/vehicle-grade.component';
import { DetailsComponent } from './details/details.component';
import { BuyingCarComponent } from './buying-car/buying-car.component';
import { SearchAreaComponent } from './search-area/search-area.component';
import { ThanksComponent } from './thanks/thanks.component';
import { LoadingGuard } from './loading-screen/loading.guard';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import { ClassicsComponent } from './classics/classics.component';
const routes: Routes = [
  { path: '', component: FirstScreenComponent },
  {
    path: 'home',
    component: VehicleGradeComponent,
    canActivate: [LoadingGuard],
  },
  {
    path: 'home/details/:id',
    component: DetailsComponent,
    canActivate: [LoadingGuard],
  },
  {
    path: 'buying/:id',
    component: BuyingCarComponent,
    canActivate: [LoadingGuard],
  },
  {
    path: 'home/search/:query',
    component: SearchAreaComponent,
    canActivate: [LoadingGuard],
  },
  { path: 'thanks', component: ThanksComponent, canActivate: [LoadingGuard] },
  {
    path: 'classics',
    component: ClassicsComponent,
    canActivate: [LoadingGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
