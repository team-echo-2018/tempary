import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { LoginPageComponent } from '../views/platform/pages/login-page/login-page.component';
import { SignupPageComponent } from '../views/platform/pages/signup-page/signup-page.component';
import { HomePageComponent } from '../views/platform/pages/home-page/home-page.component';
import { RegSelectorPageComponent } from '../views/platform/pages/reg-selector-page/reg-selector-page.component';
import { ProjectsPageComponent } from '../views/platform/pages/projects-page/projects-page.component';
import { MessagingPageComponent } from '../views/platform/pages/messaging-page/messaging-page.component';
import { FeaturesPageComponent } from '../views/platform/pages/features-page/features-page.component';
import { AboutusPageComponent } from '../views/platform/pages/aboutus-page/aboutus-page.component';
import { HelpPageComponent } from '../views/platform/pages/help-page/help-page.component';
import { ForumPageComponent } from '../views/platform/pages/forum-page/forum-page.component';
import { ProfilePageComponent } from '../views/platform/pages/profile-page/profile-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'login', component: LoginPageComponent },
  { path: 'sign-up', component: SignupPageComponent},
  { path: 'reg-selector', component: RegSelectorPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'projects', component: ProjectsPageComponent },
  { path: 'messaging', component: MessagingPageComponent },
  { path: 'features', component: FeaturesPageComponent },
  { path: 'about-us', component: AboutusPageComponent },
  { path: 'help', component: HelpPageComponent },
  { path: 'forum', component: ForumPageComponent },
  { path: 'profile', component: ProfilePageComponent }
];

@NgModule({
  imports: [ 
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule],
  declarations: []
})
export class AppRoutingModule { }
