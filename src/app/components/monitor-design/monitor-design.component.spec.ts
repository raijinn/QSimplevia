import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorDesignComponent } from './monitor-design.component';

describe('MonitorDesignComponent', () => {
  let component: MonitorDesignComponent;
  let fixture: ComponentFixture<MonitorDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitorDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
