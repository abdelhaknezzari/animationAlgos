import { Point, SensorDistance } from "./Obstacles";
import { Position, Robot } from "./Robot";
import {  Sides } from "./SonarSensors";
import controller1 from "./SpeedController1";
import controller2 from "./SpeedController2";
import controller3 from "./SpeedController3";
import controller4 from "./SpeedController4";
import { AlgorithmToRun } from "./World";

export interface Speed {
    right: number,
    left: number
}

export class SpeedController {
    static MaxSpeed = 700;
    static MaxDistance = 80;
    iteration = 0;

    lastDistanceToObstacles: SensorDistance[];
   
    calcWheelsSpeed(sensorObstDistances: SensorDistance[], currentSpeed: Speed, robotPosition: Position,algorithm:AlgorithmToRun): Speed {
        switch (algorithm){
             case AlgorithmToRun.avoidObstaclesTarget:  {
                return controller1.calcWheelsSpeed(sensorObstDistances,currentSpeed,robotPosition);

             }
             case AlgorithmToRun.goToTargetByPath:  {
                return controller4.calcWheelsSpeed(sensorObstDistances,currentSpeed,robotPosition);

             }
             default:{
                return controller3.calcWheelsSpeed(sensorObstDistances,currentSpeed,robotPosition);

            }
            }
    }
    wrap2Pi(ang: number): number {
        return ang > Math.PI ? (-2 * Math.PI + ang) : ang;
    }
}
