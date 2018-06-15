import { FormsModule } from '@angular/forms';
import { MbscModule } from '@mobiscroll/angular';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { DailytapmenuPage} from '../pages/dailytapmenu/dailytapmenu';
import { CalendarPage } from '../pages/calendar/calendar';
import { SubscriptionPage } from '../pages/subscription/subscription';
import { WalletPage } from '../pages/wallet/wallet';
import { TabsPage } from '../pages/tabs/tabs';
import {LoginPage} from '../pages/login/login';
import {OtpverificationPage} from '../pages/otpverification/otpverification';
import {ProfilePage} from '../pages/profile/profile';
import {AddproductsPage} from '../pages/addproducts/addproducts';
import {PausePage} from '../pages/pause/pause';
import { AboutusPage } from '../pages/aboutus/aboutus';
import { HttpModule } from '@angular/http';

import { AddressPage} from '../pages/address/address';
import {CustomeraddressPage} from '../pages/customeraddress/customeraddress';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginProvider } from '../providers/login/login';
import {SignupPage} from '../pages/signup/signup';
import { SignupProvider } from '../providers/signup/signup';
import { ProductProvider } from '../providers/product/product';

@NgModule({
  declarations: [
    MyApp,
    CalendarPage,
    SubscriptionPage,
    WalletPage,
    TabsPage,
    LoginPage,
    OtpverificationPage,
    ProfilePage,
    AddressPage,
    CustomeraddressPage,
    DailytapmenuPage,
    AddproductsPage,
    AboutusPage,
    PausePage,
    SignupPage

  ],
  imports: [
    FormsModule,
    MbscModule,
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CalendarPage,
    SubscriptionPage,
    WalletPage,
    TabsPage,
    LoginPage,
    OtpverificationPage,
    ProfilePage,
    AddressPage,
    CustomeraddressPage,
    DailytapmenuPage,
    AddproductsPage,
    AboutusPage,
    PausePage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,




    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginProvider,
    SignupProvider,
    ProductProvider,
  ]
})
export class AppModule {}
