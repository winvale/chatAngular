import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afauth: AngularFireAuth) { 
  }
  async registro(emai:string,password:string){
    try{
      return await this.afauth.createUserWithEmailAndPassword(emai,password);
    }catch(err){
      console.log("Error lg",err);
      return null;
    }
  }

  async login(emai:string,password:string){
    try{
      return await this.afauth.signInWithEmailAndPassword(emai,password);
    }catch(err){
      console.log("Error lg",err);
      return null;
    }
  }

  async loginWithGoogle(emai:string,password:string){
    try{
      return await this.afauth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }catch(err){
      console.log("Error lg",err);
      return null;
    }
  }
  getuserLogged(){
    return this.afauth.authState;
  }
  logout(){
    this.afauth.signOut();
  }

  
}
