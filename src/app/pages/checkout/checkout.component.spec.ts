import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutComponent } from './checkout.component';
import { CheckoutModule } from './checkout.module';
import { Checkout } from './interfaces/checkout';

const formMock: Checkout = {
  user: { name: 'diana', email: 'di@mail.com' },
  payment: { type: 'pix' },
};

describe('CheckoutComponent', () => {
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckoutComponent],
      imports: [CheckoutModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CheckoutComponent);
    component = fixture.componentInstance;
    component.form.patchValue(formMock);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Dado o formulário, quando for iniciado, então deve obter os valores padrão', () => {
    expect(component.form.value).toEqual(formMock);
  });
});
