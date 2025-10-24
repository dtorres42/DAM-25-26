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

    public checkCoords(x: number, y: number) {
        return (this.x === x && this.y === y);
    }
    
    public mover(){
      //  const movimientos = [
      //      {-1,0},{1,0},{0,1},{0,-1}
       // ];
        try{

        }catch(e: any){

        }
    }
}

export { Submarino };