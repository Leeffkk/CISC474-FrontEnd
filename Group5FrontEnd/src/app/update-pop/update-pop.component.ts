import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from 'src/app/services/projects.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
export interface data {
  data : any
}

@Component({
  selector: 'app-update-pop',
  templateUrl: './update-pop.component.html',
  styleUrls: ['./update-pop.component.scss']
})
export class UpdatePOPComponent implements OnInit {

  submitted=false;
  loading =false;
  error: string;
  index: string;
  updateForm: FormGroup;
  item: any[] = [ ];
  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute,private router: Router,private projSev: ProjectsService, @Inject(MAT_DIALOG_DATA) public course : data ) {
    //console.log(course.data[0]._id);
    this.item = course.data;
    //this.item = []
   }

  ngOnInit(): void {
    this.updateForm=this.formBuilder.group({
      projectname: ['',Validators.required],
      projecturl: ['',Validators.required],
      groupmember: ['',Validators.required],
      description: ['',Validators.required]
    });
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
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['home']);
      }); 
    },err=>{this.submitted=false;this.loading=false;this.error=err.message||err;});
  }

}
