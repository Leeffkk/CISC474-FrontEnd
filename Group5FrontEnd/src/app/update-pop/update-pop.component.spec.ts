import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePOPComponent } from './update-pop.component';

describe('UpdatePOPComponent', () => {
  let component: UpdatePOPComponent;
  let fixture: ComponentFixture<UpdatePOPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePOPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePOPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
