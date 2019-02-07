import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-level-select',
	templateUrl: './level-select.component.html',
	styleUrls: ['./level-select.component.scss']
})
export class LevelSelectComponent implements OnInit {
	constructor(public router: Router) {}

	ngOnInit() {}
}
