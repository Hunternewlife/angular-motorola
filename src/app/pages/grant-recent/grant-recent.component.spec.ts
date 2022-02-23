import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantRecentComponent } from './grant-recent.component';

describe('GrantRecentComponent', () => {
  let component: GrantRecentComponent;
  let fixture: ComponentFixture<GrantRecentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrantRecentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantRecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
