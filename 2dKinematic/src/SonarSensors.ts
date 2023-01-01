import { Point, PointMinimum } from "./Obstacles";
import { Position, Robot } from "./Robot";

export interface Sensor extends Point {
    side: string,
    dc: number // distance from center
}



export enum Sides {
    frontLeft = "frontLeft",
    frontRight = "frontRight",
    backLeft = "backLeft",
    backRight = "backRight",
    middle = "middle",
    center = "center"
}

export class SonarSensors {
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;

    constructor() {
        this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
        this.context = this.canvas.getContext("2d");
    }

    calDist(point1: { x: number, y: number }, point2: { x: number, y: number }) {
        return Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2));
    }

    calAngle(point1: { x: number, y: number }, point2: { x: number, y: number }) {
        return Math.atan((point2.y - point1.y)/(point2.x - point1.x));
    }

    calcSensorsPositions(robotPosition: Position): Array<Sensor> {
        return [Sides.frontLeft, Sides.frontRight, Sides.backLeft, Sides.backRight, Sides.middle, Sides.center]
            .map(sensorSide => {
                if (sensorSide === Sides.center) {
                    return {
                        x: robotPosition.x,
                        y: robotPosition.y,
                        side: sensorSide,
                    } as Sensor;
                }
                if (sensorSide === Sides.middle) {
                    return {
                        x: robotPosition.x,
                        y: robotPosition.y + Robot.robotAttr.rH / 2,
                        side: sensorSide
                    } as Sensor;
                }
                if (sensorSide === Sides.backLeft) {
                    return {
                        x: robotPosition.x - Robot.RSLCos45 - Robot.robotAttr.rW / 2 - 3,
                        y: robotPosition.y - Robot.RSLCos45,
                        side: sensorSide
                    } as Sensor;
                }
                if (sensorSide === Sides.backRight) {
                    return {
                        x: robotPosition.x + Robot.RSLCos45 + Robot.robotAttr.rW / 2,
                        y: robotPosition.y - Robot.RSLCos45 + 1,
                        side: sensorSide
                    } as Sensor;
                }
                if (sensorSide === Sides.frontLeft) {
                    return {
                        x: robotPosition.x - Robot.RSLCos45 - Robot.robotAttr.rW / 2 - 4,
                        y: robotPosition.y - Robot.RSLCos45 + Robot.robotAttr.rH + Robot.robotAttr.rW,
                        side: sensorSide
                    } as Sensor;
                }
                if (sensorSide === Sides.frontRight) {
                    return {
                        x: robotPosition.x + Robot.RSLCos45 + Robot.robotAttr.rW - Robot.robotAttr.rW / 2 - 2,
                        y: robotPosition.y + Robot.RSLCos45 + Robot.robotAttr.rH + 3,
                        side: sensorSide
                    } as Sensor;
                }
                return undefined;
            }
            ).map(sens => {
                const sensCalc = sens;
                sensCalc.dc = this.calDist(robotPosition, sensCalc);
                const angle = this.calAngle(robotPosition, sensCalc) +
                (sens.side === Sides.frontLeft || sens.side === Sides.backLeft ? Math.PI : 0) +
                robotPosition.th * Math.PI/180 + Math.PI/2 ;
                sensCalc.x = robotPosition.x + sensCalc.dc * Math.cos(angle );
                sensCalc.y = robotPosition.y + sensCalc.dc * Math.sin(angle );
                return sensCalc;
            }
            );
    }

    show(robotPosition: Position) {
        const currentColor = this.context.fillStyle;
        const sensors = this.calcSensorsPositions(robotPosition);

        sensors.forEach(sensor => {
            this.plotCircle({ x: sensor.x, y: sensor.y, th: robotPosition.th });
        }
        );
    }


    plotCircle(poistion: Position) {
        this.context.beginPath();
        // this.context.rotate(poistion.th*Math.PI/180);
        const defaultColor = this.context.fillStyle;
        this.context.fillStyle = "orange";
        this.context.arc(poistion.x, poistion.y, 3, 0, Math.PI * 2, true);
        this.context.closePath();
        this.context.fill();
        this.context.fillStyle = defaultColor;
    }


}
