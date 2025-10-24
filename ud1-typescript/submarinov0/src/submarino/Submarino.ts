import { Configuracion } from "../tablero/Configuracion";

class Submarino {
    private x: number;
    private y: number;

    constructor() {
        this.x = 0;
        this.y = 0;
    }

    public init(size: number): void {
        this.x = Math.floor(Math.random() * size);
        this.y = Math.floor(Math.random() * size);
    }
}

export { Submarino };