import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CheckoutComponent } from './../../checkout.component';
import { CheckoutModule } from './../../checkout.module';
import { FormPaymentComponent } from './form-payment.component';
import { FormPaymentModule } from './form-payment.module';

describe('FormPaymentComponent', () => {
  let component: FormPaymentComponent;
  let fixture: ComponentFixture<FormPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormPaymentComponent, CheckoutComponent],
      imports: [RouterTestingModule, FormPaymentModule, CheckoutModule],
      providers: [CheckoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
