import { MeetupDetailsCardComponent } from './meetup-details-card/meetup-details-card.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const siteRoutes: Routes = [
  { path: 'home', component: HomeComponent, data: { animation: 'HomePage' }},
  { path: 'about', component: AboutComponent, data: { animation: 'AboutPage' }},
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(siteRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
