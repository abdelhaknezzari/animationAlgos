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

    lastCommands: Speed[] = [];
    lastTargetPositions: Position[]=[];
    backCounter = 0;

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

        let fromAngle = Math.PI / 5;
        let toAngle = Math.PI / 5;
        if (this.backCounter > 150) {
            this.backCounter = 0;
            fromAngle = Math.PI/2;
            toAngle = Math.PI/2;
        }

  
       // let targetNoObstacle =  PathGenerator.nextTargtNoObstacle2(robotPosition, Target.getPosition());
        // if(!targetNoObstacle){
        let  targetNoObstacle = PathGenerator.nextTargtNoObstacle(robotPosition, Target.getPosition(),
             60, fromAngle, toAngle, this.lastTargetPositions);
        // }
        
        Target.showTarget(targetPosition);
        targetNoObstacle?.forEach(pos => {
            Target.showTarget(pos);
        });



        if (targetNoObstacle
            //  &&
            // targetNoObstacle.length > 0 &&
            // this.backCounter === 0
            ) {
            const lastCommand = this.getCommandToTarget({ x: targetNoObstacle[0].centerX, y: targetNoObstacle[0].centerY, th: robotPosition.th }, robotPosition);

            this.lastCommands.push(lastCommand);
            this.lastTargetPositions = [];
            return lastCommand;
        } else {
            const lastCommand = this.lastCommands.pop();
            lastCommand.left +=10;
            return lastCommand;

        //     this.backCounter += 1;
        //     const lastCommand = this.lastCommands.pop();
        //     let pos :Position ={x:0,y:0,th:0};
        //     pos.x = robotPosition.x;
        //     pos.y = robotPosition.y;
        //     pos.th = robotPosition.th;
        //     this.lastTargetPositions.push(pos);
        //     return { left: -lastCommand.left, right: -lastCommand.right };
        }
    }

    private getCommandToTarget(targetPosition: Position, robotPosition: Position): Speed {
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