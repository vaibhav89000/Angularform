import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild('f')  signupForm: NgForm;
  genders = ['male','female'];
  submitted = false;
  user: User = {
    firstname: '',
    lastname: '',
    gender: '',
    collegename: '',
    email: '',
    password: '',
    confirmpassword: ''
  } 

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.signupForm);
    this.user.firstname = this.signupForm.value.firstName;
    this.user.lastname = this.signupForm.value.lastName;
    this.user.gender = this.signupForm.value.gender;
    this.user.collegename = this.signupForm.value.collegeName;
    this.user.email = this.signupForm.value.email;
    this.submitted = true;
    const newUser = new User(
      this.signupForm.value.firstName,
      this.signupForm.value.lastName,
      this.signupForm.value.gender,
      this.signupForm.value.collegeName,
      this.signupForm.value.email,
      this.signupForm.value.password,
      this.signupForm.value.confirmPassword
      );
    this.userService.adduser(newUser);
    this.signupForm.reset();
  }

  onget(){
      const users=this.userService.getuser();
      console.log(users);
  }

}
