import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatSingleComponent } from './cat-single.component';

describe('CatSingleComponent', () => {
  let component: CatSingleComponent;
  let fixture: ComponentFixture<CatSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
