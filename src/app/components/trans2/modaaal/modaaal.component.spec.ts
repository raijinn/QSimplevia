import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaaalComponent } from './modaaal.component';

describe('ModaaalComponent', () => {
  let component: ModaaalComponent;
  let fixture: ComponentFixture<ModaaalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModaaalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaaalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
