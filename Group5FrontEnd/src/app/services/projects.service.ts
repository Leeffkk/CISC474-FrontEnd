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
  Name: string;
  URL: string;
  GroupM: string;
  Descript: string;

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
    return this.http.put(this.path+'',{id: id, name: name, url: url, groupMembers: groupmember, description: description});
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
  SendInfo(name, url, groupmember, description) {
    this.Name=name;
    this.URL=url;
    this.GroupM=groupmember;
    this.Descript=description;
  }
  GetName() {
    return this.Name;
  }
  GetUrl() {
    return this.URL;
  }
  GetGroupM() {
    return this.GroupM;
  }
  GetDescript() {
    return this.Descript;
  }
}
