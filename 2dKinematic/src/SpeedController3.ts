import { RobotObstacleDistances, SensorDistance } from "./Obstacles";
import { Position } from "./Robot";
import { Sides } from "./SonarSensors";
import { Speed, SpeedController } from "./SpeedController";
import SpeedControllerIf from "./SpeedControllerIf";



export default new (class SpeedController3 implements SpeedController {

    static MaxSpeed = 700;
    static MaxDistance = 80;

    iteration = 0;
    lastDistanceToObstacles: SensorDistance[];


    calcWheelsSpeed(sensorObstDistances: SensorDistance[], currentSpeed: Speed, robotPosition: Position): Speed {
        const obstacleDist = this.getObstacleDist(sensorObstDistances);

        let calcSpeed: Speed = { left: SpeedController.MaxSpeed / 4, right: SpeedController.MaxSpeed / 4 };

        calcSpeed.left  += 0.01 * SpeedController.MaxSpeed * this.getLeftPulseObstacle(obstacleDist) + 0.01 * SpeedController.MaxSpeed * this.getLFrontPulseObstacle(obstacleDist);
        calcSpeed.right += 0.01 * SpeedController.MaxSpeed * this.getRightPulseObstacle(obstacleDist) ;

        return calcSpeed;


    }


    private getObstacleDist(sensorObstDistances: SensorDistance[]): RobotObstacleDistances {
        const frontLeft = sensorObstDistances.find(sens => sens.side === Sides.frontLeft).d;
        const frontRight = sensorObstDistances.find(sens => sens.side === Sides.frontRight).d;
        const backLeft = sensorObstDistances.find(sens => sens.side === Sides.backLeft).d;
        const backRight = sensorObstDistances.find(sens => sens.side === Sides.backRight).d;
        return { frontLeft, frontRight, backLeft, backRight };
    }

    private getRightPulseObstacle(obstacles: RobotObstacleDistances): number {
        return this.calcPulse(obstacles.frontRight) + this.calcPulse(obstacles.backRight) ;
    }

    private getLeftPulseObstacle(obstacles: RobotObstacleDistances): number {
        return this.calcPulse(obstacles.frontLeft) + this.calcPulse(obstacles.backLeft) ;
    }

    private getLFrontPulseObstacle(obstacles: RobotObstacleDistances): number {
        return this.calcPulse(obstacles.frontLeft) * this.calcPulse(obstacles.frontRight) ;
    }

    calcPulse2(dist:number): number {
        return Math.exp(-0.1 * Math.pow(((dist - SpeedController.MaxDistance) / SpeedController.MaxDistance), 2));
    }

    calcPulse3(dist:number): number {
        const th = dist < SpeedController.MaxDistance 
        ? Math.abs(dist/SpeedController.MaxDistance)
        : 1/2;
        return 0.5*(1+Math.cos(Math.PI*th));
    }

    calcPulse(dist:number): number {
        return 1/(1+Math.exp(-Math.abs( (dist- SpeedController.MaxDistance)/ SpeedController.MaxDistance )));


    
    }
});