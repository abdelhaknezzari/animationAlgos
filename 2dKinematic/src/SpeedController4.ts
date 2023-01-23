import Obstacles, { RobotObstacleDistances, SensorDistance } from "./Obstacles";
import { Position, Robot } from "./Robot";
import { Sides } from "./SonarSensors";
import { Speed, SpeedController } from "./SpeedController";
import Target from "./Target";
import PathGenerator from "./PathGenerator";
import SpeedControllerIf from "./SpeedControllerIf";



export default new (class SpeedController4 implements SpeedControllerIf {

    static MaxSpeed = 700;
    static MaxDistance = 80;
    static DistanceFromTargetGoal = 20;

    iteration = 0;
    lastDistanceToObstacles: SensorDistance[];


    wrap2Pi(ang: number): number {
        return ang > Math.PI ? (-2 * Math.PI + ang) : ang;
    }

    calDist2Target(targetPosition: Position, robotPosition: Position): number {
        return Math.sqrt(Math.pow(targetPosition.x - robotPosition.x, 2) + Math.pow(targetPosition.y - robotPosition.y, 2));
    }

    calcWheelsSpeed(sensorObstDistances: SensorDistance[], currentSpeed: Speed, robotPosition: Position): Speed {
        //    Control to reference pose using an intermediate direction:
        const targetPosition = Target.getPosition();

        // const farthestObstacle = Obstacles.getMaxDistanceObstacle(robotPosition);


        PathGenerator.generateCirclesAround(robotPosition)
        .forEach(pos => {
            Target.setPosition(pos);
            Target.showTarget();
        });

        // PathGenerator.getRangeOfAngles(0, 2 * Math.PI, 0.02)
        //     .forEach(angle => {
        //         Target.setPosition({
        //             x: robotPosition.x + 100 * Math.cos(angle),
        //             y: robotPosition.y + 100 * Math.sin(angle), 
        //             th: robotPosition.th + angle
        //         });
        //         Target.showTarget();
        //      }
        //     );



        return { right: 0, left: 0 };

        //  return this.getCommandToTarget((farthestObstacle as unknown as Position), robotPosition);
    }



    private getCommandToTarget(targetPosition: Position, robotPosition: Position) {
        const phiR = Math.atan2((targetPosition.y - robotPosition.y), (targetPosition.x - robotPosition.x));
        const alpha = this.wrap2Pi(phiR - Math.PI);

        const beta = (alpha < 0 ? -1 : 1) * Math.atan(SpeedController4.DistanceFromTargetGoal / this.calDist2Target(targetPosition, robotPosition));

        const linearSpeed = this.calDist2Target(targetPosition, robotPosition);
        const angularSpeed = this.wrap2Pi(phiR - robotPosition.th +
            (Math.abs(alpha) < Math.abs(beta) ? alpha : beta));

        return {
            right: (linearSpeed - Robot.robotAttr.rW * 0.5 * angularSpeed),
            left: (linearSpeed + Robot.robotAttr.rW * 0.5 * angularSpeed)
        };
    }

    private getLeftPulseObstacle(obstacles: RobotObstacleDistances): number {
        return this.calcPulse(obstacles.frontLeft) + this.calcPulse(obstacles.backLeft);
    }

    private getLFrontPulseObstacle(obstacles: RobotObstacleDistances): number {
        return this.calcPulse(obstacles.frontLeft) * this.calcPulse(obstacles.frontRight);
    }

  
    calcPulse(dist: number): number {
        return dist < SpeedController.MaxDistance ? 1 / (1 + Math.exp(-Math.abs(dist))) : 0;
    }


});