import Ploter from "./Ploter";
import { Position } from "./Robot";

export default new (class Target {
  
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;

    private target = {x:490,y:800, th:0 } as Position;

    constructor() {
        this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
        this.context = this.canvas.getContext("2d");
    }

    showTarget2():void {
            this.showTarget(this.target);
    }

    showTarget(target:Position):void {
        Ploter.point(target);
    }

    setPosition(target:Position):void {
       this.target = target;
    }

    getPosition():Position {
        return this.target;
    }
});