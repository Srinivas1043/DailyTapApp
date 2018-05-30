import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams , Nav} from 'ionic-angular';
import { CalendarPage } from '../calendar/calendar';
import { SubscriptionPage } from '../subscription/subscription';
import { WalletPage } from '../wallet/wallet';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CalendarPage;
  tab2Root = SubscriptionPage;
  tab3Root = WalletPage;
  myIndex:number;

  constructor(public navCtrl: NavController, public navParams: NavParams)
  {
      this.myIndex = navParams.data.tabIndex || 0;
  }
}
