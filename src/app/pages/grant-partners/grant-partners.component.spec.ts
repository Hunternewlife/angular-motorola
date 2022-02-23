import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantPartnersComponent } from './grant-partners.component';

describe('GrantPartnersComponent', () => {
  let component: GrantPartnersComponent;
  let fixture: ComponentFixture<GrantPartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrantPartnersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
