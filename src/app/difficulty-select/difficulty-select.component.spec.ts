import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DifficultySelectComponent } from './difficulty-select.component';

describe('DifficultySelectComponent', () => {
  let component: DifficultySelectComponent;
  let fixture: ComponentFixture<DifficultySelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DifficultySelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DifficultySelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
