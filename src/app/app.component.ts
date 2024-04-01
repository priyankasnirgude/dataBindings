import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dataBindings';
  skills : Array<string> = ['HTML5', "CSS3", "js", "TS", "Angular"];

  stdArr = [
    {
      fname : "Jhon",
      lname : "Doe",
      email : "jhon@gmail.com",
      contact : 1234567890
    },
    {
      fname : "May",
      lname : "Doe",
      email : "jd@gmail.com",
      contact : 1234567890
    },
    {
      fname : "June",
      lname : "Doe",
      email : "je@gmail.com",
      contact : 1234567890
    },
    {
      fname : "July",
      lname : "Doe",
      email : "jt@gmail.com",
      contact : 1234567890
    },
  ]
}
