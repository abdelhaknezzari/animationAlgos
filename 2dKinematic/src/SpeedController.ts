import { Point, SensorDistance } from "./Obstacles";
import { Sensor, Sides } from "./SonarSensors";

export interface Speed {
    right: number,
    left: number
}

export class SpeedController {
    static MaxSpeed = 120;
    static MaxDistance = 10;
    calcWheelsSpeed(obstacleDistances: Array<Point>, currentSpeed: Speed): Speed {
        if (obstacleDistances.some(point => point.d < 10)) {
            return {
                right: currentSpeed.right * (-1),
                left: currentSpeed.left * (-1),
            }

        }
        return currentSpeed;
    }


    calcWheelsSpeed2(sensorObstDistances: SensorDistance[], currentSpeed: Speed): Speed {


        const frontLeftDist = sensorObstDistances.find(sens => sens.side === Sides.frontLeft).d;
        const frontRightDist = sensorObstDistances.find(sens => sens.side === Sides.frontRight).d;
        const backLeftDist = sensorObstDistances.find(sens => sens.side === Sides.backLeft).d;
        const backRightDist = sensorObstDistances.find(sens => sens.side === Sides.backRight).d;

        let calcSpeed: Speed = { left: SpeedController.MaxSpeed, right: SpeedController.MaxSpeed };


        const speedMax = SpeedController.MaxSpeed * (1 - Math.exp(-0.3 * Math.sqrt(Math.pow(frontLeftDist - SpeedController.MaxDistance, 2) +
            Math.pow(frontRightDist - SpeedController.MaxDistance, 2) +
            Math.pow(backLeftDist - SpeedController.MaxDistance, 2) +
            Math.pow(backRightDist - SpeedController.MaxDistance, 2)) / SpeedController.MaxDistance));

        // const steeringAngle = frontLeftDist < SpeedController.MaxSpeed &&

        debugger;

        const angleCode =   (  ( frontLeftDist < SpeedController.MaxDistance ? 1 : 0 ) << 3 ) |
            ( (frontRightDist < SpeedController.MaxDistance ? 1 : 0) << 2) |
            ( (backLeftDist < SpeedController.MaxDistance ? 1 : 0) << 1) |
            ((backRightDist < SpeedController.MaxDistance ? 1 : 0));



        let turnAngle = 0;
        switch (angleCode) {

            case (8):
            case (4):
                turnAngle = 0.5;
                break;

            case (6):
                case (9):

            turnAngle = 1/4.0;
            break;

            case (3):
                turnAngle = 0;
                break;
            default:
                turnAngle = 1/4.0;
                break;
        }

        calcSpeed.right = speedMax * Math.cos(Math.PI * turnAngle);
        calcSpeed.left = speedMax * Math.sin(Math.PI * turnAngle);

        return calcSpeed;
    }
}