import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentDetailRouteContainerComponent } from './instrument-detail-route-container.component';

describe('InstrumentDetailRouteContainerComponent', () => {
  let component: InstrumentDetailRouteContainerComponent;
  let fixture: ComponentFixture<InstrumentDetailRouteContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrumentDetailRouteContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentDetailRouteContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
