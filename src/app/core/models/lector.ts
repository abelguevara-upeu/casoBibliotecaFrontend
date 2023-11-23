import { Alquiler } from "./alquiler";

export class Lector {
  constructor(
    public id: number,
    public nombre: string,
    public correo: string,
    public alquileres?: Alquiler[]
  ) {}
}
  