import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeamMemberCardComponent } from './modules/team/components/team-member-card/team-member-card.component';
import { TeamMember } from './modules/team/interfaces/team-member.interface';

describe('TeamMemberCardComponent', () => {
  let component: TeamMemberCardComponent;
  let fixture: ComponentFixture<TeamMemberCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamMemberCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TeamMemberCardComponent);
    component = fixture.componentInstance;

    component.member = {
      name: 'Test User',
      role: 'Developer',
      image: 'path/to/image.jpg',
    } as TeamMember;

    fixture.detectChanges();
  });

  it('should emit close when Escape key is pressed', () => {
    spyOn(component.close, 'emit');

    const event = new KeyboardEvent('keydown', { key: 'Escape' });
    document.dispatchEvent(event);

    expect(component.close.emit).toHaveBeenCalled();
  });
});
