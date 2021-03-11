import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalsuportComponent } from './technicalsuport.component';

describe('TechnicalsuportComponent', () => {
  let component: TechnicalsuportComponent;
  let fixture: ComponentFixture<TechnicalsuportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicalsuportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalsuportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
