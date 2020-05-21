import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { windowWhen } from 'rxjs/operators';

@Component({
  selector: 'app-manageproject',
  templateUrl: './manageproject.component.html',
  styleUrls: ['./manageproject.component.scss']
})
export class ManageprojectComponent implements OnInit {
  Projects: any[] = [ {
    "_id": "5ec1ef400f64c03cf47c7f77",
    "name": "CISC4747",
    "description": "a lot ...",
    "url": "www.google.com",
    "groupMembers": "{test333@gmail.com, test3433. test1230}",
    "state": "Pending",
    "semester": null,
    "projectNumber": null
},
{
    "_id": "5ec1ef76bc74ac4c2c0419f9",
    "name": "CISC4747",
    "description": "a lot ...",
    "url": "www.google.com",
    "groupMembers": "{test333@gmail.com, test3433}",
    "state": "Approved",
    "semester": null,
    "projectNumber": null
}];
  Pending: any[] = [ ];
  Approved: any[] = [ ];
  selectedproject = -1;
  error: string;

  constructor(private projSvc:ProjectsService) { 
    //  projSvc.getAllProjects().subscribe(result=>{
    //    this.Projects=result.data.projects;
    //    this.Pending=result.data.projects;
    //    this.Approved=result.data.projects;
    //  })
    this.Pending = this.Projects.filter(
      project=>project.state=='Pending');
    this.Approved = this.Projects.filter(
      project=>project.state=='Approved');
  }

  delete(id){
    this.projSvc.deleteProject(id).subscribe(err=>{this.error=err.message||err;
      this.projSvc.getSubmittedProjects().subscribe(result=>{
        this.Projects=result.data;
      })}
      );
  }

  update(id, name, url, groupmember, description){
    this.projSvc.SetIndex(id);
    this.projSvc.SendInfo(name, url, groupmember, description);
  }
  approve(id){
    this.projSvc.approveProject(id).subscribe(err=>{this.error=err.message||err;
      this.projSvc.getSubmittedProjects().subscribe(result=>{
        this.Projects=result.data;
      })}
      );
  }
  reject(id){
    this.projSvc.rejectProject(id).subscribe(err=>{this.error=err.message||err;
      this.projSvc.getSubmittedProjects().subscribe(result=>{
        this.Projects=result.data;
      })}
      );
  }
  ngOnInit(): void {
  }

}
