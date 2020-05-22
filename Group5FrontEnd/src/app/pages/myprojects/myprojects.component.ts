import { Component, OnInit, inject, Inject } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MydialogComponent} from '../../mydialog/mydialog.component'


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
  github: any[]=[ ];

  constructor(private projSvc:ProjectsService, public dialog: MatDialog) { 
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
  Committed(item){
    this.projSvc.checkProjectCommits(item.url).subscribe(a=>{
      this.github = a.data;
    })
    const dialogRef = this.dialog.open(MydialogComponent, {
      width: '500px',
      height: '500px',
      data: {data : this.github},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
  ngOnInit(): void {
  }

}