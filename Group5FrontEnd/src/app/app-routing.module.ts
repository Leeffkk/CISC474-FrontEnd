import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AddprojectComponent } from './pages/addproject/addproject.component';
import { MyprojectsComponent } from './pages/myprojects/myprojects.component';
import { UpdateProjectComponent } from './pages/updateproject/updateproject.component';
import { ManageprojectComponent } from './pages/manageproject/manageproject.component';


const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component: HomeComponent},
  {path:'login',component: LoginComponent},
  {path:'register',component: RegisterComponent},
  {path:'addproject',component: AddprojectComponent},
  {path:'myprojects',component: MyprojectsComponent},
  {path:'updateproject',component: UpdateProjectComponent},
  {path:'manageproject',component: ManageprojectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
