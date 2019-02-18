import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-level-select',
	templateUrl: './level-select.component.html',
	styleUrls: [ './level-select.component.scss' ]
})
export class LevelSelectComponent implements OnInit {
	levelList: Level[];
	game: string;

	constructor(private route: ActivatedRoute, private router: Router) {}

	ngOnInit() {
		this.route.params.subscribe((params) => {
			this.game = params.id;
			if (this.game === 'goldeneye') {
				this.levelList = [
					{ id: 1, name: 'Dam', thumbUrl: '' },
					{ id: 2, name: 'Facility', thumbUrl: '' },
					{ id: 3, name: 'Runway', thumbUrl: '' },
					{ id: 4, name: 'Surface I', thumbUrl: '' },
					{ id: 5, name: 'Bunker I', thumbUrl: '' },
					{ id: 6, name: 'Silo', thumbUrl: '' },
					{ id: 7, name: 'Frigate', thumbUrl: '' },
					{ id: 8, name: 'Surface II', thumbUrl: '' },
					{ id: 9, name: 'Bunker II', thumbUrl: '' },
					{ id: 10, name: 'Statue', thumbUrl: '' },
					{ id: 11, name: 'Archives', thumbUrl: '' },
					{ id: 12, name: 'Streets', thumbUrl: '' },
					{ id: 13, name: 'Depot', thumbUrl: '' },
					{ id: 14, name: 'Train', thumbUrl: '' },
					{ id: 15, name: 'Jungle', thumbUrl: '' },
					{ id: 16, name: 'Control', thumbUrl: '' },
					{ id: 17, name: 'Caverns', thumbUrl: '' },
					{ id: 18, name: 'Cradle', thumbUrl: '' },
					{ id: 19, name: 'Aztec', thumbUrl: '' },
					{ id: 20, name: 'Egypt', thumbUrl: '' }
				];
			} else if (this.game === 'perfectdark') {
				this.levelList = [
					{ id: 21, name: 'Defection', thumbUrl: '' },
					{ id: 22, name: 'Investigation', thumbUrl: '' },
					{ id: 23, name: 'Extraction', thumbUrl: '' },
					{ id: 24, name: 'Villa', thumbUrl: '' },
					{ id: 25, name: 'Chicago', thumbUrl: '' },
					{ id: 26, name: 'G5', thumbUrl: '' },
					{ id: 27, name: 'Infiltration', thumbUrl: '' },
					{ id: 28, name: 'Rescue', thumbUrl: '' },
					{ id: 29, name: 'Escape', thumbUrl: '' },
					{ id: 30, name: 'Air Base', thumbUrl: '' },
					{ id: 31, name: 'Air Force One', thumbUrl: '' },
					{ id: 32, name: 'Crash Site', thumbUrl: '' },
					{ id: 33, name: 'Pelagic II', thumbUrl: '' },
					{ id: 34, name: 'Deep Sea', thumbUrl: '' },
					{ id: 35, name: 'CI', thumbUrl: '' },
					{ id: 36, name: 'Attack Ship', thumbUrl: '' },
					{ id: 37, name: 'Skedar Ruins', thumbUrl: '' },
					{ id: 38, name: 'MBR', thumbUrl: '' },
					{ id: 39, name: 'Malan SOS', thumbUrl: '' },
					{ id: 30, name: 'WAR!', thumbUrl: '' },
					{ id: 31, name: 'Duel', thumbUrl: '' }
				];
			} else {
				this.levelList = [ { id: 0, name: 'Error: Please refresh.', thumbUrl: '' } ];
			}
		});
	}
}

export interface Level {
	id: number;
	name: string;
	thumbUrl: string;
}
