import { Component, ViewChild, Renderer } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddproductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addproducts',
  templateUrl: 'addproducts.html',
})
export class AddproductsPage {

  accordianExpanded = false;
  @ViewChild("cc") card:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public renderer: Renderer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddproductsPage');
  }

  dropdownProducts(){
    console.log("Still i should compelter")
  }

}
