import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';
import { Libro } from 'src/app/core/models/libro';


@Injectable({
  providedIn: 'root'
})
export class LibroService {
  private mivariableURL:string = 'http://localhost:9090/api/libros'

  constructor(private http:HttpClient) {
  }

  public getLibros(): Observable<Libro[]> {
    return this.http.get<Libro[]>(`${this.mivariableURL}/all`).pipe(
      catchError((error: any) => {
        console.error('Error al obtener libros:', error);
        throw error; // Puedes lanzar el error nuevamente o manejarlo según tus necesidades.
      })
    );
  }

  getLibro(id: number): Observable<Libro> {
    return this.http.get<Libro>(`${this.mivariableURL}/get/${id}`);
  }

  agregarLibro(libro: Libro): Observable<Libro> {
    return this.http.post<Libro>(`${this.mivariableURL}/Libro`, libro);
  }

  actualizarLibro(id: number, libro: Libro): Observable<Libro> {
    return this.http.put<Libro>(`${this.mivariableURL}/put/${id}`, libro);
  }

  eliminarLibro(id: number): Observable<void> {
    return this.http.delete<void>(`${this.mivariableURL}/delete/${id}`).pipe(
      tap(() => {
        // Realizar otras acciones después de una eliminación exitosa
        console.log('Libro eliminado con éxito.');
        // Recargar la página
      }),catchError((error: any) => {
        console.error('Error al eliminar el libro:', error);
        throw error;
      })
    );
  }
}
