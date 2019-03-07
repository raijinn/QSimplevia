import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MTellersComponent } from './m-tellers.component';

describe('MTellersComponent', () => {
  let component: MTellersComponent;
  let fixture: ComponentFixture<MTellersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MTellersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MTellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
