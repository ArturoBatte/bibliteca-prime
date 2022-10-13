import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Libro } from '../interfaces/libro.interface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LibrosService {

url: string = 'http://localhost:3000/libro';

  constructor(
    private http: HttpClient
  ) { }

  get(): Observable<Libro[]>{
    return this.http.get<Libro[]>(this.url);
  }
  post(libro: Libro): Observable<any>{
    return this.http.put(this.url, libro, { responseType: 'text'});
  }

  put(libro: Libro): Observable<any>{
    return this.http.put(`${this.url}/${libro.id}`, libro, { responseType: 'text'});
  }
  delete(libro: Libro): Observable<any>{
    return this.http.delete(`${this.url}/${libro.id}`, { responseType: 'text' });
  }

}