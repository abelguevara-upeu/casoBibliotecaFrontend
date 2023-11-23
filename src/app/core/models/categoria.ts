import { Libro } from "./libro";

export class Categoria {
  constructor(
    public id: number,
    public categoria: string,
    public libros?: Libro[]
  ) {}
}