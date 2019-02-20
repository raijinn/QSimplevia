import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSettingsTellerComponent } from './account-settings-teller.component';

describe('AccountSettingsTellerComponent', () => {
  let component: AccountSettingsTellerComponent;
  let fixture: ComponentFixture<AccountSettingsTellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountSettingsTellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSettingsTellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
