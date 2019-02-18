import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
	selector: 'app-rankings',
	templateUrl: './rankings.component.html',
	styleUrls: [ './rankings.component.scss' ]
})
export class RankingsComponent implements OnInit {
	levelId: number;
	difficulty: string;
	flatRuns: any;
	runs: Run[] = [];
	constructor(
		public router: Router,
		private route: ActivatedRoute,
		public http: HttpClient,
		private iab: InAppBrowser
	) {}

	ngOnInit() {
		this.route.params.subscribe((params) => {
			this.levelId = params.id;
			this.difficulty = params.difficulty;

			axios({
				method: 'get',
				url: 'https://cors-anywhere.herokuapp.com/http://rankings.the-elite.net/ajax/stage/' + this.levelId,
				headers: { Origin: 'http://rankings.the-elite.net' }
			}).then((res: { data: any[] }) => {
				if (this.difficulty === 'agent') this.flatRuns = res.data[0].slice(0, 600);
				else if (this.difficulty === 'secretagent') this.flatRuns = res.data[1].slice(0, 600);
				else if (this.difficulty === '00') this.flatRuns = res.data[2].slice(0, 600);
			});
		});
	}

	fancyTimeFormat(seconds) {
		const hrs = ~~(seconds / 3600);
		const mins = ~~((seconds % 3600) / 60);
		const secs = ~~seconds % 60;

		// Output like "1:01" or "4:03:59" or "123:03:59"
		let ret = '';

		if (hrs > 0) {
			ret += '' + hrs + ':' + (mins < 10 ? '0' : '');
		}

		ret += '' + mins + ':' + (secs < 10 ? '0' : '');
		ret += '' + secs;
		return ret;
	}

	viewVideo(id: number) {
		const browser = this.iab.create('https://rankings.the-elite.net/video/' + id);

		browser.on('loadstop').subscribe((event) => {
			browser.insertCSS({ code: 'body{ background: #0f0f0f; } iframe{ width: 100vw; height: 50vh; }' });
		});
	}
}

export interface Run {
	name: string;
	screenName: string;
	unknown: number;
	videoId: number;
	time: number;
	difficulty: number;
}
