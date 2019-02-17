import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-difficulty-select',
	templateUrl: './difficulty-select.component.html',
	styleUrls: [ './difficulty-select.component.scss' ]
})
export class DifficultySelectComponent implements OnInit {
	stageId: number;
	constructor(public router: Router, private route: ActivatedRoute) {}

	ngOnInit() {
		this.route.params.subscribe((params) => {
			this.stageId = params.id;
		});
	}
}
