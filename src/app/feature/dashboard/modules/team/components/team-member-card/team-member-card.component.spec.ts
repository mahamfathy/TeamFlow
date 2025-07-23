import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMember } from '../../interfaces/team';
import { TeamMemberCardComponent } from './team-member-card.component';

describe('TeamMemberCardComponent', () => {
  let component: TeamMemberCardComponent;
  let fixture: ComponentFixture<TeamMemberCardComponent>;
  const members: TeamMember = {
    image: 'test.jpg',
    name: 'Test User',
    role: 'Frontend Developer',
    performance: 80,
    status: 'Active',
    id: 1,
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamMemberCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TeamMemberCardComponent);
    component = fixture.componentInstance;
    component.member = members;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should emit close when Escape key is pressed', () => {
    spyOn(component.close, 'emit');

    const event = new KeyboardEvent('keydown', {
      key: 'Escape',
    });

    document.dispatchEvent(event);

    expect(component.close.emit).toHaveBeenCalled();
  });
});
