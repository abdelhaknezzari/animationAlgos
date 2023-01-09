import { Position } from "./Robot";

export default new (class Target {
  
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;

    private target = {x:490,y:490, th:0 } as Position;

    constructor() {
        this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
        this.context = this.canvas.getContext("2d");
    }

    showTarget() {
            this.context.beginPath();
            const defaultColor = this.context.fillStyle;
            this.context.fillStyle = "blue";
            this.context.arc(this.target.x, this.target.y, 3, 0, Math.PI * 2, true);
            this.context.closePath();
            this.context.fill();
            this.context.fillStyle = defaultColor;
    }

    getPosition():Position {
        return this.target;
    }
});