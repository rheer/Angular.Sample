import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMenuPresentationComponent } from './top-menu-presentation.component';

describe('TopMenuPresentationComponent', () => {
  let component: TopMenuPresentationComponent;
  let fixture: ComponentFixture<TopMenuPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopMenuPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopMenuPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
