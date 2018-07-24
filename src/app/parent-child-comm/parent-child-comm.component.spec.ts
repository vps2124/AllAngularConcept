import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentChildCommComponent } from './parent-child-comm.component';

describe('ParentChildCommComponent', () => {
  let component: ParentChildCommComponent;
  let fixture: ComponentFixture<ParentChildCommComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentChildCommComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentChildCommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
