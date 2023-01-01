import { Obstacles } from "./Obstacles";
import { Robot } from "./Robot";
import { SpeedController } from "./SpeedController";

export class World {
  robot = new Robot();
  obstacles = new Obstacles();
  conroller = new SpeedController();

  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;
  constructor() {
    this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
    this.context = this.canvas.getContext("2d");
  }

  animate() {
    this.clear();

    const distances = this.obstacles.calcDistances(this.robot.getPosition());
    const sensorDistances = this.obstacles.calcDistancesFromSensors(this.robot.getSensors());

    const speed = this.conroller.calcWheelsSpeed2(sensorDistances, this.robot.getSpeed());
    this.robot.animate(speed);
    this.obstacles.show();
    window.requestAnimationFrame(() => { this.animate() });
  }

  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  handleEvent(event:PointerEvent):void {
    this.clear();
    debugger;

   switch((event.currentTarget as Element).getAttribute("id")) {
    case "right": {
      this.robot.animate({right:160,left:50});
      break;
    }
    case "left": {
      this.robot.animate({right:50,left:160});
      break;
    }

    case "forward": {
      this.robot.animate({right:160,left:160});
      break;
    }

    case "backward": {
      this.robot.animate({right:-160,left:-160});
      break;
    }

   }


    this.obstacles.show();

  }
}