import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'equipe';
  sr="assets/bl.png";
  constructor(public authService:AuthService,
    private router:Router){}
  ngOnInit () {
    let isloggedin
    let loggedUser
    isloggedin= localStorage.getItem('isloggedIn');
    loggedUser= localStorage.getItem('loggedUser');
    if (isloggedin!="true" || !loggedUser)
    this.router.navigate(['/login']);
    else
    this.authService.setLoggedUserFromLocalStorage(loggedUser);
    }
    onLogout()
    {
      this.authService.logout();
    }
    
}
