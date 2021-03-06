import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LevelSelectComponent } from './level-select/level-select.component';
import { DifficultySelectComponent } from './difficulty-select/difficulty-select.component';
import { RankingsComponent } from './rankings/rankings.component';
import { RunComponent } from './run/run.component';

import { TitlebarComponent } from './titlebar/titlebar.component';
import { HttpClientModule } from '@angular/common/http';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@NgModule({
	declarations: [AppComponent, LevelSelectComponent, DifficultySelectComponent, RankingsComponent, RunComponent, TitlebarComponent],
	entryComponents: [],
	imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
	providers: [StatusBar, SplashScreen, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, InAppBrowser],
	bootstrap: [AppComponent]
})
export class AppModule {}
