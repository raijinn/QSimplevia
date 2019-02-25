import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorDisplayComponent } from './monitor-display.component';

describe('MonitorDisplayComponent', () => {
  let component: MonitorDisplayComponent;
  let fixture: ComponentFixture<MonitorDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitorDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
