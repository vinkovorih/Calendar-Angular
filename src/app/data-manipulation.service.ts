import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataManipulationService {

  constructor(private http: HttpClient) { }

  getCountries(): Observable<any[]>{
    return this.http.get<any[]>('/api/getCountries');
  }
  applicate(application: any): Observable<any>{
    return this.http.post('/api/application',application);
  }

  getRoster():Observable<any>{
    return this.http.get('/api/roster');
  }
}
