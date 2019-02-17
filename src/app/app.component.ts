import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html'
})
export class AppComponent {
	public appPages = [
		{
			title: 'Home',
			url: '/',
			icon: 'home'
		},
		{
			title: 'GoldenEye',
			url: '/level-select/goldeneye',
			icon: 'eye'
		},
		{
			title: 'Perfect Dark',
			url: '/level-select/perfectdark',
			icon: 'star'
		}
	];

	constructor(private platform: Platform, private splashScreen: SplashScreen, private statusBar: StatusBar) {
		this.initializeApp();
	}

	initializeApp() {
		this.platform.ready().then(() => {
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}
}
