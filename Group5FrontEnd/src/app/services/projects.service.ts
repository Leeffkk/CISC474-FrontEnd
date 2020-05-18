import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private path="http://localhost:3000/api/projects/"
  constructor(private http:HttpClient) { }
  index: string;

  getProjects(): Observable<any>{
    return this.http.get(this.path+'getProjects');
  }
  getProject(): Observable<any>{
    return this.http.get(this.path+'getProjectsByCurUser');
  }
  addProjects(name: string, url: string, groupmember: string, description: string): Observable<any>{
    return this.http.post(this.path,{name: name, url: url, groupMembers: groupmember, description: description});
  }
  UpdateProject(id, name: string, url: string, groupmember: string, description: string): Observable<any>{
    return this.http.put(this.path+'',{id: id});
  }
  deleteProject(id): Observable<any>{
    return this.http.post(this.path+'deleteProject',{id: id});
  }
  SetIndex(id) {
    this.index = id;
  }
  GetIndex() {
    return this.index;
  }
}
