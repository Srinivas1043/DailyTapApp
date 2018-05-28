import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
})
export class OtpverificationPage {
otpr:number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.otpr = ' ';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OtpverificationPage');
  }

profilePage()
{

 console.log(this.otpr);

}
}
