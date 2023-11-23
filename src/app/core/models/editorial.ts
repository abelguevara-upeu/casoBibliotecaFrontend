import { Libro } from "./libro";

export class Editorial {
  constructor(
    public id: number,
    public editorial: string,
    public libros?: Libro[]
  ) {}
}
  