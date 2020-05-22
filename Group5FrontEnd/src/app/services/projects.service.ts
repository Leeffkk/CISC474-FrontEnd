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

  github: any[]=[ ];

  getApprovedProjects(): Observable<any>{
    return this.http.get(this.path+'getApprovedProjects');
  }
  getSubmittedProjects(): Observable<any>{
    return this.http.get(this.path+'getSubmittedProjects');
  }
  getProjectsByCurUser(): Observable<any>{
    return this.http.get(this.path+'getProjectsByCurUser');
  }
  getAllProjects(): Observable<any>{
    return this.http.get(this.path+'getAllProjects');
  }
  addProjects(name: string, url: string, groupmember: string, description: string): Observable<any>{
    return this.http.post(this.path,{name: name, url: url, groupMembers: groupmember, description: description});
  }
  approveProject(id): Observable<any>{
    return this.http.post(this.path+"approveProject",{id: id});
  }
  rejectProject(id): Observable<any>{
    return this.http.post(this.path+"rejectProject",{id: id});
  }
  UpdateProject(id, name: string, url: string, groupmember: string, description: string): Observable<any>{
    return this.http.put(this.path+'',{id: id, name: name, url: url, groupMembers: groupmember, description: description});
  }
  checkProjectCommits(url: string): Observable<any>{
    return this.http.post(this.path+'checkProjectCommits',{url: url});
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
