import { Obstacles } from "./Obstacles";
import PathGenerator from "./PathGenerator";
import { Robot } from "./Robot";
import { SpeedController } from "./SpeedController";
import target from "./Target";

export enum AlgorithmToRun {
  goToTarget = "goToTarget",
  avoidObstaclesTarget = "avoidObstaclesTarget",
  goToTargetByPath = "goToTargetByPath"
}

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
    this.moveOneStep();
    window.requestAnimationFrame(() => { this.animate() });
  }

  private moveOneStep() {
    this.clear();
    const sensorDistances = this.obstacles.calcDistancesFromSensors(this.robot.getSensors());
    const speed = this.conroller.calcWheelsSpeed(sensorDistances, this.robot.getSpeed(), this.robot.getPosition(), this.getAlogorithm());
    this.robot.animate(speed);
    this.obstacles.show();
    PathGenerator.showFrontObstaclePathAvoidance(sensorDistances, this.robot.getPosition());
    target.showTarget(target.getPosition());
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
        this.robot.continue();
        this.moveOneStep();
        this.robot.freeze();
         break;
      }

      case "start": {
        this.clear();
        
        const distances = this.obstacles.calcDistances(this.robot.getPosition());
        const sensorDistances = this.obstacles.calcDistancesFromSensors(this.robot.getSensors());
        const speed = this.conroller.calcWheelsSpeed(sensorDistances, this.robot.getSpeed(),this.robot.getPosition(),this.getAlogorithm());
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

      case AlgorithmToRun.avoidObstaclesTarget.toString():{
        this.checkRadioButton(AlgorithmToRun.avoidObstaclesTarget.toString());
        break;
      }

      case AlgorithmToRun.goToTarget.toString():{
        this.checkRadioButton(AlgorithmToRun.goToTarget.toString());
        break;
      }

      case AlgorithmToRun.goToTargetByPath.toString():{
        this.checkRadioButton(AlgorithmToRun.goToTargetByPath.toString());
        break;
      }

    }
    this.obstacles.show();
  }

  private checkRadioButton(radioButton:string) {
    Object.keys(AlgorithmToRun)
    .forEach(algo => { (document.getElementById(algo) as unknown as { checked: boolean; }).checked = false;});
    (document.getElementById(radioButton) as unknown as { checked: boolean; }).checked = true;
  }

  getAlogorithm() : AlgorithmToRun{
    if((document.getElementById(AlgorithmToRun.goToTarget.toString()) as unknown as {checked:boolean}).checked){
      return AlgorithmToRun.goToTarget;
    }

    if((document.getElementById(AlgorithmToRun.goToTargetByPath.toString()) as unknown as {checked:boolean}).checked){
      return AlgorithmToRun.goToTargetByPath;
    }

    return AlgorithmToRun.avoidObstaclesTarget;
  }
}