/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NumberParentComponent } from './NumberParent.component';

describe('NumberParentComponent', () => {
  let component: NumberParentComponent;
  let fixture: ComponentFixture<NumberParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
