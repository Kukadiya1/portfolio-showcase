import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillCloud } from './skill-cloud';

describe('SkillCloud', () => {
  let component: SkillCloud;
  let fixture: ComponentFixture<SkillCloud>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillCloud]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillCloud);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
