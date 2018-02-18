import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePadgeComponent } from './home-padge.component';

describe('HomePadgeComponent', () => {
  let component: HomePadgeComponent;
  let fixture: ComponentFixture<HomePadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
