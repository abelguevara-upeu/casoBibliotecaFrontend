import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Autor } from 'src/app/core/models/autor';
import { Categoria } from 'src/app/core/models/categoria';
import { Editorial } from 'src/app/core/models/editorial';
import { Libro } from 'src/app/core/models/libro';
import { LibroService } from '../../../../../core/service/libro.service';


@Component({
  selector: 'app-lista-libro',
  templateUrl: './lista-libro.component.html',
  styleUrls: ['./lista-libro.component.css']
})

export class ListaLibroComponent implements OnInit {
  libros: Libro[] = [];
  nuevoLibro: Libro = {
    id: 0,
    titulo: '',
    fecha_lanzamiento: '',
    autorEntity: { id: 0, autor: '' },
    categoriaEntity: { id: 0, categoria: '' },
    editorialEntity: { id: 0, editorial: '' },
    idioma: '',
    paginas: '',
    descripcion: '',
    portada: '',
  };

  autores: Autor[] = [];
  categorias: Categoria[] = [];
  editoriales: Editorial[] = [];

  constructor(
    private libroService: LibroService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getLibros();
  }

  //gets
  getLibros(): void {
    this.libroService.getLibros().subscribe(
      (libros: Libro[]) =>  {
        console.log(libros);
        this.libros = libros;
      }
    );
  }

  eliminarLibro(libroId: number): void {
    if (confirm('¿Estás seguro de que quieres eliminar este libro?')) {
      this.libroService.eliminarLibro(libroId).subscribe(
        () => {
          this.getLibros();
          //window.location.reload();//no funciona
          this.router.navigate(['/home/libros/gestionar/listarLibro'], { replaceUrl: true });
      },
        (error) => {
          console.error('Error al eliminar el libro:', error);

          // Imprimir el cuerpo de la respuesta si está disponible
          if (error instanceof HttpErrorResponse && error.error) {
            console.error('Detalles del error:', error.error);
          }
        }
      );
    }
  }

  //funciones
  seleccionarAccion(event: any, libro: Libro): void {
    const accionSeleccionada = event.target.value;

    switch (accionSeleccionada) {
      case 'editar':
        break;
      case 'eliminar':
        this.eliminarLibro(libro.id);
        break;
      default:
        break;
    }
  }

}
