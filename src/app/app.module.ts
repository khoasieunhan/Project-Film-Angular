import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MomentModule } from 'ngx-moment';
import { AdminModule } from './admin/admin.module';
import { AuthGuard } from './guard/auth.guard';
import { ModalModule } from './modal/modal.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
  LinkedinLoginProvider,
  VkontakteLoginProvider,
} from 'angular-6-social-login-v2';
// import { ExportAsModule } from 'ngx-export-as';

// const appRoutes: Routes = [
//   { path: '', loadChildren: () => HomeModule },
//   { path: 'home', loadChildren: () => HomeModule },
//   { path: 'admin', loadChildren: () => AdminModule },
// ];

// , canActivate: [AuthGuard]

export function getAuthServiceConfigs() {
  const config = new AuthServiceConfig(
    [
      {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider('239718343586075')
      },
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider('Your-Google-Client-Id')
      },
      {
        id: VkontakteLoginProvider.PROVIDER_ID,
        provider: new VkontakteLoginProvider('Your-VK-Client-Id')
      },
      {
        id: LinkedinLoginProvider.PROVIDER_ID,
        provider: new LinkedinLoginProvider('1098828800522-m2ig6bieilc3tpqvmlcpdvrpvn86q4ks.apps.googleusercontent.com')
      },
    ]
  );
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    AdminModule,
    BrowserAnimationsModule,
    HttpModule,
    ModalModule,
    SlickCarouselModule,
    SocialLoginModule,
    // ExportAsModule,
    // RouterModule.forRoot(appRoutes),
    MomentModule
  ],
  providers: [Title, {
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
