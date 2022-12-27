import { Position } from "./Robot";


export interface Point {
    x: number, // position coordinate x
    y: number, // position coordinate y
    d:number // distance from robot
}


export class Obstacles {
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;


    walls: Array<Array<Point>>;
    obstacles: Array<Point>;
    static rWall = 3;
    constructor() {
        this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
        addEventListener('click', (event) => {
        });
        this.context = this.canvas.getContext("2d");
        this.generateObstacles();
    }

    generateObstacles() {
        this.walls = [
            Array.from({ length: this.canvas.height }, (_, key) => key).map(num => { return { x: 0, y: num}; }) as [Point],
            Array.from({ length: this.canvas.height }, (_, key) => key).map(num => { return { x: this.canvas.width, y: num }; }) as [Point],
            Array.from({ length: this.canvas.width  }, (_, key) => key).map(num => { return { x: num, y: this.canvas.height}; }) as [Point],
            Array.from({ length: this.canvas.width  }, (_, key) => key).map(num => { return { x: num, y: 0}; }) as [Point],
            Array.from({ length: this.canvas.width*0.5  }, (_, key) => key).map(num => { return { x: num, y: this.canvas.height*0.5 }; }) as [Point]

        ];
    }

    calcDistances( robotPosition:Position) {
        return this.walls.reduce( (prv,cur) => prv.concat(cur),[] ).map(
            wallPoint => {
               return {
                x:wallPoint.x,
                y:wallPoint.y,
                d: this.distanceBetweenRobotAndObstacle(robotPosition,wallPoint)      
               } as Point;
            }
        ).sort( (prv,cur) =>  {
            if( prv.d < cur.d) {
                return -1;
            } else if( prv.d > cur.d) {
                return 1;
            } else {
                return 0;
            };
        });
    }

    distanceBetweenRobotAndObstacle( robotPosition:Position,point:Point){
          return Math.sqrt( Math.pow(robotPosition.x-point.x,2) + Math.pow(robotPosition.y-point.y,2));
    }

    show() {
        // this.calcDistances();
        this.walls.forEach(wall => wall.forEach( point => {
            this.plotCircle(point);
        } ));
        
        
    }

    plotCircle(point :Point) {
        this.context.beginPath();
        this.context.arc(point.x, point.y, Obstacles.rWall, 0, Math.PI * 2, true);
        this.context.closePath();
        this.context.fill();

        this.context.fillText("Hello World", 10, 50);
    }

}