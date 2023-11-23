import { Lector } from "./lector";
import { Libro } from "./libro";

export class Alquiler {
  constructor(
    public id: number,
    public fechaSalida: string,
    public fechaEntrada: string,
    public lector: Lector,
    public libro: Libro
  ) {}
}
  