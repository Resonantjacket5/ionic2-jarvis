import {Page, NavController, NavParams} from 'ionic-framework/ionic';
import {Inject} from 'angular2/core';


@Page({
  templateUrl: 'build/pages/list/list.html'
})
export class ListPage {
  constructor(@Inject(NavController) nav, @Inject(NavParams) navParams) {
    this.nav = nav;

    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for(let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {
    this.nav.push(ListPage, {
      item: item
    })
  }
}
