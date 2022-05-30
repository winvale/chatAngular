import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PageNoFoundComponent } from './components/page-no-found/page-no-found.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes =[
  {
    pathMatch:'full',
    path:"",
    redirectTo: 'home'
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"**",
    component:PageNoFoundComponent
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
