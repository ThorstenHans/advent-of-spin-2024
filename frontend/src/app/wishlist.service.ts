import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Wishlist } from './wishlist';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private readonly _http: HttpClient) {
  }

  public getAll(): Observable<Wishlist[]> {
    return this._http.get<Wishlist[]>("/api/wishlists");
  }

  public add(w: Wishlist): Observable<object> {
    return this._http.post("/api/wishlists", w, {
      headers: {
        "content-type": "application/json"
      }
    })
  }
}
