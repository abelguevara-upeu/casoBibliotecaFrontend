// insertar-libro.component.ts
import { Component, OnInit } from '@angular/core';

import { Autor } from 'src/app/core/models/autor';
import { Categoria } from 'src/app/core/models/categoria';
import { Editorial } from 'src/app/core/models/editorial';
import { Libro } from 'src/app/core/models/libro';

import { AutorService } from '../../../../../core/service/autor.service';
import { CategoriaService } from '../../../../../core/service/categoria.service';
import { EditorialService } from '../../../../../core/service/editorial.service';
import { LibroService } from '../../../../../core/service/libro.service';

@Component({
  selector: 'app-insertar-libro',
  templateUrl: './insertar-libro.component.html',
  styleUrls: ['./insertar-libro.component.css']
})

export class InsertarLibroComponent  implements OnInit{

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
    private autorService: AutorService,
    private categoriaService: CategoriaService,
    private editorialService: EditorialService
  ) {}

  ngOnInit(): void {
      this.getCategorias();
      this.getEditoriales();
      this.getAutores();
  }

  getAutores(){
    this.autorService.getAutores().subscribe(
      (autores) => {
        this.autores = autores;
      }
      ,
      (error) => {
        console.error('Error al obtener los autores', error);
        // Manejo de errores aquí
      }
    )
  }

  getCategorias(){
    this.categoriaService.getCategorias().subscribe(
      (categorias) => {
        this.categorias = categorias;
      },
      (error) => {
        console.error('Error al obtener las categorías:', error);
        // Manejo de errores aquí
      }
    )
  }

  getEditoriales(){
    this.editorialService.getEditoriales().subscribe(
      (editoriales) => {
        this.editoriales = editoriales;
      }
      ,
      (error) => {
        console.error('Error al obtener las editoriales:', error);
        // Manejo de errores aquí
      }
    )
  }

  agregarLibro() {
    this.libroService.agregarLibro(this.nuevoLibro).subscribe(
      (libroAgregado) => {
        console.log('Libro agregado correctamente:', libroAgregado);
        // Puedes realizar acciones adicionales después de agregar el libro
      },
      (error) => {
        console.error('Error al agregar el libro:', error);
        // Manejo de errores aquí
      }
    );
  }
}
