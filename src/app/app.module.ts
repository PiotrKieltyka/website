import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { MeetupDetailsComponent } from './meetup-details/meetup-details.component';
import { ParticlesComponent } from './particles/particles.component';
import { PersonalStudiesComponent } from './personal-studies/personal-studies.component';
import { MeetupDetailsCardComponent } from './meetup-details-card/meetup-details-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ProjectDetailsComponent,
    MeetupDetailsComponent,
    ParticlesComponent,
    PersonalStudiesComponent,
    MeetupDetailsCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
  ],
  exports: [
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
