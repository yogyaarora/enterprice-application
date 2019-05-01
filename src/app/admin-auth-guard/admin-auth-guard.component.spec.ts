import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAuthGuardComponent } from './admin-auth-guard.component';

describe('AdminAuthGuardComponent', () => {
  let component: AdminAuthGuardComponent;
  let fixture: ComponentFixture<AdminAuthGuardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAuthGuardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAuthGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
