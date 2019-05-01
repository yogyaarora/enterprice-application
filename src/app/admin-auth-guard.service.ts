import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {
  fbUser:firebase.User;

  constructor(private auth:AuthService) { }

  canActivate(){
    // this.fbUser=firebase.auth().currentUser;
    // return this.user.get(this.fbUser.uid).valueChanges()
    // .pipe(map(user=>user.isAdmin));
    
    return this.auth.appUser$.pipe(map(user=>user.isAdmin)); 
  }
}
