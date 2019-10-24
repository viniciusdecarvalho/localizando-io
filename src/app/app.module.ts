import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FirebaseModule } from './services/firebase/firebase.module';
import { PipesModule } from './pipes/pipes.module';
import { AdvertisementPageModule } from './pages/advertisements/advertisements.module';
import { CategoriesPageModule } from './pages/categories/categories.module';
import { NewsPageModule } from './pages/news/news.module';
import { HomePageModule } from './pages/home/home.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FirebaseModule,
    PipesModule,
    AdvertisementPageModule,
    CategoriesPageModule,
    NewsPageModule,
    HomePageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
