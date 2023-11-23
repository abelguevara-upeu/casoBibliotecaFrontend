  import { Libro } from "./libro";

  export class Autor {
    constructor(
      public id: number,
      public autor: string,
      public libros?: Libro[]
    ) {}
  }
  