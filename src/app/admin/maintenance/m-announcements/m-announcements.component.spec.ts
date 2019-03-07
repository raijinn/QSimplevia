import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MAnnouncementsComponent } from './m-announcements.component';

describe('MAnnouncementsComponent', () => {
  let component: MAnnouncementsComponent;
  let fixture: ComponentFixture<MAnnouncementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MAnnouncementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MAnnouncementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
