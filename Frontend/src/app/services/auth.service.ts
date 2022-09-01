import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor() { }

authUser(user:any){
  let users =[];
  if (localStorage.getItem('Users')){
    users = JSON.parse(localStorage.getItem('Users'))
  }
  return users.find(p => p.userName === user.userName && p.password === user.password)
}
}
