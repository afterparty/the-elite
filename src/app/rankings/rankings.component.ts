import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';

@Component({
	selector: 'app-rankings',
	templateUrl: './rankings.component.html',
	styleUrls: ['./rankings.component.scss']
})
export class RankingsComponent implements OnInit {
	levelId: number;
	difficulty: string;
	flatRuns: any;
	runs: Run[] = [];
	constructor(public router: Router, private route: ActivatedRoute, public http: HttpClient) {}

	ngOnInit() {
		this.route.params.subscribe(params => {
			this.levelId = params.id;
			this.difficulty = params.difficulty;

			axios({
				method: 'get',
				url: 'https://cors-anywhere.herokuapp.com/http://rankings.the-elite.net/ajax/stage/' + this.levelId,
				headers: { Origin: 'http://rankings.the-elite.net' }
			}).then(res => {
				if (this.difficulty === 'agent') this.flatRuns = res.data[0];
				else if (this.difficulty === 'secretagent') this.flatRuns = res.data[1];
				else if (this.difficulty === '00') this.flatRuns = res.data[2];
			});
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
