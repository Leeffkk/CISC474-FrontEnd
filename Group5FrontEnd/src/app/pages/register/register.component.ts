import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading =false;
  submitted=false;
  returnUrl: string;
  error: string;

  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute,private router: Router,private authSvc:AuthService) {
   }

  ngOnInit(): void {
    this.registerForm=this.formBuilder.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
    });
  }

  regist(){
    this.submitted=true;
    if (this.registerForm.invalid){
      return;
    }
    this.loading=true;
    this.authSvc.regist(this.registerForm.controls.username.value,this.registerForm.controls.password.value).subscribe(
      err=>{this.submitted=false;this.loading=false;this.error=err.message||err;});
  }
}
