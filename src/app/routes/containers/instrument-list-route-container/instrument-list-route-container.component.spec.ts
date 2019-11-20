import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentListRouteContainerComponent } from './instrument-list-route-container.component';

describe('InstrumentListRouteComponent', () => {
  let component: InstrumentListRouteContainerComponent;
  let fixture: ComponentFixture<InstrumentListRouteContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrumentListRouteContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentListRouteContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
