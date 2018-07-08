import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleTemplateComponent } from './simple-template.component';

describe('SimpleTemplateComponent', () => {
  let component: SimpleTemplateComponent;
  let fixture: ComponentFixture<SimpleTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
