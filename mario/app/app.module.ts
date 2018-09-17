import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {UserService} from './services/user.service';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NavBarComponent } from './views/platform/components/nav-bar/nav-bar.component';
import { NavItemComponent } from './views/platform/components/nav-item/nav-item.component';
import { HomePageComponent } from './views/platform/pages/home-page/home-page.component';
import { LoginPageComponent } from './views/platform/pages/login-page/login-page.component';
import { SignupPageComponent } from './views/platform/pages/signup-page/signup-page.component';
import { LogoSpanComponent } from './views/platform/components/logo-span/logo-span.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RegSelectorPageComponent } from './views/platform/pages/reg-selector-page/reg-selector-page.component';
import { ProjectsPageComponent } from './views/platform/pages/projects-page/projects-page.component';
import { HeaderComponent } from './views/platform/components/header/header.component';
import { MessagingPageComponent } from './views/platform/pages/messaging-page/messaging-page.component';
import { FeaturesPageComponent } from './views/platform/pages/features-page/features-page.component';
import { AboutusPageComponent } from './views/platform/pages/aboutus-page/aboutus-page.component';
import { HelpPageComponent } from './views/platform/pages/help-page/help-page.component';
import { FooterComponent } from './views/platform/components/footer/footer.component';
import { ForumPageComponent } from './views/platform/pages/forum-page/forum-page.component';
import { ProfileDescComponent } from './views/platform/components/profile-desc/profile-desc.component';
import { RankingDescComponent } from './views/platform/components/ranking-desc/ranking-desc.component';
import { NotificationDescComponent } from './views/platform/components/notification-desc/notification-desc.component';
import { HomeDescComponent } from './views/platform/components/home-desc/home-desc.component';
import { ProjectItemComponent } from './views/platform/components/project-item/project-item.component';
import { ProjectItemMinComponent } from './views/platform/components/project-item-min/project-item-min.component';
import { ProfilePageComponent } from './views/platform/pages/profile-page/profile-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NavItemComponent,
    HomePageComponent,
    LoginPageComponent,
    SignupPageComponent,
    LogoSpanComponent,
    RegSelectorPageComponent,
    ProjectsPageComponent,
    HeaderComponent,
    MessagingPageComponent,
    FeaturesPageComponent,
    AboutusPageComponent,
    HelpPageComponent,
    FooterComponent,
    ForumPageComponent,
    ProfileDescComponent,
    RankingDescComponent,
    NotificationDescComponent,
    HomeDescComponent,
    ProjectItemComponent,
    ProjectItemMinComponent,
    ProfilePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
