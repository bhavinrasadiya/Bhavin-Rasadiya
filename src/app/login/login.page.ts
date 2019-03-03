import { Component, OnInit } from '@angular/core';
import{ AngularFireAuth }from '@angular/fire/auth';
import {auth}from 'firebase/app';
import { NavController } from '@ionic/angular'; 


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username:string=""
  password:string=""

  constructor(public afAuth:AngularFireAuth,public navCtrl: NavController) { }

  ngOnInit() {
  }
  signupRoute()
  {
    this.navCtrl.navigateForward("home")
  }

  async login()
  {
    const{username,password} =this
    try{
  const res =await this.afAuth.auth.signInAndRetrieveDataWithEmailAndPassword(username,password)
  alert("Login Successful")
  this.navCtrl.navigateForward("face")
  

    }
    catch(err)
    {
        console.dir(err)
        if(err.code==="auth/user-not-found")
        {
          alert("User is Not Found")
        }
    }
  }
}
