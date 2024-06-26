import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';

import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatListModule } from '@angular/material/list';
import { PanelMenuModule } from 'primeng/panelmenu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FirstScreenComponent } from './first-screen/first-screen.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VehicleGradeComponent } from './vehicle-grade/vehicle-grade.component';
import { DetailsComponent } from './details/details.component';
import { BuyingCarComponent } from './buying-car/buying-car.component';
import { SearchAreaComponent } from './search-area/search-area.component';
import { ThanksComponent } from './thanks/thanks.component';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { ClassicsComponent } from './classics/classics.component';
import { ToastModule } from 'primeng/toast';
import { MegaMenuModule } from 'primeng/megamenu';
import { HttpClientModule } from '@angular/common/http';
import { DialogModule } from 'primeng/dialog';
@NgModule({
  declarations: [
    AppComponent,
    FirstScreenComponent,
    HeaderComponent,
    VehicleGradeComponent,
    DetailsComponent,
    BuyingCarComponent,
    SearchAreaComponent,
    ThanksComponent,
    LoadingScreenComponent,
    ClassicsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatSelectModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatMenuModule,
    MatExpansionModule,
    MatListModule,
    CarouselModule,
    ButtonModule,
    PanelMenuModule,
    ToastModule,
    MegaMenuModule,
    HttpClientModule,
    DialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
