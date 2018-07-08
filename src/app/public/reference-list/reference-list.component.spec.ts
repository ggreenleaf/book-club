import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceListComponent } from './reference-list.component';

describe('ReferenceListComponent', () => {
  let component: ReferenceListComponent;
  let fixture: ComponentFixture<ReferenceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferenceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
