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
  Committed(item){
    this.projSvc.checkProjectCommits(item.url).subscribe(a=>{
      this.github = a.data;
      const dialogRef = this.dialog.open(MydialogComponent, {
        width: '800px',
        height: '700px',
        data: {data : this.github},
      });
    })
  }
  
  ngOnInit(): void {
  }

}