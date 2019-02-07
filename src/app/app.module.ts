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

@NgModule({
	declarations: [AppComponent, LevelSelectComponent, DifficultySelectComponent, RankingsComponent, RunComponent, TitlebarComponent],
	entryComponents: [],
	imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
	providers: [StatusBar, SplashScreen, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
	bootstrap: [AppComponent]
})
export class AppModule {}
