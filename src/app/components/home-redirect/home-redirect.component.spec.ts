import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRedirectComponent } from './home-redirect.component';

describe('HomeRedirectComponent', () => {
  let component: HomeRedirectComponent;
  let fixture: ComponentFixture<HomeRedirectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeRedirectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
