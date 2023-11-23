import { Injectable } from '@angular/core';
import { Lector } from '../models/lector';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class LectorService {
  private apiUrl:string = 'http://localhost:9090/api/lector'
  constructor(private http:HttpClient) {}
public getLectores():Observable<Lector[]>{
  return this.http.get<Lector[]>(`${this.apiUrl}/all`)
}

getLector(id: number): Observable<Lector> {
  return this.http.get<Lector>(`${this.apiUrl}/get/${id}`);
}

agregarLector(lector: Lector): Observable<Lector> {
  return this.http.post<Lector>(`${this.apiUrl}/Lector`, lector);
}

actualizarLector(id: number, lector: Lector): Observable<Lector> {
  return this.http.put<Lector>(`${this.apiUrl}/put/${id}`, lector);
}

eliminarLector(id: number): Observable<void> {
  return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
} 
}