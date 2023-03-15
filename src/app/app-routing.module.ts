import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { single } from 'rxjs';
import { ContactusComponent } from './pages/contact/contactus.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './pages/menu/menu.component';
import { OrderComponent } from './pages/order/order.component';
import { PayComponent } from './pages/pay/pay.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SingleComponent } from './pages/single/single.component';


const routes: Routes = [
  {
    path:'',component:HomeComponent
  },

 
    {
      path:'menu',component:MenuComponent
    },

    {
      path:'signup',component:SignupComponent
    },
    {
      path:'login',component:LoginComponent
    },
    {
      path:'pay',component:PayComponent
    },
  
    
    {
      path:'contact',component:ContactusComponent
    },
    
    {
      path:'single',component:SingleComponent
    },
    {
      path:'order',component:OrderComponent
    }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
