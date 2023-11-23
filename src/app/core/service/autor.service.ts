import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Autor } from '../models/autor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutorService  {
  private apiUrl:string = 'http://localhost:9090/api/autores'
  constructor(private http:HttpClient) {
  }

  public getAutores():Observable<Autor[]>{
    return this.http.get<Autor[]>(`${this.apiUrl}/all`)
  }

  public getAutor(id: number): Observable<Autor> {
    return this.http.get<Autor>(`${this.apiUrl}/get/${id}`);
  }

  agregarAutor(autor: Autor): Observable<Autor> {
    return this.http.post<Autor>(`${this.apiUrl}/Autor`, autor);
  }

  actualizarAutor(id: number, autor: Autor): Observable<Autor> {
    return this.http.put<Autor>(`${this.apiUrl}/put/${id}`, autor);
  }

  eliminarAutor(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }  
  
}


