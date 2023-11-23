import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Editorial } from '../models/editorial';

@Injectable({
  providedIn: 'root'
})
export class EditorialService {
  private apiUrl:string = 'http://localhost:9090/api/editoriales'
  constructor(private http:HttpClient) {
  }

  public getEditoriales():Observable<Editorial[]>{
    return this.http.get<Editorial[]>(`${this.apiUrl}/all`)
  }

  getEditorial(id: number): Observable<Editorial> {
    return this.http.get<Editorial>(`${this.apiUrl}/get/${id}`);
  }

  agregarEditorial(editorial: Editorial): Observable<Editorial> {
    return this.http.post<Editorial>(`${this.apiUrl}/Editorial`, editorial);
  }

  actualizarEditorial(id: number, libro: Editorial): Observable<Editorial> {
    return this.http.put<Editorial>(`${this.apiUrl}/put/${id}`, libro);
  }

  eliminarEditorial(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }  
  
}