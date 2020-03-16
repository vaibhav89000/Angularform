import { User } from './user.model';
import {  Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable()
export class UserService{
usersChanged = new Subject<User[]>();
private  users: User[] =[];
constructor(){}


adduser(user: User){
  this.users.push(user);
  console.log('hello');
  this.usersChanged.next(this.users.slice());
}

getuser(){
    return this.users.slice();
  }

  check(email: string,password: string)
  { let i;
    let flag=0;
    console.log(email);
    console.log(password);
    // if(this.users.length >0){

    // }
    for (i = 0; i <this.users.length; i++) {
        if(email === this.users[i]['email'] && password === this.users[i]['password'])
        {
            console.log("matched");
            flag=1;
        }
      }
      if(flag==1){
          return true;
      }
      else{
          return false;
      }
  }


  
}