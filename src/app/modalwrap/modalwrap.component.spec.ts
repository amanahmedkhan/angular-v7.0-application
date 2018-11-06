import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalwrapComponent } from './modalwrap.component';

describe('ModalwrapComponent', () => {
  let component: ModalwrapComponent;
  let fixture: ComponentFixture<ModalwrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalwrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalwrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
