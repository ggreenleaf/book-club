import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnPushParentComponent } from './on-push-parent.component';

describe('OnPushParentComponent', () => {
  let component: OnPushParentComponent;
  let fixture: ComponentFixture<OnPushParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnPushParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnPushParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
