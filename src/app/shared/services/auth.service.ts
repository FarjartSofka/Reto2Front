import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private auth: AngularFireAuth) { }
  
  async register(email: string, password: string){
    try{
      return await  this.auth.createUserWithEmailAndPassword(email, password);
    } catch (error){
      console.log("error en Registro: ", error);
      return null;
    }
  }

  async login(email: string, password: string){
   try{
     return await  this.auth.signInWithEmailAndPassword(email, password);
   } catch (error){
     console.log("error en login: ", error);
     return null;
   }
  }


  async loginGoogle(email: string, password: string){
    try{
      return await  this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    } catch (error){
      console.log("error en login con google: ", error);
      return
    }
  }

}

