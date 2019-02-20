import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSettingsAdminComponent } from './account-settings-admin.component';

describe('AccountSettingsAdminComponent', () => {
  let component: AccountSettingsAdminComponent;
  let fixture: ComponentFixture<AccountSettingsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountSettingsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSettingsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
