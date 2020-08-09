import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { LoginComponent } from './login/login.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { AuthGuard } from './services/auth.guard';
import { BlogComponent } from './blog/blog.component';

const siteRoutes: Routes = [
  { path: 'home', component: HomeComponent, data: { animation: 'HomePage' }},
  { path: 'about', component: AboutComponent, data: { animation: 'AboutPage' }},
  { path: 'blog', component: BlogComponent, data: { animation: 'BlogPage'}},
  { path: 'login', component: LoginComponent, data: { animation: 'LoginPage' }},
  { path: 'userinfo', component: UserinfoComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: ForbiddenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(siteRoutes,
    {
      scrollPositionRestoration: 'top',
      // anchorScrolling: 'enabled',
    }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
