import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantIndustryComponent } from './grant-industry.component';

describe('GrantIndustryComponent', () => {
  let component: GrantIndustryComponent;
  let fixture: ComponentFixture<GrantIndustryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrantIndustryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantIndustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
