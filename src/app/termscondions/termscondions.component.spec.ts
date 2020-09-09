import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermscondionsComponent } from './termscondions.component';

describe('TermscondionsComponent', () => {
  let component: TermscondionsComponent;
  let fixture: ComponentFixture<TermscondionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermscondionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermscondionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
