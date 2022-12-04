import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-siginup',
  templateUrl: './siginup.component.html',
  styleUrls: ['./siginup.component.css']
})
export class SiginupComponent implements OnInit {
[x: string]: any;

  // uname = ""; //properties
  // acno = "";
  // pswd = "";
// register model 
  registerForm = this.fb.group({//model
    username: ['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],//array
    acno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]], //(*)regural expression

    //control  goes to register .html

  })
  constructor(private fb:FormBuilder,private ds: DataService ,private router:Router) { }  //dependancy injection

  ngOnInit(): void {
  }
  siginup() {
    // alert("Register")
    console.log(this.registerForm);
    if (this.registerForm.valid) { //to check the  is vaild
      
    
    
    var username = this.registerForm.value.username;
    var acno = this.registerForm.value.acno;
    var password = this.registerForm.value.password;

       this.ds.siginup(username, acno, password)
        .subscribe((result:any) => {
          alert(result.message);
          this.ds.navigateByUrl('')
        },
          result => {
            alert(result.errors.message);
            this.router.navigateByUrl('siginup')
          }
        
      )
    // var userDetails = this.ds.userDetails;

//     if (result) {
//       alert("successfully registered")
//       this.router.navigateByUrl('')
//     }
//     else {
//       alert("something went wrong")
//     }
//     }
    // else {
    //   console.log(this.registerForm.get('uname')?.errors);
     
    }
  }
}
