import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NaughtyOrNiceScore } from './naughtyornicescore';

@Injectable({
  providedIn: 'root'
})
export class NaughtyOrNiceService {

  constructor(private readonly _http: HttpClient) { }

  public getScore(name: string): Observable<NaughtyOrNiceScore> {
    return this._http.get<NaughtyOrNiceScore>(`/api/naughty-or-nice/${name}`);
  }

}
