import { SensorDistance } from "./Obstacles";
import { Position } from "./Robot";
import { Sides } from "./SonarSensors";
import { Speed, SpeedController } from "./SpeedController";
import SpeedControllerIf from "./SpeedControllerIf";
import target from "./Target";


export default new (class SpeedController1 implements SpeedControllerIf {

    static MaxSpeed = 700;
    static MaxDistance = 80;

    iteration = 0;
    lastDistanceToObstacles: SensorDistance[];


    calcWheelsSpeed(sensorObstDistances: SensorDistance[], currentSpeed: Speed, robotPosition: Position): Speed {
        this.iteration += 1;
        const avoidObstacleCommand = this.avoidObstacle(sensorObstDistances, currentSpeed);
        const goToTargetCommand = this.goToTarget(robotPosition);

        return {
            left: avoidObstacleCommand.left * 0.5 + goToTargetCommand.left * 0.5,
            right: avoidObstacleCommand.right * 0.5 + goToTargetCommand.right * 0.5
        };
    }

    calcRepulseExpo(obstacleDist: number, factor = 0.01): number {
        return obstacleDist < SpeedController.MaxDistance
            ? 1 - Math.exp(factor * Math.sqrt(Math.pow(obstacleDist - SpeedController.MaxDistance, 2) / SpeedController.MaxDistance))
            : 0;
    }

    calcCombinedRepulse(obstacleDist: number, factor = 0.01): number {
        return obstacleDist < SpeedController.MaxDistance
            ? (0.4 * (1 - 1 / (1 + Math.exp(-0.001 * (obstacleDist - SpeedController.MaxDistance) / SpeedController.MaxDistance))) +
                0.6 * (1 - Math.exp(factor * Math.sqrt(Math.pow(obstacleDist - SpeedController.MaxDistance, 2) / SpeedController.MaxDistance)))) * 0.5
            : 0;
    }


    avoidObstacle(sensorObstDistances: SensorDistance[], currentSpeed: Speed): Speed {
        const { frontRightDist, frontLeftDist, backRightDist, backLeftDist } = this.calcObstacleDistances(sensorObstDistances);

        let calcSpeed: Speed = { left: SpeedController.MaxSpeed / 2, right: SpeedController.MaxSpeed / 2 };
     
        const { obstIsOnFront, frontRightTurn, backRightTurn, obstIsOnRight, obstIsOnBackRight, frontLeftTurn, backLeftTurn, obstIsOnLeft, obstIsOnBackLeft } = 
        this.getObstacleDirection(frontRightDist, frontLeftDist, backRightDist, backLeftDist);

        let wheelFactors = this.calcWheelsFactors(frontRightTurn, backRightTurn, obstIsOnRight, obstIsOnBackRight, obstIsOnFront, frontLeftTurn, backLeftTurn, obstIsOnLeft, obstIsOnBackLeft);


        calcSpeed.left  += SpeedController.MaxSpeed * 0.5 * wheelFactors.alpha;
        calcSpeed.right += SpeedController.MaxSpeed * 0.5 * wheelFactors.beta;
        this.lastDistanceToObstacles = sensorObstDistances;

        return calcSpeed;
    }

    private calcWheelsFactors(frontRightTurn: number, backRightTurn: number, obstIsOnRight: number, obstIsOnBackRight: number, obstIsOnFront: number, frontLeftTurn: number, backLeftTurn: number, obstIsOnLeft: number, obstIsOnBackLeft: number) {
        let alpha = (frontRightTurn - backRightTurn) * obstIsOnRight + obstIsOnBackRight * backRightTurn + obstIsOnFront * (frontRightTurn + frontLeftTurn) * 0.5;
        let beta = (frontLeftTurn - backLeftTurn) * obstIsOnLeft + obstIsOnBackLeft * backLeftTurn;
        return { alpha, beta };
    }

    private calcObstacleDistances(sensorObstDistances: SensorDistance[]) {
        const frontLeftDist = sensorObstDistances.find(sens => sens.side === Sides.frontLeft).d;
        const frontRightDist = sensorObstDistances.find(sens => sens.side === Sides.frontRight).d;
        const backLeftDist = sensorObstDistances.find(sens => sens.side === Sides.backLeft).d;
        const backRightDist = sensorObstDistances.find(sens => sens.side === Sides.backRight).d;
        return { frontRightDist, frontLeftDist, backRightDist, backLeftDist };
    }

    private getObstacleDirection(frontRightDist: number, frontLeftDist: number, backRightDist: number, backLeftDist: number) {
        const frontRightTurn = this.calcCombinedRepulse(frontRightDist);
        const frontLeftTurn = this.calcCombinedRepulse(frontLeftDist);
        const backRightTurn = this.calcCombinedRepulse(backRightDist);
        const backLeftTurn = this.calcCombinedRepulse(backLeftDist);

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
            frontLeftDist > SpeedController.MaxDistance &&
            backRightDist > SpeedController.MaxDistance &&
            backLeftDist > SpeedController.MaxDistance
            ? 2.9
            : 0;

        const obstIsOnBackLeft = backLeftDist < SpeedController.MaxDistance &&
            backRightDist > SpeedController.MaxDistance &&
            frontLeftDist > SpeedController.MaxDistance &&
            frontLeftDist > SpeedController.MaxDistance
            ? 2.9
            : 0;

        const obstIsOnLeft = frontLeftDist < SpeedController.MaxDistance &&
            frontRightDist > SpeedController.MaxDistance ||
            backLeftDist < SpeedController.MaxDistance &&
            backRightDist > SpeedController.MaxDistance
            ? 1
            : 0;
        return { obstIsOnFront, frontRightTurn, backRightTurn, obstIsOnRight, obstIsOnBackRight, frontLeftTurn, backLeftTurn, obstIsOnLeft, obstIsOnBackLeft };
    }

    private getObstacleCode(frontLeftDist: number, frontRightDist: number, backLeftDist: number, backRightDist: number) {
        return ((frontLeftDist < SpeedController.MaxDistance ? 1 : 0) << 3) |
            ((frontRightDist < SpeedController.MaxDistance ? 1 : 0) << 2) |
            ((backLeftDist < SpeedController.MaxDistance ? 1 : 0) << 1) |
            ((backRightDist < SpeedController.MaxDistance ? 1 : 0));
    }

    calDist2Target(targetPosition: Position, robotPosition: Position): number {
        return Math.sqrt(Math.pow(targetPosition.x - robotPosition.x, 2) + Math.pow(targetPosition.y - robotPosition.y, 2));
    }

    goToTarget(robotPosition: Position): Speed {
        const targetPosition = target.getPosition();
        const targetDistance = this.calDist2Target(targetPosition, robotPosition);

        const linearSpeed = targetDistance < 1.3 * SpeedController.MaxDistance ? targetDistance * (Math.exp(-0.01 * targetDistance / SpeedController.MaxDistance)) : 0;
        const angularSpeed = Math.atan2((targetPosition.y - robotPosition.y), (targetPosition.x - robotPosition.x)) - robotPosition.th;

        return { right: linearSpeed * Math.cos(angularSpeed), left: linearSpeed * Math.sin(angularSpeed) };
    }



});