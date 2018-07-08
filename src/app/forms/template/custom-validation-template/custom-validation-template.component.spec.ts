import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomValidationTemplateComponent } from './custom-validation-template.component';

describe('CustomValidationTemplateComponent', () => {
  let component: CustomValidationTemplateComponent;
  let fixture: ComponentFixture<CustomValidationTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomValidationTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomValidationTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
