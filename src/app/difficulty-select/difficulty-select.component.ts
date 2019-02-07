import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-difficulty-select',
	templateUrl: './difficulty-select.component.html',
	styleUrls: ['./difficulty-select.component.scss']
})
export class DifficultySelectComponent implements OnInit {
	constructor(public router: Router) {}

	ngOnInit() {}
}
