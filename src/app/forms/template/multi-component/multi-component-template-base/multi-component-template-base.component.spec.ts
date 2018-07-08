import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiComponentTemplateBaseComponent } from './multi-component-template-base.component';

describe('MultiComponentTemplateBaseComponent', () => {
  let component: MultiComponentTemplateBaseComponent;
  let fixture: ComponentFixture<MultiComponentTemplateBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiComponentTemplateBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiComponentTemplateBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
