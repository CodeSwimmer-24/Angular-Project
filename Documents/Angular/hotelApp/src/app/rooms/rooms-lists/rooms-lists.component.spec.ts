import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsListsComponent } from './rooms-lists.component';

describe('RoomsListsComponent', () => {
  let component: RoomsListsComponent;
  let fixture: ComponentFixture<RoomsListsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomsListsComponent]
    });
    fixture = TestBed.createComponent(RoomsListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
