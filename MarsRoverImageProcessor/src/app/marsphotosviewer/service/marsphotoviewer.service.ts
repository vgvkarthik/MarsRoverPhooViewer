import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IImageDetails } from '../models/IImageDetails';

@Injectable({
  providedIn: 'root'
})
export class MarsphotoviewerService {  
  private _url:string;
  constructor(private http: HttpClient) { }
  getPhotos(date: string): Observable<IImageDetails>
  {
    this._url="http://localhost:5000/api/MarsRoverImage/GetImage?date="+date;
    return this.http.get<IImageDetails>(this._url);
  }

}
