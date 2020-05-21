import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-updateproject',
  templateUrl: './updateproject.component.html',
  styleUrls: ['./updateproject.component.scss']
})
export class UpdateProjectComponent implements OnInit {
  Infor: any[] = [ ];
  updateForm: FormGroup;
  loading =false;
  submitted=false;
  returnUrl: string;
  error: string;
  index: string;
  url: string;
  name: string;
  groupMember: string;
  descript: string;


  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute,private router: Router,private projSev: ProjectsService) {
   }

  ngOnInit(): void {
    this.updateForm=this.formBuilder.group({
      projectname: ['',Validators.required],
      projecturl: ['',Validators.required],
      groupmember: ['',Validators.required],
      description: ['',Validators.required]
    });
    this.index=this.projSev.GetIndex();
    this.name=this.projSev.GetName();
    this.url=this.projSev.GetUrl();
    this.groupMember=this.projSev.GetGroupM();
    this.descript=this.projSev.GetDescript();
    this.Infor = [{
      "name": this.name,
      "description": this.descript,
      "url": this.url,
      "groupMembers": this.groupMember
  } ];
    this.returnUrl=this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  submit(){
    this.submitted=true;
    if (this.updateForm.invalid){
      return;
    }
    this.loading=true;
    this.projSev.UpdateProject(this.index,this.updateForm.controls.projectname.value,
      this.updateForm.controls.projecturl.value,
      "{"+this.updateForm.controls.groupmember.value+"}",
      this.updateForm.controls.description.value).subscribe(response=>{
      this.router.navigate([this.returnUrl]);
    },err=>{this.submitted=false;this.loading=false;this.error=err.message||err;});
  }
}
