import { InsideTabs1Page } from './../insideTabs1/insideTabs1';
import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { InsideTabs2Page } from './../insideTabs2/insideTabs2';
@Component({
  selector: 'insideTabs-page',
  templateUrl: 'insideTabs.html'
})
export class InsideTabsPage {

  insideTabs1 = InsideTabs1Page;
  insideTabs2 = InsideTabs2Page;

  constructor() {

  }
}
