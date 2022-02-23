import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantProductsComponent } from './grant-products.component';

describe('GrantProductsComponent', () => {
  let component: GrantProductsComponent;
  let fixture: ComponentFixture<GrantProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrantProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
