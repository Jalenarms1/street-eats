import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderErrorModalComponent } from './order-error-modal.component';

describe('OrderErrorModalComponent', () => {
  let component: OrderErrorModalComponent;
  let fixture: ComponentFixture<OrderErrorModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderErrorModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderErrorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
