import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingDescComponent } from './ranking-desc.component';

describe('RankingDescComponent', () => {
  let component: RankingDescComponent;
  let fixture: ComponentFixture<RankingDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
