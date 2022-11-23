import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CheckoutComponent } from './../../checkout.component';
import { CheckoutModule } from './../../checkout.module';
import { FormUserComponent } from './form-user.component';
import { FormUserModule } from './form-user.module';

describe('FormUserComponent', () => {
  let component: FormUserComponent;
  let fixture: ComponentFixture<FormUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormUserComponent, CheckoutComponent, ],
      imports: [RouterTestingModule, FormUserModule, CheckoutModule],
      providers: [CheckoutComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
