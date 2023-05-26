import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessParentComponent } from './business-parent.component';

describe('BusinessParentComponent', () => {
  let component: BusinessParentComponent;
  let fixture: ComponentFixture<BusinessParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
