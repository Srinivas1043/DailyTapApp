import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { mobiscroll,MbscCalendarOptions } from '@mobiscroll/angular';

/**
 * Generated class for the PausePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 mobiscroll.settings = {
     theme: 'ios-dark'
 };
@IonicPage()
@Component({
  selector: 'page-pause',
  templateUrl: 'pause.html',
})
export class PausePage {
  demo: Date;
   header: Date;
   nonForm: Date;
   external: Date = new Date();

   demoSettings: MbscCalendarOptions = {
       theme: 'ios-dark',
       display: 'bottom'
   };
   headerSettings: MbscCalendarOptions = {
       theme: 'ios-dark',
       display: 'bottom',
       headerText: '{value}'
   };
   nonFormSettings: MbscCalendarOptions = {
       theme: 'ios-dark',
       display: 'bottom'
   };
   externalSettings: MbscCalendarOptions = {
       theme: 'ios-dark',
       display: 'bottom',
       showOnTap: false
   };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PausePage');
  }

}
