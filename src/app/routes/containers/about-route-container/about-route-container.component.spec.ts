import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutRouteContainerComponent } from './about-route-container.component';

describe('AboutRouteContainerComponent', () => {
  let component: AboutRouteContainerComponent;
  let fixture: ComponentFixture<AboutRouteContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutRouteContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutRouteContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
