import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-siginup',
  templateUrl: './siginup.component.html',
  styleUrls: ['./siginup.component.css']
})
export class SiginupComponent implements OnInit {
[x: string]: any;

  // uname = "";
  // acno = "";
  // pswd = "";
// register model 
  registerForm = this.fb.group({//model
    uname: [''],//array
    acno: [''],
    pswd: [''],

    //control  goes to register .html

  })
  constructor(private fb:FormBuilder,private ds: DataService ,private router:Router) { }  //dependancy injection

  ngOnInit(): void {
  }
  siginup() {
    // alert("Register")
    console.log(this.registerForm);
    
    var uname = this.registerForm.value.uname;
    var acno = this.registerForm.value.acno;
    var pswd = this.registerForm.value.pswd;

    const result = this.ds.siginup(acno, uname, pswd);
    // var userDetails = this.ds.userDetails;

    if (result) {
      alert("successfully registered")
      this.router.navigateByUrl('')
    }
    else {
      alert("something went wrong")
    }
  }
}
