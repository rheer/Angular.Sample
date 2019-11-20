import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentListPresentationComponent } from './instrument-list-presentation.component';

describe('InstrumentListPresentationComponent', () => {
  let component: InstrumentListPresentationComponent;
  let fixture: ComponentFixture<InstrumentListPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrumentListPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentListPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
