  // Title: Exercise 6.2 - Output Properties
  // Author: Professor Krasso
  // Date: 27 Nov 2022
  // Modified By: Kayla McDanel
  // Description: In-N-Out Books App
  // Code Attribution: Code and instruction provided by Professor Krasso's videos and assignment docs.

import { Component, OnInit } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  //form field within component
  items: Array<IWishlistItem> = [];

  constructor() { }

  ngOnInit(): void {
  }

  //function takes in item of IWishlistItem type & adds it to the items array
  updateItemsHandler(item: IWishlistItem) {
    this.items.push(item);
  }

}
