import { Component, OnInit } from '@angular/core';
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
 

  
  constructor(private ds: DataService) { 
    this.user=this.ds.currentUser
  }

  ngOnInit(): void {
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
}
