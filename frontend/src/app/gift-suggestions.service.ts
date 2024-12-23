import { Injectable } from '@angular/core';
import { Suggestions } from './suggestion';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GiftSuggestionsService {

  constructor(private readonly _http: HttpClient) {
  }

  public suggest(name: string, age: number, likes: string): Observable<Suggestions> {
    return this._http.post<Suggestions>("/api/generate-gift-suggestions", {
      name: name,
      age: age,
      likes: likes
    });
  }

}
