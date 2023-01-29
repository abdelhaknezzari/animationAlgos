import Obstacles, { Point, SensorDistance } from "./Obstacles";
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

    wrap2Pi(ang: number): number {
        return ang > Math.PI ? (-2 * Math.PI + ang) : ang;
    }

    calDist(point1: { x: number, y: number }, point2: { x: number, y: number }) {
        return Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2));
    }

    generateCirclesAround(position: Position): Position[] {
        const obstacles = Obstacles.getObstacles()
        .filter( obst => this.calDist(position,obst) > 200);
        const circles1 = this.getRangeOfAngles(0, 2 * Math.PI, 0.2)
            .map(angle => {
                return {
                    x: position.x + 100 * Math.cos(angle),
                    y: position.y + 100 * Math.sin(angle),
                    th: this.wrap2Pi(position.th + angle)
                };
            }) as [{x:number,y:number,th:number}];

   
            for(const  circle of circles1){
                const circles2 = this.getRangeOfAngles(0, 2 * Math.PI, 0.03)
                        .map(angl => {
                            return {
                                x: circle.x + 100 * Math.cos(angl),
                                y: circle.y + 100 * Math.sin(angl),
                                th: this.wrap2Pi(circle.th + angl)
                            };
                        });
         //       const noIntersect = circles2.every(cir => obstacles
                            // at least one point of the circle is intersecting with obstacle
          //                  .every(obs => this.calDist( obs, cir ) > 5 ));

               let intersect = false;

               for(const cir of circles2 ) {
                 for( const obs of obstacles) {
                    if(this.calDist( obs, cir ) < 5) {
                        intersect = true;
                        break;
                    }
                 }
                 if(intersect) {
                    break;
                 }
               }
                if(!intersect) {
                    return circles2;
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
