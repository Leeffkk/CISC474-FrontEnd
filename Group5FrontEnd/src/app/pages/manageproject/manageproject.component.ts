import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { ActivatedRoute, Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {UpdatePOPComponent} from '../../update-pop/update-pop.component'

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

  constructor(private projSvc:ProjectsService, private route: ActivatedRoute, private router: Router, public dialog: MatDialog) { 
    this.reloadPage();
  }

  delete(id){
    this.projSvc.deleteProject(id).subscribe(response=>{
      this.reloadPage();
      // TODO:: show response
    },
      err=>{this.error=err.message||err;});
      this.reloadPage();
  }

  update(item){
    const dialogRef = this.dialog.open(UpdatePOPComponent, {
      width: '800px',
      height: '700px',
      data: {data : item},
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    
  }
  approve(id){
    this.projSvc.approveProject(id).subscribe(response=>{
      // TODO:: show response  
      this.reloadPage();
      },
      err=>{this.error=err.message||err;});
      this.reloadPage();
  }
  reject(id){
    this.projSvc.rejectProject(id).subscribe(response=>{
      // TODO:: show response
      this.reloadPage();
      },
      err=>{this.error=err.message||err;});
      this.reloadPage();
  }

  reloadPage(){
    this.projSvc.getAllProjects().subscribe(result=>{
      this.Pending=result.data.projects;
      this.Approved=result.data.projects;
      this.Pending = this.Pending.filter(
        project=>project.state=='pending');
      this.Approved = this.Approved.filter(
        project=>project.state=='approved');
    })
  }

  ngOnInit(): void {
    this.returnUrl=this.route.snapshot.queryParams['returnUrl'] || '/';
  }

}
