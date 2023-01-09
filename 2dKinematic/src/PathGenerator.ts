import { Point, SensorDistance } from "./Obstacles";
import { Position, Robot } from "./Robot";
import { Sensor, Sides } from "./SonarSensors";

class PathGenerator {
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;

    constructor() {
        this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
        this.context = this.canvas.getContext("2d");

    }

    getRangeOfAngles(from: number, to: number, step: number): number[] {
        return Array.from({ length: Math.ceil(Math.abs((to - from) / step)) }, (x, i) => i).map(
            indx => step > 0 ? from + indx * step : to + indx * step
        );
    }

    showFrontObstaclePathAvoidance(sensors: SensorDistance[], robotPosition: Position) {
        const frontLeftDist = sensors.find(sens => sens.side === Sides.frontLeft).d;
        const frontRightDist = sensors.find(sens => sens.side === Sides.frontRight).d;
        const backLeftDist = sensors.find(sens => sens.side === Sides.backLeft).d;
        const backRightDist = sensors.find(sens => sens.side === Sides.backRight).d;


        this.context.fillText(`frontLeftDist:${frontLeftDist}`, 1, 10);
        this.context.fillText(`backLeftDist:${backLeftDist}`, 1, 30);
        this.context.fillText(`frontRightDist:${frontRightDist}`, 1, 50);
        this.context.fillText(`backRightDist:${backRightDist}`, 1, 70);
        this.context.fillText(`Theta:${robotPosition.th}`, 1, 90);

        if (backLeftDist <= 3*Robot.robotAttr.rW &&
            backRightDist <= 3*Robot.robotAttr.rW) {
            this.context.beginPath();
            if (robotPosition.th >= -Math.PI*15/180 && robotPosition.th <= Math.PI*15/180) {

                const currentColor = this.context.fillStyle;
                const arcX = robotPosition.x;
                const arcY = robotPosition.y + 1.5 * Robot.robotAttr.rW;

                this.getRangeOfAngles(Math.PI / 2, 0, -0.02).forEach(angle => {
                    this.plotCircle({
                        x: arcX + 1.5 * Robot.robotAttr.rW * Math.cos(angle),
                        y: arcY + 1.5 * Robot.robotAttr.rW * Math.sin(angle),
                        d: 0
                    } as Point);

                }
                );
                this.context.fillStyle = currentColor;
            }
        }
    }

    plotCircle(point: Point) {
        this.context.beginPath();
        this.context.fillStyle = "green";
        this.context.arc(point.x, point.y, 2, 0, Math.PI * 2, true);
        this.context.closePath();
        this.context.fill();

    }

}


export default new PathGenerator();
