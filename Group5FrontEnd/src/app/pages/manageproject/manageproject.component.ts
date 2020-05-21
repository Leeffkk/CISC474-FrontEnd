import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { ActivatedRoute, Router } from '@angular/router';
import { windowWhen } from 'rxjs/operators';

@Component({
  selector: 'app-manageproject',
  templateUrl: './manageproject.component.html',
  styleUrls: ['./manageproject.component.scss']
})
export class ManageprojectComponent implements OnInit {
  Projects: any[] = [ ];
  Pending: any[] = [ ];
  Approved: any[] = [ ];
  selectedproject = -1;
  error: string;
  returnUrl: string;

  constructor(private projSvc:ProjectsService, private route: ActivatedRoute, private router: Router) { 
      projSvc.getAllProjects().subscribe(result=>{
        this.Pending=result.data.projects;
        this.Approved=result.data.projects;
        this.Pending = this.Pending.filter(
          project=>project.state=='pending');
        this.Approved = this.Approved.filter(
          project=>project.state=='approved');
      })
  }

  delete(id){
    this.projSvc.deleteProject(id).subscribe(response=>{
      this.router.navigate([this.returnUrl]);},
      err=>{this.error=err.message||err;
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
    this.projSvc.approveProject(id).subscribe(response=>{
      this.router.navigate([this.returnUrl]);},
      err=>{this.error=err.message||err;
      this.projSvc.getSubmittedProjects().subscribe(result=>{
        this.Projects=result.data;
      })}
      );
  }
  reject(id){
    this.projSvc.rejectProject(id).subscribe(response=>{
      this.router.navigate([this.returnUrl]);},
      err=>{this.error=err.message||err;
      this.projSvc.getSubmittedProjects().subscribe(result=>{
        this.Projects=result.data;
      })}
      );
  }
  ngOnInit(): void {
    this.returnUrl=this.route.snapshot.queryParams['returnUrl'] || '/';
  }

}
