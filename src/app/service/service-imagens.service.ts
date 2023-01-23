import { Galeria } from 'src/app/interface/Galeria.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceImagensService {
  private readonly API: string =
    'https://www.superheroapi.com/api.php/5033128890082701/search/id/';

  constructor(private http: HttpClient) {}

  getAllImagens(): Observable<Galeria[]> {
    return this.http.get<Galeria[]>(this.API);
  }
}
