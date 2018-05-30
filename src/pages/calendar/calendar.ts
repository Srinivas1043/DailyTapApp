import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { mobiscroll } from '@mobiscroll/angular';
import {AddproductsPage} from '../addproducts/addproducts';
import { PausePage} from '../pause/pause';

mobiscroll.settings = {
    theme: 'ios-dark'
};


@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html'
})
export class CalendarPage {
calendarOneWeek: Date;
calendarTwoWeek: Date;
calendarThreeWeek: Date;
  constructor(public navCtrl: NavController) {

  }

  addProducts()
  {
   this.navCtrl.push(AddproductsPage);
  }
  pauseDeliveries(){
    this.navCtrl.push(PausePage);
  }

}
