import { InsideTabs1Page } from './../pages/insideTabs1/insideTabs1';
import { InsideTabs2Page } from './../pages/insideTabs2/insideTabs2';
import { NgModule, ErrorHandler } from '@angular/core';
import { InsideTabsPage } from './../pages/insideTabs/insideTabs';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SinglePagePage } from './../pages/singlePage/singlePage';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    InsideTabs1Page,
    InsideTabs2Page,
    InsideTabsPage,
    SinglePagePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '返回',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      swipeBackEnabled: true,
      tabsHideOnSubPages: true,
      pageTransition: 'android-transition'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    InsideTabs1Page,
    InsideTabs2Page,
    InsideTabsPage,
    SinglePagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
