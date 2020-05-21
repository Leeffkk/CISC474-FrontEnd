import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from 'src/app/services/projects.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.scss']
})
export class AddprojectComponent implements OnInit {

  projectForm: FormGroup;
  loading =false;
  submitted=false;
  returnUrl: string;
  error: string;


  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute,private router: Router,private projSev: ProjectsService) {
   }

  ngOnInit(): void {
    this.projectForm=this.formBuilder.group({
      projectname: ['',Validators.required],
      projecturl: ['',Validators.required],
      groupmember: ['',Validators.required],
      description: ['',Validators.required]
    });
  }

  submit(){
    this.submitted=true;
    if (this.projectForm.invalid){
      return;
    }
    this.loading=true;
    this.projSev.addProjects(this.projectForm.controls.projectname.value,
      this.projectForm.controls.projecturl.value,
      "{"+this.projectForm.controls.groupmember.value+"}",
      this.projectForm.controls.description.value).subscribe(response=>{
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['home']);
      }); 
    },err=>{this.submitted=false;this.loading=false;this.error=err.message||err;});
  }
}
