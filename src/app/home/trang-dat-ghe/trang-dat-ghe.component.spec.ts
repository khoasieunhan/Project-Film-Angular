import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrangDatGheComponent } from './trang-dat-ghe.component';

describe('TrangDatGheComponent', () => {
  let component: TrangDatGheComponent;
  let fixture: ComponentFixture<TrangDatGheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrangDatGheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrangDatGheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
