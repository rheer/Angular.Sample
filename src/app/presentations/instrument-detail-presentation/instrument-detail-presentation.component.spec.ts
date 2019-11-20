import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentDetailPresentationComponent } from './instrument-detail-presentation.component';

describe('InstrumentDetailPresentationComponent', () => {
  let component: InstrumentDetailPresentationComponent;
  let fixture: ComponentFixture<InstrumentDetailPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrumentDetailPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentDetailPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
