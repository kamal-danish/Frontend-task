import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { USerListComponent } from './user-list.component';

describe('USerListComponent', () => {
  let component: USerListComponent;
  let fixture: ComponentFixture<USerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ USerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(USerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
