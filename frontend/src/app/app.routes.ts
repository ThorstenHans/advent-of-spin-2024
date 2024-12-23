import { Routes } from '@angular/router';
import { AllWishlistsComponent } from './all-wishlists/all-wishlists.component';
import { AddWishlistComponent } from './add-wishlist/add-wishlist.component';
import { HomeComponent } from './home/home.component';
import { NaughtyOrNiceComponent } from './naughty-or-nice/naughty-or-nice.component';
import { GiftSuggestionsComponent } from './gift-suggestions/gift-suggestions.component';

export const routes: Routes = [
    { path: "all-wishlists", component: AllWishlistsComponent },
    { path: "add-wishlist", component: AddWishlistComponent },
    { path: "naughty-or-nice", component: NaughtyOrNiceComponent },
    { path: "gift-suggestions", component: GiftSuggestionsComponent },
    { path: "**", component: HomeComponent }
];
