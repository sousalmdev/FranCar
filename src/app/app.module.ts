import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatIconModule} from '@angular/material/icon';
import { materialize } from 'rxjs';
import {MatProgressSpinnerModule, MatSpinner} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstScreenComponent } from './first-screen/first-screen.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VehicleGradeComponent } from './vehicle-grade/vehicle-grade.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './details/details.component';
@NgModule({
  declarations: [
    AppComponent ,
    FirstScreenComponent,
    HeaderComponent,
    VehicleGradeComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,MatSidenavModule,
    MatSelectModule,
    MatFormFieldModule,HttpClientModule,
    MatProgressSpinnerModule,MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
