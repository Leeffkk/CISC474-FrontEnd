import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  Projects: any[] = [ ];
  Attribute: any[] = [ ];
  selectedproject = -1;
  index = -1;

  constructor(private projSvc:ProjectsService) { 
     projSvc.getProjects().subscribe(result=>{
       this.Projects=result.data;
     })
  }

  showDetail(id,project){
    console.log(id);
    console.log(project);
    this.index = id;
    if (this.selectedproject === this.index){
      this.selectedproject = -1;
    }
    else {
      this.selectedproject = this.index;
    }
  }

  try(){
    console.log();
  }
  ngOnInit(): void {
  }

}
