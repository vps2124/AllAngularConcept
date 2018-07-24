import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularCaseStudyComponent } from './angular-case-study.component';

describe('AngularCaseStudyComponent', () => {
  let component: AngularCaseStudyComponent;
  let fixture: ComponentFixture<AngularCaseStudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularCaseStudyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularCaseStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
