import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { 

  aim = 'Your Perfect Banking Partner'
  accounts = "Enter your AcNo  here";
  acno = "";
  pswd = "";
  constructor() { }

  ngOnInit(): void { //life cycle hooks - initial process
  }
  userDetails:any = { //object of objects
    1000: { acno: 1000, username: 'arjun', password: 1000, balance: 10000 },
    1001: { acno: 1001, username: 'akhil', password: 1001, balance: 20000 },
    1002: { acno: 1002, username: 'aju', password: 1002, balance: 40000 },
    1003: { acno: 1003, username: 'babu', password: 1003, balance: 30000 },
  
  }

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

  sigin() {
    // alert('login cilcked ')
    var acno = this.acno;
    var pswd = this.pswd;

    var userDetails = this.userDetails;

    if (acno in userDetails) {
      if (pswd ==userDetails[acno]['password']) {
        alert("Login Successfully");
        
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
