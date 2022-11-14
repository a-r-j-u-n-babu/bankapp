import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


 //login name display
  user = "";
 
  //deposit data
  amount = '';
  acno = '';
  pswd = '';
 
//withdraw data
  amount1 = '';
  acno1 = '';
  pswd1 = '';

  //date and time 
  systemDate: any;
 

  
  constructor(private ds: DataService, private router:Router) { 
    this.user = this.ds.currentUser
    this.systemDate = new Date();
  }

  ngOnInit(): void { //to change the when logout the back use on the site bug
    if (!localStorage.getItem("currentacno")) {
      alert("please login first");
      this.router.navigateByUrl("");
    }
  }
  deposit() {

    var amount = this.amount;
    var acno = this.acno;
    var pswd = this.pswd;
    
    const result = this.ds.deposit(amount,acno, pswd, )
    if (result) {
      alert(`${amount} is credited .. balance :${result}`);
    }
  }
  withdraw() {
    var amount = this.amount1;
    var acno = this.acno1;
    var pswd = this.pswd1;

    const result = this.ds.withdraw(amount, acno, pswd,)
    if (result) {
      alert(`${amount} is debited .. balance :${result}`);
    }
  }
  logout()
  {
    //remove  login and user name
    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentacno');

    //navigate to login page
    this.router.navigateByUrl('');
  }
  delete() {
    this.acno = JSON.parse(localStorage.getItem('currentacno')||'');
  }
  OnCancel() {
    this.acno = "";
  }

}

