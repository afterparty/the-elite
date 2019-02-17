import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class TheEliteService {
	constructor(private http: HttpClient) {}

	getGoldenEyeRankings(stageId: number) {
		return this.http.get('https://rankings.the-elite.net/ajax/stage/' + stageId);
	}
}
