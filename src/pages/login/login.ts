import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {OtpverificationPage} from '../otpverification/otpverification';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertController } from 'ionic-angular';




@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  contact:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {

      this.contact = '';
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


presentAlert(){
  let alert = this.alertCtrl.create({
    title:'Invalid Number',
    subTitle: 'Number does is not valid. Please check',
    buttons:['Dismiss']
  });
  alert.present();
}

Otpverify()
{
  let contact1:any;
  contact1 = this.contact;

  if(contact1.toString().length==10){
  this.navCtrl.push(OtpverificationPage);
  console.log(contact1);
}
else{
  this.presentAlert();
}
}


}
