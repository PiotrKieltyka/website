import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

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
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { LoginComponent } from './login/login.component';
import { environment } from 'src/environments/environment';
import { AuthService } from './services/auth.service';
import { MaterialModule } from './modules/material.module';
import { UserinfoComponent } from './userinfo/userinfo.component';

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
    ForbiddenComponent,
    LoginComponent,
    UserinfoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    MaterialModule,
  ],
  exports: [
    MaterialModule,
  ],
  providers: [
    AuthService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
