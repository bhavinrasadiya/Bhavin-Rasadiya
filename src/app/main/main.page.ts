import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
  loginRoute()
  {
    this.navCtrl.navigateForward("login")
  }

signup()
{
  this.navCtrl.navigateForward("home")
}
login(){
  this.navCtrl.navigateForward("login")

}
}
