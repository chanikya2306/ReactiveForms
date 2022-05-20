import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loginForm:any;
  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      "firstname": new FormControl("",[Validators.required,Validators.minLength(4),Validators.pattern("^[a-zA-Z ]*$")]),
      "lastname": new FormControl("",[Validators.required,Validators.minLength(4),Validators.pattern("^[a-zA-Z ]*$")]),
      "email": new FormControl("",[Validators.required,Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      "password": new FormControl("",[Validators.required,Validators.minLength(8),Validators.pattern('(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{8,}')]),
      "repassword": new FormControl("",[Validators.required,Validators.minLength(8),Validators.pattern('(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{8,}')]),
      "phonenumber": new FormControl("",[Validators.required,Validators.maxLength(10),Validators.pattern("[6-9]\\d{9}")]),
    })
  }
  get firstname(){
    return this.loginForm.get("firstname")
  }
  get lastname(){
    return this.loginForm.get("lastname")
  }
  get email(){
    return this.loginForm.get("email")
  }
  get password(){
    return this.loginForm.get("password")
  }
  get repassword(){
    return this.loginForm.get("repassword")
  }
  get phonenumber(){
    return this.loginForm.get("phonenumber")
  }
  submitForm(){
    if(this.loginForm.get("password").value == this.loginForm.get("repassword").value){
      console.log("password conform password are matched")
      console.log(this.loginForm)
    }
   
  }

}
