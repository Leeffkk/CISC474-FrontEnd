import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AddprojectComponent } from './pages/addproject/addproject.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { MyprojectsComponent } from './pages/myprojects/myprojects.component';
import { UpdateProjectComponent } from './pages/updateproject/updateproject.component';
import { ManageprojectComponent } from './pages/manageproject/manageproject.component';
import { MyrequistsComponent } from './pages/myrequists/myrequists.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MydialogComponent } from './mydialog/mydialog.component';
import { UpdatePOPComponent } from './update-pop/update-pop.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AddprojectComponent,
    MyprojectsComponent, //DialogContentExampleDialog
    UpdateProjectComponent,
    ManageprojectComponent,
    MyrequistsComponent,
    MydialogComponent,
    UpdatePOPComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  entryComponents: [
    MydialogComponent,
    UpdatePOPComponent
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
