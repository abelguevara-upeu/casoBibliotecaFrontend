import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Alquiler } from '../models/alquiler';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlquilerService {
  private apiUrl:string = 'http://localhost:9090/api/alquileres'
  constructor(private http:HttpClient) {
  }

  public getAlquileres():Observable<Alquiler[]>{
    return this.http.get<Alquiler[]>(`${this.apiUrl}/all`)
  }

  getAlquiler(id: number): Observable<Alquiler> {
    return this.http.get<Alquiler>(`${this.apiUrl}/get/${id}`);
  }

  agregarAlquiler(alquiler: Alquiler): Observable<Alquiler> {
    return this.http.post<Alquiler>(`${this.apiUrl}/Alquiler`, alquiler);
  }

  actualizarAlquiler(id: number, alquiler: Alquiler): Observable<Alquiler> {
    return this.http.put<Alquiler>(`${this.apiUrl}/put/${id}`, alquiler);
  }

  eliminarAlquiler(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }  
  
}


