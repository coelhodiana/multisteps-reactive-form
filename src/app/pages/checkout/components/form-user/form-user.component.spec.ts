import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CheckoutComponent } from './../../checkout.component';
import { formUserInicialValues } from './../../test-helpers/mocks';
import { FormUserComponent } from './form-user.component';
import { FormUserModule } from './form-user.module';

describe('FormUserComponent', () => {
  let component: FormUserComponent;
  let fixture: ComponentFixture<FormUserComponent>;
  let container: CheckoutComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormUserComponent, CheckoutComponent],
      imports: [RouterTestingModule, FormUserModule],
      providers: [CheckoutComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUserComponent);
    component = fixture.componentInstance;
    container = TestBed.inject(CheckoutComponent);
    jest.spyOn(container, 'getUser').mockReturnValue(formUserInicialValues);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have inicial values in form', () => {
    expect(component.form.value).toEqual(formUserInicialValues.value);
  });
});
