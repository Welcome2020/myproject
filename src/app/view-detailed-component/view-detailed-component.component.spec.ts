import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDetailedComponentComponent } from './view-detailed-component.component';

describe('ViewDetailedComponentComponent', () => {
  let component: ViewDetailedComponentComponent;
  let fixture: ComponentFixture<ViewDetailedComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDetailedComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDetailedComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
