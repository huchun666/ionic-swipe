import { InsideTabsPage } from './../insideTabs/insideTabs';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SinglePagePage } from './../singlePage/singlePage';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  jumpTabs() {
    this.navCtrl.push(InsideTabsPage)
  }
  jumpSinglePage() {
    this.navCtrl.push(SinglePagePage)
  }

}
