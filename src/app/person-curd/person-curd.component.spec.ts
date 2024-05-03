import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonCurdComponent } from './person-curd.component';

describe('PersonCurdComponent', () => {
  let component: PersonCurdComponent;
  let fixture: ComponentFixture<PersonCurdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonCurdComponent]
    });
    fixture = TestBed.createComponent(PersonCurdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
