import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import {Popup} from 'ng2-opd-popup';
//import {MatDialog, MatDialogConfig} from '@angular/material';


@Component({
  selector: 'app-myprojects',
  templateUrl: './myprojects.component.html',
  styleUrls: ['./myprojects.component.scss']
})
export class MyprojectsComponent implements OnInit {

  Projects: any[] = [ ];
  Attribute: any[] = [ ];
  selectedproject = -1;
  error: string;
  //private dialog: MatDialog {};

  constructor(private projSvc:ProjectsService, private popup:Popup) { 
    projSvc.getProjectsByCurUser().subscribe(result=>{
      this.Projects=result.data;
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
  Committed(){
    this.popup.show();
  }
  ngOnInit(): void {
  }

}
