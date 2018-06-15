import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {OtpverificationPage} from '../otpverification/otpverification';
import { AlertController } from 'ionic-angular';
import {SignupPage} from '../signup/signup';
import {LoginProvider} from '../../providers/login/login';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email:any = '';
  pwd:any ='';
  logs:Log[];
  len_login_data:any;


  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private login: LoginProvider) {
    
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');


  }


presentAlert(){
  let alert = this.alertCtrl.create({
    title:'Invalid Login Credentials',
    subTitle: 'Please Login Again or Sign up as a New User',
    buttons:['Dismiss']
  });
  alert.present();
}

Otpverify()
{
  this.login.getLogin().subscribe((datas) => {
 this.logs = datas;
 var len = this.logs.length;
for (var i=0;i<len;i++)
{
if(this.email == this.logs[i].CustomerEmail && this.pwd == this.logs[i].CustomerPassword){
  this.navCtrl.push(OtpverificationPage);
}
else{
  this.presentAlert();
}
}
  });

//this.navCtrl.push(OtpverificationPage);


}

showLogin(){
  this.login.getLogin().subscribe((datas) => {
 this.logs = datas;
 var len = this.logs.length;
for (var i=0;i<len;i++)
{
if(this.email == this.logs[i].CustomerEmail && this.pwd == this.logs[i].CustomerPassword){
  console.log("Success Login");
}
else{
  console.log(this.email , this.pwd);
}
}
  });

}


signupredirect(){
this.navCtrl.push(SignupPage);
}




}

interface Log{
CustomerId: any,
CustomerFirstName:any,
CustomerLastName:any,
CustomerEmail:any,
CustomerContact:any,
CustomerPassword:any,
  }
