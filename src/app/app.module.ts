import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';

import {HttpClientModule} from '@angular/common/http';

import {RegistrationService} from './registration.service';
import { HomeComponent } from './home/home.component';
import { PaymentComponent } from './payment/payment.component';
import { ViewDetailedComponentComponent } from './view-detailed-component/view-detailed-component.component';
import { TermscondionsComponent } from './termscondions/termscondions.component';
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HomeComponent,
    PaymentComponent,
    ViewDetailedComponentComponent,
    TermscondionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    

   ],
  providers: [RegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
