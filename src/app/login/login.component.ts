import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name = 'marcin'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  constructor(
    private router: Router,
    private hardcodedAthenticationServeice: HardcodedAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin() {
    // console.log(this.name)
    // console.log(this.password)
    if(this.hardcodedAthenticationServeice.authenticate(this.name, this.password)) {
      //redirect to welcome page, gives this.name as parameter
      this.router.navigate(['welcome', this.name])
      this.invalidLogin = false
    }else{
      this.invalidLogin = true
    }
  }

}
