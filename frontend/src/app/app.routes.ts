import { Routes } from '@angular/router';
import { AllWishlistsComponent } from './all-wishlists/all-wishlists.component';
import { AddWishlistComponent } from './add-wishlist/add-wishlist.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: "all-wishlists", component: AllWishlistsComponent },
    { path: "add-wishlist", component: AddWishlistComponent },
    { path: "**", component: HomeComponent }
];
