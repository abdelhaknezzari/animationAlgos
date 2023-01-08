import { Point, SensorDistance } from "./Obstacles";
import { Robot } from "./Robot";
import { Sensor, Sides } from "./SonarSensors";

export interface Speed {
    right: number,
    left: number
}

export class SpeedController {
    static MaxSpeed = 700;
    static MaxDistance = 80;

    lastDistanceToObstacles:SensorDistance[];

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

        const frontRightTurn = 1 - Math.exp(0.01*Math.sqrt(  Math.pow(frontRightDist - SpeedController.MaxDistance, 2)/ SpeedController.MaxDistance ));
        const frontLeftTurn = 1 - Math.exp(0.01*Math.sqrt(  Math.pow(frontLeftDist - SpeedController.MaxDistance, 2)/ SpeedController.MaxDistance ));
        const backRightTurn = 1 - Math.exp(0.01*Math.sqrt(  Math.pow(backRightDist - SpeedController.MaxDistance, 2)/ SpeedController.MaxDistance ));
        const backLeftTurn = 1 - Math.exp(0.01*Math.sqrt(  Math.pow(backLeftDist - SpeedController.MaxDistance, 2)/ SpeedController.MaxDistance ));
   
        //     R  L
        // F   4  8    => 12
        // B   1  2    => 3
        //    ||  ||
        //    5   10
        let alpha = angleCode > 0 ? (frontRightTurn + backRightTurn ) *0.5:1;
        let beta  = angleCode > 0 ? (frontLeftTurn  + backLeftTurn  ) *0.5:1;

        // switch (angleCode) {
        //     case (3):
        //         alpha = 0.02;
        //         break;

        //     case (2):
        //         alpha = 0.02;
        //         break;
        //     case (1):
        //         alpha = 0.02;
        //         break;
        //     case (4):
        //         alpha = 0.02;
        //         break;
        //     case (5):
        //         alpha = 0.02;
        //         break;

        //     case (8):
        //         alpha = 0.02;

        //     case (10):
        //         alpha = 0.02;
        //         break;

        //         break;


        //     default:
        //         alpha = 0.00;
        //         break;
        // }

        calcSpeed.left = SpeedController.MaxSpeed  *  alpha;
        calcSpeed.right = SpeedController.MaxSpeed * beta ;

        return calcSpeed;
    }


    calcRepulseExpo(obstacleDist:number,factor = 0.01):number {
        return obstacleDist < SpeedController.MaxDistance 
        ?  1 - Math.exp(factor *Math.sqrt(Math.pow(obstacleDist - SpeedController.MaxDistance, 2) / SpeedController.MaxDistance))
        : 0;
    }

    calcRepulseCobined(obstacleDist:number,factor = 0.01):number {
        return obstacleDist < SpeedController.MaxDistance 
        // ? 1.5-1/( Math.abs(obstacleDist-SpeedController.MaxDistance*0.3) / SpeedController.MaxDistance)
        // ? Math.tanh( 0.034/( Math.abs(obstacleDist-SpeedController.MaxDistance) / SpeedController.MaxDistance))
        // ?0.03*Math.PI* Math.abs(obstacleDist-SpeedController.MaxDistance) / SpeedController.MaxDistance
        ?( 0.4*(1-1/(1+Math.exp(-0.001*(obstacleDist-SpeedController.MaxDistance) / SpeedController.MaxDistance)) ) +
         0.6*( 1- Math.exp(factor *Math.sqrt(Math.pow(obstacleDist - SpeedController.MaxDistance, 2) / SpeedController.MaxDistance)))) *0.5
        : 0;
    }


    calcWheelsSpeed3(sensorObstDistances: SensorDistance[], currentSpeed: Speed): Speed {
        const frontLeftDist = sensorObstDistances.find(sens => sens.side === Sides.frontLeft).d;
        const frontRightDist = sensorObstDistances.find(sens => sens.side === Sides.frontRight).d;
        const backLeftDist = sensorObstDistances.find(sens => sens.side === Sides.backLeft).d;
        const backRightDist = sensorObstDistances.find(sens => sens.side === Sides.backRight).d;

        let calcSpeed: Speed = { left: SpeedController.MaxSpeed / 2, right: SpeedController.MaxSpeed / 2 };

        const angleCode = ((frontLeftDist < SpeedController.MaxDistance ? 1 : 0) << 3) |
            ((frontRightDist < SpeedController.MaxDistance ? 1 : 0) << 2) |
            ((backLeftDist < SpeedController.MaxDistance ? 1 : 0) << 1) |
            ((backRightDist < SpeedController.MaxDistance ? 1 : 0));

        const frontRightTurn = this.calcRepulseCobined(frontRightDist);
        const frontLeftTurn = this.calcRepulseCobined(frontLeftDist);
        const backRightTurn = this.calcRepulseCobined(backRightDist);
        const backLeftTurn = this.calcRepulseCobined(backLeftDist);

        const obstIsOnFront = frontRightDist < SpeedController.MaxDistance
            && frontLeftDist < SpeedController.MaxDistance
            ? 1
            : 0;
        const obstIsOnBack = backRightDist < SpeedController.MaxDistance
            && backLeftDist < SpeedController.MaxDistance
            ? 1
            : 0;
        const obstIsOnRight = frontRightDist < SpeedController.MaxDistance &&
            frontLeftDist > SpeedController.MaxDistance ||
            backRightDist < SpeedController.MaxDistance
            && backLeftDist > SpeedController.MaxDistance
            ? 1
            : 0;

        const obstIsOnLeft = frontLeftDist < SpeedController.MaxDistance &&
            frontRightDist > SpeedController.MaxDistance ||
            backLeftDist < SpeedController.MaxDistance &&
            backRightDist > SpeedController.MaxDistance
            ? 1
            : 0;


        let alpha = (frontRightTurn - backRightTurn) * obstIsOnRight + obstIsOnFront * (frontRightTurn + frontLeftTurn) * 0.5;
        let beta = (frontLeftTurn - backLeftTurn) * obstIsOnLeft ;
        const randEffect = Math.random() > 0.5 ? 1: 0;

        calcSpeed.left  += SpeedController.MaxSpeed / 2  *  alpha;
        calcSpeed.right += SpeedController.MaxSpeed / 2  *  beta;
        this.lastDistanceToObstacles = sensorObstDistances;

        return calcSpeed;
    }

}
