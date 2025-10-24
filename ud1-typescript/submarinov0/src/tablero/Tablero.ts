import { Submarino } from "../submarino/Submarino";
import { Configuracion } from "./Configuracion";

class Tablero {
    private mapa: number[][] | null = null;
    private submarino: Submarino;

    constructor() {
        this.submarino = new Submarino();
    }

    public init(config: Configuracion) {
        this.mapa = Array.from({length: config.size},() =>Array(config.size).fill(0)
    );
    this.submarino.init(config.size);

    console.log(this.mapa);
    }
 }

 export {Tablero};