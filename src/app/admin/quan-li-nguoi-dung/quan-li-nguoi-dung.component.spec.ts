import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLiNguoiDungComponent } from './quan-li-nguoi-dung.component';

describe('QuanLiNguoiDungComponent', () => {
  let component: QuanLiNguoiDungComponent;
  let fixture: ComponentFixture<QuanLiNguoiDungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanLiNguoiDungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanLiNguoiDungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
