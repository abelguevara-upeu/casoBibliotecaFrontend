import { Alquiler } from './alquiler';
import { Autor } from './autor';
import { Categoria } from './categoria';
import { Editorial } from './editorial';

export class Libro {
  constructor(
    public id: number,
    public titulo: string,
    public fecha_lanzamiento: string,
    public autorEntity: Autor,
    public categoriaEntity: Categoria,
    public editorialEntity: Editorial,
    public idioma: string,
    public paginas: string,
    public descripcion: string,
    public portada: string,
    public alquileres?: Alquiler[]
  ) {}
}

