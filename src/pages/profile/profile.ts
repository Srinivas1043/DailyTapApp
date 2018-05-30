import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProfilePageModule } from './profile.module';
import { AddressPage } from '../address/address';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
  providers:[ProfilePageModule]
})
export class ProfilePage {
Name:any;
Email:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public pr:ProfilePageModule) {
    this.Name = '';
    this.Email = '';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

Addresspage(){
  this.pr.profilename = this.Name;
  this.pr.profileemail = this.Email;

if(this.pr.profilename == '' || this.pr.profileemail== '')
  {
  this.ionViewDidLoad();
  }


  else{
  console.log(this.pr.profilename, this.pr.profileemail);
  this.navCtrl.push(AddressPage);
}
}
}
