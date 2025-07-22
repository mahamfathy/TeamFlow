import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TeamMember } from '../interfaces/team';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  private dataUrl = 'assets/data/team.json';
  private allMembers: TeamMember[] = [];
  private memberSubject = new BehaviorSubject<TeamMember[]>([]);
  member$ = this.memberSubject.asObservable();
  constructor(private http: HttpClient) {
    this.loadTeamMembers();
  }
  loadTeamMembers() {
    this.http.get<TeamMember[]>(this.dataUrl).subscribe((data) => {
      this.allMembers = data;
      this.memberSubject.next(data);
      console.log(data);
    });
  }
  filteredMemberByRole(role: string) {
    const filteredMember = this.allMembers.filter(
      (member) => member.role === role
    );
    this.memberSubject.next(filteredMember);
  }
  resetFilter() {
    this.memberSubject.next(this.allMembers);
  }
}
