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
FirstName:any;
LastName:any;
Password:any;
Email:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public pr:ProfilePageModule) {
    this.LastName = '';
    this.Email = '';
    this.FirstName = '';
    this.Password = '';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

Addresspage(){
  this.pr.profilefirstname = this.FirstName;
  this.pr.profileemail = this.Email;

if(this.pr.profilefirstname == '' || this.pr.profileemail== '')
  {
  this.ionViewDidLoad();
  }


  else{
  console.log(this.pr.profilefirstname, this.pr.profileemail);
  this.navCtrl.push(AddressPage);
}
}
}
