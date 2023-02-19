import { Position } from "./Robot";

class Ploter {

    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;


    constructor() {
        this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
        this.context = this.canvas.getContext("2d");
    }


    point(target: Position,color="blue"): void {
        this.context.beginPath();
        const defaultColor = this.context.fillStyle;
        this.context.fillStyle = color;
        this.context.arc(target.x, target.y, 3, 0, Math.PI * 2, true);
        this.context.closePath();
        this.context.fill();
        this.context.fillStyle = defaultColor;
    }

    circle(position: Position) {
        this.context.beginPath();
        const defaultColor = this.context.fillStyle;
        this.context.fillStyle = "orange";
        this.context.arc(position.x, position.y, 3, 0, Math.PI * 2, true);
        this.context.closePath();
        this.context.fill();
        this.context.fillStyle = defaultColor;
    }

}


export default new Ploter();