import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl:'./login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title2 = "login Works!!";

  constructor() { }

  ngOnInit() {
  }

}


// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = "hello angular2，I'm a new student!";
// }