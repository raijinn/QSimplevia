import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Trans2Component } from './trans2.component';

describe('Trans2Component', () => {
  let component: Trans2Component;
  let fixture: ComponentFixture<Trans2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Trans2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Trans2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
