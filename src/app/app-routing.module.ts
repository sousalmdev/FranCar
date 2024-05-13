import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstScreenComponent } from './first-screen/first-screen.component';
import { VehicleGradeComponent } from './vehicle-grade/vehicle-grade.component';
import { DetailsComponent } from './details/details.component';
import { BuyingCarComponent } from './buying-car/buying-car.component';

const routes: Routes = [
  { path: '', component: FirstScreenComponent},
  { path: 'home', component: VehicleGradeComponent  },
  {path:'home/details/:id',component:DetailsComponent },
  {path:'buying/:id',component:BuyingCarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
