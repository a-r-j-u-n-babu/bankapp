import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //login name display
  currentUser: any;

  //login acno display
  currentacno: any;

  userDetails: any = { //object of objects
    1000: { acno: 1000, username: 'arjun', password: 1000, balance: 20000, transaction: [] },
    1001: { acno: 1001, username: 'akhil', password: 1001, balance: 20000, transaction: [] },
    1002: { acno: 1002, username: 'aju', password: 1002, balance: 30000, transaction: [] },
    1003: { acno: 1003, username: 'babu', password: 1003, balance: 430000, transaction: [] },

  }
  constructor() { 
    this.getDetails() //function call
  }

  //saveDetails() -to store data in the localstorage

  saveDetails() {
    if (this.userDetails) {
      localStorage.setItem('dataBase', JSON.stringify(this.userDetails))
    }
    if (this.currentacno) {
      localStorage.setItem('currentacno', JSON.stringify(this.currentacno))
    }
    if (this.currentUser) {
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser))
    }
  }

  //getDetsils( ) -to get the data from the local storage 

  getDetails() {
    if (localStorage.getItem('dataBase')) {
      this.userDetails = JSON.parse(localStorage.getItem('dataBase') || '');
  }
}
  getCurrentUser() {
    if (localStorage.getItem('currentUser')) {
      this.userDetails = JSON.parse(localStorage.getItem('currentUser') || '');
  }
  }
  getCurrentAcno() {
    if (localStorage.getItem('currentacno')) {
      this.userDetails = JSON.parse(localStorage.getItem('currentacno') || '');
    }
  }



  siginup(acno: any, username: any, password: any) {
    let userDetails = this.userDetails;
    if (acno in userDetails) {
      return false;
    }
    else {
      userDetails[acno] = {
        acno,
        username,
        password,
        balance: 0,
        transaction: [],
        
      
       
      }
      console.log(userDetails);
      this.saveDetails(); //functuion called
      return true;
    }
  
  }

  login(acno: any, pswd: any) {
    let userDetails = this.userDetails;
    if (acno in userDetails) {
      if (pswd == userDetails[acno]["password"]) {
        this.currentUser=this.userDetails[acno]["username"]
        // alert('login successfull')
        this.currentacno = acno;
        this.saveDetails(); //functuion call
        return true;

      }
      else {
        alert("incorrect Password")
        return false;
      }
    }
    else {
      alert('invaild user')
      return false;
    }
    
  }
  deposit(amt: any, acno: any, pswd: any) {
    var userDetails = this.userDetails;
    var amount = parseInt(amt); //to add amound to bal
    if (acno in userDetails) {
      if (pswd == userDetails[acno]['password']) {
        userDetails[acno]["balance"] += amount;
        userDetails[acno]["transaction"].push({
          type: 'Credit',
          amount
        })
        console.log(userDetails);
        this.saveDetails(); //functuion call
        return userDetails[acno]["balance"];
      }
      else {
        alert('Incorrct password')
        return false;
      }
    }
    else {
      alert('inavaild user')
      return false;
    }
  }
  withdraw(amt: any, acno: any, pswd: any) {
    var userDetails = this.userDetails;
    var amount = parseInt(amt); //to add amount to bal
    if (acno in userDetails) {
      if (pswd == userDetails[acno]['password']) {

        if (userDetails[acno]["balance"] > amount) {
          userDetails[acno]["balance"] -= amount;
        
          userDetails[acno]["transaction"].push({
            type: 'Debit',
            amount
          })
          console.log(userDetails);
          this.saveDetails(); //functuion call
          return userDetails[acno]['balance'];
        }
        else {
          alert('Incorrcet password');
          return false;
        }
      }
    
    }
    else {
      alert('invaild user')
      return false;
    }
  }
  getTransaction(acno:any) {
   return this.userDetails[acno]['transaction']
 }

}