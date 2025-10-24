import { Submarino } from "./submarino/Submarino";
import { Tablero } from "./tablero/Tablero";
import { Configuracion } from "./tablero/Configuracion";

const submarino : Submarino = new Submarino();
const tablero = new Tablero();
tablero.init({size: 10, trail: 3});

console.log("Submarino initialized.");
