import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovernmentGrantsComponent } from './government-grants.component';

describe('GovernmentGrantsComponent', () => {
  let component: GovernmentGrantsComponent;
  let fixture: ComponentFixture<GovernmentGrantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GovernmentGrantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GovernmentGrantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
