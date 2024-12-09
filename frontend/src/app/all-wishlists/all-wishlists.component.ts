import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../wishlist.service';
import { Wishlist } from '../wishlist';

@Component({
  selector: 'app-all-wishlists',
  imports: [],
  templateUrl: './all-wishlists.component.html',
  styleUrl: './all-wishlists.component.css'
})
export class AllWishlistsComponent implements OnInit {

  constructor(private readonly _wishlistService: WishlistService) { }

  protected wishlists: Wishlist[] = [];
  ngOnInit(): void {
    this._wishlistService.getAll().subscribe(all => {
      this.wishlists = all;
    });
  }

}
