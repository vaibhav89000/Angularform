import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  @ViewChild('f') signinForm: NgForm;
  constructor(private userservice: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.signinForm);
    const validuser = this.userservice.check(this.signinForm.value.email,this.signinForm.value.password);
    console.log(validuser);
    if(validuser){
      this.router.navigate(['home/signup']);
    }
    this.signinForm.reset();
  }

}
