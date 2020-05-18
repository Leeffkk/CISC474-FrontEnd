import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private path="http://localhost:3000/api/projects/"
  constructor(private http:HttpClient) { }

  getSemesters(): Observable<any>{
    return this.http.get(this.path+'semesters');
  }
  getProjects(): Observable<any>{
    return this.http.get(this.path+'semester');
  }
  addProjects(email: string, url: string, groupmember: string, discription: string): Observable<any>{
    return this.http.post(this.path,{email: email, url: url, groupmember: groupmember, discription: discription});
  }
  deleteProject(){
    this.http.delete(this.path+':id',{});
  }
}
