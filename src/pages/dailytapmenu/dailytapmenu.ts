import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams , Nav} from 'ionic-angular';
import { TabsPage} from '../tabs/tabs';
import {ProfilePage} from '../profile/profile';
import {AddressPage} from '../address/address';
import {PausePage} from '../pause/pause';
import {AddproductsPage} from '../addproducts/addproducts';
import {AboutusPage} from '../aboutus/aboutus';


 export interface PageInterface {
title:string;
pageName: any;
tabComponent?:any;
index?:number;
icon:string;
 }

@IonicPage()
@Component({
  selector: 'page-dailytapmenu',
  templateUrl: 'dailytapmenu.html',
})
export class DailytapmenuPage {
rootpage:any = TabsPage;


@ViewChild(Nav) nav:Nav;
pages: PageInterface[] = [
  {title: 'CALENDAR', pageName:'TabsPage' , tabComponent:'CalendarPage', index:0 , icon:'calendar'},

    {title: 'SUBSCRIPTION', pageName:'TabsPage' , tabComponent:'SubscriptionPage', index:1 , icon:'apps'},

      {title: 'WALLET', pageName:'TabsPage' , tabComponent:'WalletPage', index:2 , icon:'card'},
        {title: 'PROFILE', pageName:ProfilePage, icon:'person'},
        {title: 'ADDRESS', pageName:AddressPage , icon:'home'},
          {title: 'ADD PRODUCTS', pageName:AddproductsPage,icon:'add'},
            {title: 'VACATION',  pageName:PausePage, icon:'pause'},
            {title: 'ABOUT', pageName:AboutusPage, icon:'cart'},
            {title: 'CALL US', pageName:'',  icon:'call'},
            {title: 'LOGOUT',  pageName:'',icon:'power'},

]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DailytapmenuPage');
  }


openPage(page: PageInterface){
let params: {};
if(page.index){
  params = {tabIndex: page.index};
}
if(this.nav.getActiveChildNav() && page.index!=undefined){
  this.nav.getActiveChildNav().select(page.index);
}
else{
  this.nav.setRoot(page.pageName, params);
}
}

isActive(page: PageInterface){
  let childNav = this.nav.getActiveChildNav();
  if(childNav){
    if(childNav.getSelected() && childNav.getSelected().root==page.tabComponent){
      return 'orange';
    }
    return;
  }
if(this.nav.getActive() && this.nav.getActive().name === page.pageName){
  return 'primary';
}
}


}
