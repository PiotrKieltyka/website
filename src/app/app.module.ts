import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './modules/material.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

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
import {
  UserinfoComponent,
  ProfileDialog,
} from './userinfo/userinfo.component';
import { LoaderComponent } from './loader/loader.component';
import { LoaderService } from './services/loader.service';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import {
  AddPostDialog,
  BlogComponent,
  EditPostDialog,
} from './blog/blog.component';

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
    ProfileDialog,
    LoaderComponent,
    BlogComponent,
    AddPostDialog,
    EditPostDialog,
  ],
  entryComponents: [ProfileDialog, AddPostDialog],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    MaterialModule,
    HttpClientModule,
  ],
  exports: [MaterialModule],
  providers: [
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    AuthService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
