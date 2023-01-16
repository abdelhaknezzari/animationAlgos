import { SensorDistance } from "./Obstacles";
import { Position } from "./Robot";
import { Sides } from "./SonarSensors";
import { Speed, SpeedController } from "./SpeedController";
import SpeedControllerIf from "./SpeedControllerIf";

export default new (class SpeedController1 implements SpeedControllerIf {

    static MaxSpeed = 700;
    static MaxDistance = 80;

    iteration = 0;
    lastDistanceToObstacles: SensorDistance[];

    calcWheelsSpeed(sensorObstDistances: SensorDistance[], currentSpeed: Speed, robotPosition: Position): Speed {
            const frontLeftDist = sensorObstDistances.find(sens => sens.side === Sides.frontLeft).d;
            const frontRightDist = sensorObstDistances.find(sens => sens.side === Sides.frontRight).d;
            const backLeftDist = sensorObstDistances.find(sens => sens.side === Sides.backLeft).d;
            const backRightDist = sensorObstDistances.find(sens => sens.side === Sides.backRight).d;
    
            let calcSpeed: Speed = { left: SpeedController.MaxSpeed, right: SpeedController.MaxSpeed };
    
    
            const coef = (1 - Math.exp(-0.04 * Math.sqrt(Math.pow(frontLeftDist - SpeedController.MaxDistance, 2) +
                Math.pow(frontRightDist - SpeedController.MaxDistance, 2) +
                Math.pow(backLeftDist - SpeedController.MaxDistance, 2) +
                Math.pow(backRightDist - SpeedController.MaxDistance, 2)) / SpeedController.MaxDistance));
    
            const speedMax = SpeedController.MaxSpeed * (1 - Math.exp(-0.8 * Math.sqrt(Math.pow(frontLeftDist - SpeedController.MaxDistance, 2) +
                Math.pow(frontRightDist - SpeedController.MaxDistance, 2) +
                Math.pow(backLeftDist - SpeedController.MaxDistance, 2) +
                Math.pow(backRightDist - SpeedController.MaxDistance, 2)) / SpeedController.MaxDistance));
    
            const angleCode = ((frontLeftDist < SpeedController.MaxDistance ? 1 : 0) << 3) |
                ((frontRightDist < SpeedController.MaxDistance ? 1 : 0) << 2) |
                ((backLeftDist < SpeedController.MaxDistance ? 1 : 0) << 1) |
                ((backRightDist < SpeedController.MaxDistance ? 1 : 0));
    
            const frontRightTurn = 1 - Math.exp(0.01 * Math.sqrt(Math.pow(frontRightDist - SpeedController.MaxDistance, 2) / SpeedController.MaxDistance));
            const frontLeftTurn = 1 - Math.exp(0.01 * Math.sqrt(Math.pow(frontLeftDist - SpeedController.MaxDistance, 2) / SpeedController.MaxDistance));
            const backRightTurn = 1 - Math.exp(0.01 * Math.sqrt(Math.pow(backRightDist - SpeedController.MaxDistance, 2) / SpeedController.MaxDistance));
            const backLeftTurn = 1 - Math.exp(0.01 * Math.sqrt(Math.pow(backLeftDist - SpeedController.MaxDistance, 2) / SpeedController.MaxDistance));
    
            let alpha = angleCode > 0 ? (frontRightTurn + backRightTurn) * 0.5 : 1;
            let beta = angleCode > 0 ? (frontLeftTurn + backLeftTurn) * 0.5 : 1;
            
            calcSpeed.left  = SpeedController.MaxSpeed * alpha;
            calcSpeed.right = SpeedController.MaxSpeed * beta;
    
            return calcSpeed;
      
    
    }

});