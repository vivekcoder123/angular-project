import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRedirectComponent } from './search-redirect.component';

describe('SearchRedirectComponent', () => {
  let component: SearchRedirectComponent;
  let fixture: ComponentFixture<SearchRedirectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchRedirectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
