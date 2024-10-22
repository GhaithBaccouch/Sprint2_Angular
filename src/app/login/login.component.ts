import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/User.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  user =new User();
  erreur!: number;

  constructor(private router:Router,
    private authService:AuthService) { }

  ngOnInit(): void {
  }

  onLoggedin(){
    console.log(this.user);
    let isValidUser: Boolean = this.authService.SignIn(this.user);
    if (isValidUser)
    this.router.navigate(['/']);
    else
    {Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'mot de passe ou nom d utulistaeur n existe pas!',
      footer: '<a href="login">try again</a>'
    })
    this.erreur=1;
  }
  }
}


