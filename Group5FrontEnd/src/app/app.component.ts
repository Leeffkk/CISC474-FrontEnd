import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Group5';
  get loggedIn():boolean{
    return false;
    //return this.authSvc.loggedIn;
  }
  /*constructor(public authSvc:AuthService) {
    authSvc.authorize();
  }

*/
  signout(){
    //this.authSvc.logout();
    return false;
  }
}

