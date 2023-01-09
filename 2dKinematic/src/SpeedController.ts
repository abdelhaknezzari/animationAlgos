import { Point, SensorDistance } from "./Obstacles";
import { Position, Robot } from "./Robot";
import { Sensor, Sides } from "./SonarSensors";
import target from "./Target";

export interface Speed {
    right: number,
    left: number
}

export class SpeedController {
    static MaxSpeed = 700;
    static MaxDistance = 80;
    iteration = 0;

    lastDistanceToObstacles: SensorDistance[];

    calcWheelsSpeed3(obstacleDistances: Array<Point>, currentSpeed: Speed): Speed {
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


    calcRepulseExpo(obstacleDist: number, factor = 0.01): number {
        return obstacleDist < SpeedController.MaxDistance
            ? 1 - Math.exp(factor * Math.sqrt(Math.pow(obstacleDist - SpeedController.MaxDistance, 2) / SpeedController.MaxDistance))
            : 0;
    }

    calcRepulseCobined(obstacleDist: number, factor = 0.01): number {
        return obstacleDist < SpeedController.MaxDistance
            // ? 1.5-1/( Math.abs(obstacleDist-SpeedController.MaxDistance*0.3) / SpeedController.MaxDistance)
            // ? Math.tanh( 0.034/( Math.abs(obstacleDist-SpeedController.MaxDistance) / SpeedController.MaxDistance))
            // ?0.03*Math.PI* Math.abs(obstacleDist-SpeedController.MaxDistance) / SpeedController.MaxDistance
            ? (0.4 * (1 - 1 / (1 + Math.exp(-0.001 * (obstacleDist - SpeedController.MaxDistance) / SpeedController.MaxDistance))) +
                0.6 * (1 - Math.exp(factor * Math.sqrt(Math.pow(obstacleDist - SpeedController.MaxDistance, 2) / SpeedController.MaxDistance)))) * 0.5
            : 0;
    }


    calcWheelsSpeed(sensorObstDistances: SensorDistance[], currentSpeed: Speed, robotPosition: Position): Speed {
        this.iteration += 1;
        const avoidObstacleCommand = this.avoidObstacle(sensorObstDistances, currentSpeed);
        const goToTargetCommand = this.goToTarget(robotPosition);

        const frontLeftDist = sensorObstDistances.find(sens => sens.side === Sides.frontLeft).d;
        const frontRightDist = sensorObstDistances.find(sens => sens.side === Sides.frontRight).d;
        const backLeftDist = sensorObstDistances.find(sens => sens.side === Sides.backLeft).d;
        const backRightDist = sensorObstDistances.find(sens => sens.side === Sides.backRight).d;


        return {
            left:  avoidObstacleCommand.left  * 0.5   + goToTargetCommand.left * 0.5 ,
            right: avoidObstacleCommand.right * 0.5   + goToTargetCommand.right* 0.5  
        };
    }


    avoidObstacle(sensorObstDistances: SensorDistance[], currentSpeed: Speed): Speed {
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

            const obstIsOnBackRight = backRightDist < SpeedController.MaxDistance &&
            frontLeftDist > SpeedController.MaxDistance  &&
            backRightDist > SpeedController.MaxDistance &&
            backLeftDist  > SpeedController.MaxDistance
            ? 2.9
            : 0;

            const obstIsOnBackLeft = backLeftDist < SpeedController.MaxDistance &&
            backRightDist > SpeedController.MaxDistance &&
            frontLeftDist > SpeedController.MaxDistance  &&
            frontLeftDist > SpeedController.MaxDistance
            ? 2.9
            : 0;

        const obstIsOnLeft = frontLeftDist < SpeedController.MaxDistance &&
            frontRightDist > SpeedController.MaxDistance ||
            backLeftDist < SpeedController.MaxDistance &&
            backRightDist > SpeedController.MaxDistance
            ? 1
            : 0;

        const randEffectObsFr = (this.iteration % 10 === 0 ) && Math.random() > 0.5 && obstIsOnFront ? 1:0;

        let alpha = (frontRightTurn - backRightTurn) * obstIsOnRight  + obstIsOnBackRight * backRightTurn + obstIsOnFront * (frontRightTurn + frontLeftTurn) * 0.5;
        let beta =  (frontLeftTurn - backLeftTurn) * obstIsOnLeft     + obstIsOnBackLeft  * backLeftTurn ;
   

        calcSpeed.left += SpeedController.MaxSpeed  * 0.5 * alpha;
        calcSpeed.right += SpeedController.MaxSpeed * 0.5 * beta;
        this.lastDistanceToObstacles = sensorObstDistances;

        return calcSpeed;
    }

    calDist2Target(targetPosition: Position, robotPosition: Position): number {
        return Math.sqrt(Math.pow(targetPosition.x - robotPosition.x, 2) + Math.pow(targetPosition.y - robotPosition.y, 2));
    }

    goToTarget(robotPosition: Position): Speed {
        const targetPosition = target.getPosition();
        const targetDistance = this.calDist2Target(targetPosition, robotPosition);

        const linearSpeed = targetDistance < 2*SpeedController.MaxDistance ? targetDistance * Math.exp(-0.1235*targetDistance/SpeedController.MaxDistance) : 0;
        const angularSpeed = Math.atan2((targetPosition.y - robotPosition.y),(targetPosition.x - robotPosition.x))-robotPosition.th;

        return { right: linearSpeed *Math.cos(angularSpeed) , left: linearSpeed *Math.sin(angularSpeed )   };
    }

}
