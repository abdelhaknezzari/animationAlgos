import { Point, SensorDistance } from "./Obstacles";
import { Sensor, Sides } from "./SonarSensors";

export interface Speed {
    right: number,
    left: number
}

export class SpeedController {
    static MaxSpeed = 0;
    static MaxDistance = 30.1;
    calcWheelsSpeed(obstacleDistances: Array<Point>, currentSpeed: Speed):Speed {
        if (obstacleDistances.some(point => point.d < 10)) {
            return {
                right: currentSpeed.right * (-1),
                left: currentSpeed.left * (-1),
            }

        }
        return currentSpeed;
    }


    calcWheelsSpeed2(sensorObstDistances: SensorDistance[], currentSpeed: Speed):Speed {
        const frontLeftDist  = sensorObstDistances.find( sens => sens.side === Sides.frontLeft ).d;
        const frontRightDist  = sensorObstDistances.find( sens => sens.side === Sides.frontRight ).d;

        let calcSpeed: Speed = { left:SpeedController.MaxSpeed , right:-SpeedController.MaxSpeed};

        // if (frontLeftDist < SpeedController.MaxDistance) {
        //     calcSpeed.left = SpeedController.MaxSpeed * Math.exp( - (SpeedController.MaxDistance-frontLeftDist) / SpeedController.MaxDistance );
        //     calcSpeed.right = SpeedController.MaxSpeed ;
        // } else if (frontRightDist < SpeedController.MaxDistance ) {
        //     calcSpeed.left = SpeedController.MaxSpeed;
        //     calcSpeed.right = SpeedController.MaxSpeed * Math.exp( - (SpeedController.MaxDistance-frontRightDist) / SpeedController.MaxDistance );
        // }

        return calcSpeed;
    }
}