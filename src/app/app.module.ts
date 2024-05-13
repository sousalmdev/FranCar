import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FirstScreenComponent } from './first-screen/first-screen.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VehicleGradeComponent } from './vehicle-grade/vehicle-grade.component';
import { DetailsComponent } from './details/details.component';
import { BuyingCarComponent } from './buying-car/buying-car.component';
@NgModule({
  declarations: [
    AppComponent,
    FirstScreenComponent,
    HeaderComponent,
    VehicleGradeComponent,
    DetailsComponent,
    BuyingCarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatSelectModule,
    MatDialogModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
