import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Trans1Component } from './trans1.component';

describe('Trans1Component', () => {
  let component: Trans1Component;
  let fixture: ComponentFixture<Trans1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Trans1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Trans1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
