import { TestBed } from '@angular/core/testing';

import { TheEliteService } from './the-elite.service';

describe('TheEliteService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: TheEliteService = TestBed.get(TheEliteService);
		expect(service).toBeTruthy();
	});
});
