import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MEventsComponent } from './m-events.component';

describe('MEventsComponent', () => {
  let component: MEventsComponent;
  let fixture: ComponentFixture<MEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
