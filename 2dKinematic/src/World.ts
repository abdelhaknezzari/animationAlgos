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

    // const speed = this.conroller.calcWheelsSpeed(distances, this.robot.getSpeed());

    // this.robot.plotRobot({x:200,y:200,th:0});

    const speed = this.conroller.calcWheelsSpeed2(sensorDistances, this.robot.getSpeed());
    this.robot.animate(speed);
    this.obstacles.show();
    window.requestAnimationFrame(() => { this.animate() });
  }

  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}