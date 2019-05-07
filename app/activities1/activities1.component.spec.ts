import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Activities1Component } from './activities1.component';

describe('Activities1Component', () => {
  let component: Activities1Component;
  let fixture: ComponentFixture<Activities1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Activities1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Activities1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
