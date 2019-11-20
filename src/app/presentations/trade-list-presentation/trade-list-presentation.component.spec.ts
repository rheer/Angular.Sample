import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeListPresentationComponent } from './trade-list-presentation.component';

describe('TradeListPresentationComponent', () => {
  let component: TradeListPresentationComponent;
  let fixture: ComponentFixture<TradeListPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeListPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeListPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
