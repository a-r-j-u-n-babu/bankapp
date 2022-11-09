import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [x: string]: any; 

  aim = 'Your Perfect Banking Partner'
  accounts = "Enter your AcNo  here";
  acno = "";
  pswd = "";
  constructor(private router:Router,private ds:DataService) { } //1st execution
  //dependancy injection

  ngOnInit(): void { //life cycle hooks - initial process
  }
  // userDetails:any = { //object of objects
  //   1000: { acno: 1000, username: 'arjun', password: 1000, balance: 10000 },
  //   1001: { acno: 1001, username: 'akhil', password: 1001, balance: 20000 },
  //   1002: { acno: 1002, username: 'aju', password: 1002, balance: 40000 },
  //   1003: { acno: 1003, username: 'babu', password: 1003, balance: 30000 },
  
  // }

  acnoChange(event: any) {
    
    console.log(event);
    console.log(event.target.value);
    this.acno = event.target.value;
    
  }
  passwordChange(event: any) {
    console.log(event);
    console.log(event.target.value);
    this.pswd = event.target.value;

  }
  login() {
    var acno = this.acno;
    var pswd = this.pswd;
    const result = this.ds.login(acno, pswd);
    if (result) {
      alert("login successfully");
      this.router.navigateByUrl("dashboard");
    }
  }

  sigin() {
    // alert('login cilcked ')
    var acno = this.acno;
    var pswd = this.pswd;

    var userDetails = this['userDetails'];

    if (acno in userDetails) {
      if (pswd ==userDetails[acno]['password']) {
        alert("Login Successfully");
        this.router.navigateByUrl("dashboard")
      }
      else {
        alert("Incorrect Password")
      }
    }
    else {
      alert("User Does Not Exits");
      
    }
  }
}
// sigin(a:any,p:any) {
//   // alert('login cilcked ')
//   var acno = a.value;
//   var pswd = p.value;

//   var userDetails = this.userDetails;

//   if (acno in userDetails) {
//     if (pswd == userDetails[acno]['password']) {
//       alert("Login Successfully");

//     }
//     else {
//       alert("Incorrect Password")
//     }
//   }
//   else {
//     alert("User Does Not Exits");

//   }
// }
// }
