import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentSuccessBaokimComponent } from './payment-success-baokim.component';

describe('PaymentSuccessBaokimComponent', () => {
  let component: PaymentSuccessBaokimComponent;
  let fixture: ComponentFixture<PaymentSuccessBaokimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentSuccessBaokimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentSuccessBaokimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
