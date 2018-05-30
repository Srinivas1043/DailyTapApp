import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DailytapmenuPage} from '../dailytapmenu/dailytapmenu';
import { TabsPage} from '../tabs/tabs';

/**
 * Generated class for the CustomeraddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customeraddress',
  templateUrl: 'customeraddress.html',
})
export class CustomeraddressPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomeraddressPage');
  }


gotoMain()
{
  this.navCtrl.push(DailytapmenuPage);
}
}
