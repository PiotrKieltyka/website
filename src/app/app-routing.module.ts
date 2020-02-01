import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { LoginComponent } from './login/login.component';

const siteRoutes: Routes = [
  { path: 'home', component: HomeComponent, data: { animation: 'HomePage' }},
  { path: 'about', component: AboutComponent, data: { animation: 'AboutPage' }},
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: ForbiddenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(siteRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
