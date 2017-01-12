import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  username = "";
  password = "";

  constructor( @Inject('auth') private service) {
    // this.service = new AuthService();
  }

  ngOnInit() {
  }

  onClick() {
    
    console.log(this.service.logWithUsernameAndPassword(this.username, this.password));

  }

}