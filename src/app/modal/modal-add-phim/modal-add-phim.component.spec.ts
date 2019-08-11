import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddPhimComponent } from './modal-add-phim.component';

describe('ModalAddPhimComponent', () => {
  let component: ModalAddPhimComponent;
  let fixture: ComponentFixture<ModalAddPhimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAddPhimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddPhimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
