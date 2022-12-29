import { Point } from "./Obstacles";
import { Position, Robot } from "./Robot";

export interface Sensor extends Point {
    side: string
}

export enum Sides {
    frontLeft = "frontLeft", frontRight = "frontRight", backLeft = "backLeft", backRight = "backRight"
}

export class SonarSensors {
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;

    constructor() {
        this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
        this.context = this.canvas.getContext("2d");
    }

    calcSensorsPositions(robotPosition: Position): Array<Sensor> {
        return ["frontLeft", "frontRight", "backLeft", "backRight"]
            .map(sensorSide => {
                if (sensorSide === "backLeft") {
                    return {
                        x: robotPosition.x - Robot.RSLCos45,
                        y: robotPosition.y - Robot.RSLCos45,
                        side: sensorSide
                    } as Sensor;
                }
                if (sensorSide === "backRight") {
                    return {
                        x: robotPosition.x + Robot.RSLCos45 + Robot.robotAttr.rW,
                        y: robotPosition.y - Robot.RSLCos45,
                        side: sensorSide
                    } as Sensor;
                }
                if (sensorSide === "frontLeft") {
                    return {
                        x: robotPosition.x - Robot.RSLCos45,
                        y: robotPosition.y - Robot.RSLCos45 + Robot.robotAttr.rH + Robot.robotAttr.rW,
                        side: sensorSide
                    } as Sensor;
                }
                if (sensorSide === "frontRight") {
                    return {
                        x: robotPosition.x + Robot.RSLCos45 + Robot.robotAttr.rW,
                        y: robotPosition.y + Robot.RSLCos45 + Robot.robotAttr.rH,
                        side: sensorSide
                    } as Sensor;
                }
                return undefined;
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
        const defaultColor = this.context.fillStyle;
        this.context.fillStyle = "orange";
        this.context.arc(poistion.x, poistion.y, 3, 0, Math.PI * 2, true);
        this.context.closePath();
        this.context.fill();
        this.context.fillStyle = defaultColor;
    }


}
