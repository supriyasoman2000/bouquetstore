import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ContactusComponent } from './pages/contact/contactus.component';
import { NavbarComponent } from './units/navbar/navbar.component';
import { FooterComponent } from './units/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SingleComponent } from './pages/single/single.component';
import { OrderComponent } from './pages/order/order.component';
import { PayComponent } from './pages/pay/pay.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
  
    ContactusComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    SingleComponent,
    OrderComponent,
    PayComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
