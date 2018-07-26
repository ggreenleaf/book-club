import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfHomeComponent } from './ng-if-home.component';

describe('NgIfHomeComponent', () => {
  let component: NgIfHomeComponent;
  let fixture: ComponentFixture<NgIfHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgIfHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIfHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
