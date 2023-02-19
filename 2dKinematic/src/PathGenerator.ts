import Obstacles, { Point, SensorDistance } from "./Obstacles";
import plot from "./Ploter";
import { Position, Robot } from "./Robot";
import { Sensor, Sides } from "./SonarSensors";

interface CircleTarget { x: number, y: number, th: number, centerX: number, centerY: number }

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

    wrap2Pi(ang: number): number {
        return ang > Math.PI ? (-2 * Math.PI + ang) : ang;
    }

    calDist(point1: { x: number, y: number }, point2: { x: number, y: number }) {
        return Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2));
    }

    getAnglesRange(currentAngle: number): number[] {
        const th1 = this.wrap2Pi(currentAngle - Math.PI / 4);
        const th2 = this.wrap2Pi(currentAngle + Math.PI / 4);
        return th1 > th2 ? [th2, th1] : [th1, th2];
    }

    nextTargtNoObstacle(position: Position, target: Position, cirR = 60, fromAngle = Math.PI / 5, toAngle = Math.PI / 5, targetsToAvoid: Position[]): CircleTarget[] {
        if (cirR < 0) return;
        const obstacles = Obstacles.getObstacles()
            .filter(obst => this.calDist(position, obst) < 300);

        const anglRanges = this.getAnglesRange(position.th);
        const centers = this.getRangeOfAngles(0, 2*Math.PI, 0.02)
            .map( th => this.wrap2Pi(th))
            .filter(angle => angle > anglRanges[0] && angle < anglRanges[1])
            .map(angle => {
                return {
                    x: position.x + cirR * Math.cos(angle),
                    y: position.y + cirR * Math.sin(angle),
                    th: this.wrap2Pi(position.th + angle),
                };
            }).map(center => {
                return {
                    x: center.x,
                    y: center.y,
                    th: center.th,
                    dt: this.calDist(center, target),
                    do: obstacles.map(obs => this.calDist(obs, center))
                        .reduce((pre, cur) => cur > pre ? pre : cur)
                }
            })
            .filter(cir => cir.do > 2 )
            .sort((curr, prev) => curr.dt - prev.dt);

        const targetCircles = [];
        for (const center of centers) {
            plot.point(center, "green")
            const circle = this.getRangeOfAngles(-Math.PI, Math.PI, 0.03)
                .map(angl => {
                    return {
                        centerX: center.x,
                        centerY: center.y,
                        x: center.x + cirR * Math.cos(angl),
                        y: center.y + cirR * Math.sin(angl),
                        th: this.wrap2Pi(center.th + angl)
                    };
                });
            targetCircles.push(circle);
            // circle.forEach( point => plot.point(point,"orange"));
        }
        for (const circle of targetCircles) {
            const noIntersect = circle.every(cir => !obstacles.some(obs => this.calDist(obs, cir) < 5));
            if (noIntersect) {
                circle.forEach(point => plot.point(point));
                return circle;
            }
        }



    }


    nextTargtNoObstacle2(position: Position, target: Position): CircleTarget[] {
        const obstacles = Obstacles.getObstacles()
            .filter(obst => this.calDist(position, obst) < 300);

        const centers = this.getRangeOfAngles(-Math.PI, Math.PI, 0.02)
            .filter(angle => angle > (position.th - Math.PI / 2) &&
                angle < (position.th + Math.PI / 2))
            .map(angle => {
                return {
                    x: position.x + 50 * Math.cos(angle),
                    y: position.y + 50 * Math.sin(angle),
                    th: this.wrap2Pi(position.th + angle)
                };
            })
            .map(center => {
                return {
                    x: center.x,
                    y: center.y,
                    th: center.th,
                    dt: this.calDist(center, target),
                    do: obstacles.map(obs => this.calDist(obs, center))
                        .reduce((pre, cur) => cur > pre ? pre : cur)
                }
            })
            .sort((curr, prev) => -prev.do + curr.do);

        for (const center of centers) {
            const circle = this.getRangeOfAngles(0, 2 * Math.PI, 0.03)
                .map(angl => {
                    return {
                        centerX: center.x,
                        centerY: center.y,
                        x: center.x + 50 * Math.cos(angl),
                        y: center.y + 50 * Math.sin(angl),
                        th: this.wrap2Pi(center.th + angl)
                    };
                });


            const noIntersect = circle.every(cir => !obstacles.some(obs => this.calDist(obs, cir) < 5));

            if (noIntersect) {
                return circle;
            }
        }

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

        if (backLeftDist <= 3 * Robot.robotAttr.rW &&
            backRightDist <= 3 * Robot.robotAttr.rW) {
            this.context.beginPath();
            if (robotPosition.th >= -Math.PI * 15 / 180 && robotPosition.th <= Math.PI * 15 / 180) {

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
