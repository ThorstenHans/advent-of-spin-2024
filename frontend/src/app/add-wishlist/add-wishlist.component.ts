import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WishlistService } from '../wishlist.service';
import { Wishlist } from '../wishlist';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-wishlist',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-wishlist.component.html',
  styleUrl: './add-wishlist.component.css'
})
export class AddWishlistComponent {
  protected name: string = "";
  protected items: string = "";

  constructor(private readonly _wishlistService: WishlistService,
    private readonly _router: Router,
  ) { }
  public onSubmit() {
    if (this.name.length < 3 || this.items.length < 3) {
      return;
    }
    var wishlist = new Wishlist(this.name, this.items.split("\n"));
    this._wishlistService.add(wishlist).subscribe(_ => {
      this.name = "";
      this.items = "";
      this._router.navigate(['/', 'all-wishlists'])
    });
  }
}
