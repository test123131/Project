import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsComponentComponent } from './lists-component.component';

describe('ListsComponentComponent', () => {
  let component: ListsComponentComponent;
  let fixture: ComponentFixture<ListsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
