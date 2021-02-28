import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarsphotosviewerComponent } from './marsphotosviewer.component';

describe('MarsphotosviewerComponent', () => {
  let component: MarsphotosviewerComponent;
  let fixture: ComponentFixture<MarsphotosviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarsphotosviewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarsphotosviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
