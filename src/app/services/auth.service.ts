import { Injectable } from '@angular/core';
import {User} from "../Shared/user.interface";
import { AngularFireAuth} from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth:AngularFireAuth) { }

  
  async register(email:string, password:string):Promise<User>{
    try{
      const{ user } = await this.afAuth.createUserWithEmailAndPassword(email, password);
      await this.sendVerificacionEmail();
      return user;
    }catch(error) {
      console.log('Error -> ', error);
    }
  }

  async sendVerificacionEmail(): Promise<void> {
    try{
      return (await this.afAuth.currentUser).sendEmailVerification();
    } catch (error){
      console.log('Error -> ', error);
    }
  }

  async login(email:string, password:string):Promise<User>{
    try{
      const {user} = await this.afAuth.signInWithEmailAndPassword(email, password);
      return user;
    }catch(error) {
      console.log('Error -> ', error);
    }
  }

  async logout():Promise<void>{
    try{
      await this.afAuth.signOut();
    } catch (error){
      console.log('Error ->', error);
    }
  }
}
