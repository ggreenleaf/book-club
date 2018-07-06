import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnPushChildComponent } from './on-push-child.component';

describe('OnPushChildComponent', () => {
  let component: OnPushChildComponent;
  let fixture: ComponentFixture<OnPushChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnPushChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnPushChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
