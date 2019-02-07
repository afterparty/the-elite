import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-rankings',
	templateUrl: './rankings.component.html',
	styleUrls: ['./rankings.component.scss']
})
export class RankingsComponent implements OnInit {
	constructor(public router: Router) {}

	ngOnInit() {}
}
