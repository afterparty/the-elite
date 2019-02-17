import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-rankings',
	templateUrl: './rankings.component.html',
	styleUrls: [ './rankings.component.scss' ]
})
export class RankingsComponent implements OnInit {
	params: any;
	constructor(public router: Router, private route: ActivatedRoute) {}

	ngOnInit() {
		this.route.params.subscribe((params) => {
			this.params = params;
		});
	}
}
