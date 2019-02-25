import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss']
})
export class HomePage {
	constructor(public router: Router) { }

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
}
