import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfilePage} from '../profile/profile';
import {OtpverificationPageModule } from './otpverification.module';
/**
 * Generated class for the OtpverificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-otpverification',
  templateUrl: 'otpverification.html',
  providers : [OtpverificationPageModule]
})
export class OtpverificationPage   {
otp:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public p:OtpverificationPageModule) {
  this.otp = '';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OtpverificationPage');
  }

profilePage()
{

 this.p.res = this.otp;
if(this.p.res!=''){
  this.navCtrl.push(ProfilePage);
  console.log(this.p.res);
}
else{
  this.ionViewDidLoad();
}

}
}
