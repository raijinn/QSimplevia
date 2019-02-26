import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AapiTestingComponent } from './aapi-testing.component';

describe('AapiTestingComponent', () => {
  let component: AapiTestingComponent;
  let fixture: ComponentFixture<AapiTestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AapiTestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AapiTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
