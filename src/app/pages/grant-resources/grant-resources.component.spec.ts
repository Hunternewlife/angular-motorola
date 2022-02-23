import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantResourcesComponent } from './grant-resources.component';

describe('GrantResourcesComponent', () => {
  let component: GrantResourcesComponent;
  let fixture: ComponentFixture<GrantResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrantResourcesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
