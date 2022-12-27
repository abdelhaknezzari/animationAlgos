import { Obstacles } from "./Obstacles";
import { Robot } from "./Robot";
import { SpeedController } from "./SpeedController";

export class World {
    robot= new Robot();
    obstacles= new Obstacles();
    conroller= new SpeedController();

    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    constructor(){
      this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
      this.context = this.canvas.getContext("2d");
    }

    animate() {
       this.clear();
       this.obstacles.show();
       const distances = this.obstacles.calcDistances(this.robot.getPosition());
       const speed = this.conroller.calcWheelsSpeed(distances, this.robot.getSpeed());

       this.robot.animate(speed);  
       
       window.requestAnimationFrame(() => { this.animate() });
    }

    clear(){
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}