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
        this.context.beginPath();
        const defaultColor = this.context.fillStyle;
        this.context.fillStyle = "blue";
        this.context.arc(target.x, target.y, 3, 0, Math.PI * 2, true);
        this.context.closePath();
        this.context.fill();
        this.context.fillStyle = defaultColor;
}

    setPosition(target:Position):void {
       this.target = target;
    }

    getPosition():Position {
        return this.target;
    }
});