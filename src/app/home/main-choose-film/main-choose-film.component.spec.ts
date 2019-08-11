import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainChooseFilmComponent } from './main-choose-film.component';

describe('MainChooseFilmComponent', () => {
  let component: MainChooseFilmComponent;
  let fixture: ComponentFixture<MainChooseFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainChooseFilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainChooseFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
