import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyrequistsComponent } from './myrequists.component';

describe('MyrequistsComponent', () => {
  let component: MyrequistsComponent;
  let fixture: ComponentFixture<MyrequistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyrequistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyrequistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
