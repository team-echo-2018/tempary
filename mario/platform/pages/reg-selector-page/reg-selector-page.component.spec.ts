import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegSelectorPageComponent } from './reg-selector-page.component';

describe('RegSelectorPageComponent', () => {
  let component: RegSelectorPageComponent;
  let fixture: ComponentFixture<RegSelectorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegSelectorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegSelectorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
