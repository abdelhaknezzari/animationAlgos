import { Obstacles } from "./Obstacles";
import PathGenerator from "./PathGenerator";
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
    PathGenerator.showFrontObstaclePathAvoidance(sensorDistances, this.robot.getPosition());
    // window.requestAnimationFrame(() => { this.animate() });
  }

  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  handleEvent(event: PointerEvent): void {
    this.clear();

    switch ((event.currentTarget as Element).getAttribute("id")) {
      case "right": {
        this.robot.animate({ right: 160, left: 150 });
        break;
      }
      case "left": {
        this.robot.animate({ right: 150, left: 160 });
        break;
      }

      case "forward": {
        this.robot.animate({ right: 160, left: 160 });
        break;
      }

      case "backward": {
        this.robot.animate({ right: -160, left: -160 });
        break;
      }

      case "stop": {
        this.robot.toggleStop();
        break;
      }

      case "step": {
        this.clear();
        const distances = this.obstacles.calcDistances(this.robot.getPosition());
        const sensorDistances = this.obstacles.calcDistancesFromSensors(this.robot.getSensors());
        const speed = this.conroller.calcWheelsSpeed2(sensorDistances, this.robot.getSpeed());
        this.robot.animate(speed);
        this.obstacles.show();
        PathGenerator.showFrontObstaclePathAvoidance(sensorDistances, this.robot.getPosition());
        break;
      }

      case "start": {
        this.clear();
        
        const distances = this.obstacles.calcDistances(this.robot.getPosition());
        const sensorDistances = this.obstacles.calcDistancesFromSensors(this.robot.getSensors());
        const speed = this.conroller.calcWheelsSpeed2(sensorDistances, this.robot.getSpeed());
        this.robot.animate(speed);
        this.obstacles.show();
        break;
      }

      case "x":{
        this.robot.setX( parseFloat( (event.currentTarget as unknown as { value:string}).value )  );
        break;
      }

      case "y":{
        this.robot.setY( parseFloat( (event.currentTarget as unknown as { value:string}).value )  );
        break;
      }

      case "th":{
        this.robot.setTh( parseFloat( (event.currentTarget as unknown as { value:string}).value )  );
        break;
      }

    }


    this.obstacles.show();

  }
}