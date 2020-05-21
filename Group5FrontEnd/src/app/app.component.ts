import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ExampleUI';
  get loggedIn():boolean{
    return this.authSvc.loggedIn;
  }
  get Isadmin():boolean{
    return this.authSvc.Admin;
  }
  constructor(public authSvc:AuthService) {
    authSvc.authorize();
    authSvc.IsAdmin();
  }

  signout(){
    this.authSvc.logout();
    return false;
  }
}
