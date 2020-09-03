import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMenuModalComponent } from './show-menu-modal.component';

describe('ShowMenuModalComponent', () => {
  let component: ShowMenuModalComponent;
  let fixture: ComponentFixture<ShowMenuModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowMenuModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMenuModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
