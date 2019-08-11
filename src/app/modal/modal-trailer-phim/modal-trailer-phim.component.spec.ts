import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTrailerPhimComponent } from './modal-trailer-phim.component';

describe('ModalTrailerPhimComponent', () => {
  let component: ModalTrailerPhimComponent;
  let fixture: ComponentFixture<ModalTrailerPhimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalTrailerPhimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTrailerPhimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
