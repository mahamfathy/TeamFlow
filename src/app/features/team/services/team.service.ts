import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TeamMember } from '../interfaces/team';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  private dataUrl = 'assests/data/team.json';
  private memberSubject = new BehaviorSubject<TeamMember[]>([]);
  member$ = this.memberSubject.asObservable();
  constructor(private http: HttpClient) {
    this.loadTeamMembers();
  }
  loadTeamMembers() {
    this.http.get<TeamMember[]>(this.dataUrl).subscribe((data) => {
      this.memberSubject.next(data);
    });
  }
  filteredMemberByRole(role: string) {
    const filteredMember = this.memberSubject.value.filter(
      (member) => member.role === role
    );
    this.memberSubject.next(filteredMember);
  }
  resetFilter() {
    this.loadTeamMembers();
  }
}
