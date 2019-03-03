import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Camera,CameraOptions } from '@ionic-native/camera/ngx';
import { storage ,initializeApp } from "firebase";
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-face',
  templateUrl: './face.page.html',
  styleUrls: ['./face.page.scss'],
})
export class FacePage implements OnInit {

  constructor(public navCtrl: NavController,private camera: Camera) { 
    initializeApp(environment.firebase);
  
  }

  ngOnInit() {
  }

  upload(){

    try{
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    const PICTURE: any
    const result = await this.camera.getPicture(options).then((imageData) => {
    const image = 'data:image/jpeg;base64,${result}';
    const PICTURE = storage().ref('picture');
    PICTURE.putString(image,'data_url');
    
    }, 
    catch(e)  {
     console.error(e);
  
  }

}
  
