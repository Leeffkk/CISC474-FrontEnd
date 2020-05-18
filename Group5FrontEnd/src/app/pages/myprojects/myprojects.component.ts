import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-myprojects',
  templateUrl: './myprojects.component.html',
  styleUrls: ['./myprojects.component.scss']
})
export class MyprojectsComponent implements OnInit {

  Projects: any[] = [ ];
  Attribute: any[] = [ ];
  selectedproject = -1;

  constructor(private projSvc:ProjectsService) { 
    projSvc.getProjects().subscribe(result=>{
      this.Projects=result.data.semesters;
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

  ngOnInit(): void {
  }

}
