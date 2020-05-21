import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-myrequists',
  templateUrl: './myrequists.component.html',
  styleUrls: ['./myrequists.component.scss']
})
export class MyrequistsComponent implements OnInit {
  Projects: any[] = [ ];
  Attribute: any[] = [ ];
  selectedproject = -1;
  error: string;

  constructor(private projSvc:ProjectsService) { 
    projSvc.getSubmittedProjects().subscribe(result=>{
      this.Projects=result.data.projects;
    })
  }

  showDetail(index, project){
    console.log(index);
    console.log(project);
    if (this.selectedproject === index){
      this.selectedproject = -1;
    }
    else {
      this.selectedproject = index;
    }
  }

  delate(id){
    //let index = this.Projects.indexOf(item);
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
  ngOnInit(): void {
  }

}
