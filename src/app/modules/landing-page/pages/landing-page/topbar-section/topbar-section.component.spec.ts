import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarSectionComponent } from './topbar-section.component';

describe('TopbarSectionComponent', () => {
  let component: TopbarSectionComponent;
  let fixture: ComponentFixture<TopbarSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopbarSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopbarSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
