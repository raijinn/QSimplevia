import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MNewsComponent } from './m-news.component';

describe('MNewsComponent', () => {
  let component: MNewsComponent;
  let fixture: ComponentFixture<MNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
