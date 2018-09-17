import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectItemMinComponent } from './project-item-min.component';

describe('ProjectItemMinComponent', () => {
  let component: ProjectItemMinComponent;
  let fixture: ComponentFixture<ProjectItemMinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectItemMinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectItemMinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
