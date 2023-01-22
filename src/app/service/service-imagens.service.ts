import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, timeout } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceImagensService {

  private readonly API: string = 'https://www.superheroapi.com/api.php/5033128890082701/search/id/';

  constructor(private http: HttpClient) { }


  getAllImagens(): Observable<any>{
    return this.http.get<any>(this.API);
  }


}
