import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-myprojects',
  templateUrl: './myprojects.component.html',
  styleUrls: ['./myprojects.component.scss']
})
export class MyprojectsComponent implements OnInit {

  Projects: any[] = [ {
    "_id": "5ec20f161c98d15820ef939a",
    "name": "dklajfklae",
    "description": "hello",
    "url": "sdafklajekrja",
    "groupMembers": "{dfaadsf,seraera,e,ra,erae}",
    "posts": null
}];
  Attribute: any[] = [ ];
  selectedproject = -1;
  error: string;

  constructor(private projSvc:ProjectsService) { 
    projSvc.getProject().subscribe(result=>{
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
      this.projSvc.getProject().subscribe(result=>{
        this.Projects=result.data;
      })}
      );
  }
  update(id){
    this.projSvc.SetIndex(id);
    
  }
  ngOnInit(): void {
  }

}
