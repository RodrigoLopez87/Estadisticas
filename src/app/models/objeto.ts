import { Movement } from "./movement";

export interface Objeto {
  id: number;
  description: string;
  movimientos: Movement[];
}