import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IData } from '../Interfaces/IData';

@Injectable({
  providedIn: 'root'
})
export class DataService {

constructor(private http: HttpClient) { }
  getData(): Observable<any> {
    return this.http.get<IData>('data.json');
  }
}
