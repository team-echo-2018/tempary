import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationDescComponent } from './notification-desc.component';

describe('NotificationDescComponent', () => {
  let component: NotificationDescComponent;
  let fixture: ComponentFixture<NotificationDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
