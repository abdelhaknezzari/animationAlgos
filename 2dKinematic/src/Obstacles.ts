

interface Point {
    x: number,
    y: number,
    r: number
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
            Array.from({ length: this.canvas.height }, (_, key) => key).map(num => { return { x: 0, y: num,r: Obstacles.rWall}; }) as [Point],
            Array.from({ length: this.canvas.height }, (_, key) => key).map(num => { return { x: this.canvas.width, y: num,r: Obstacles.rWall }; }) as [Point],
            Array.from({ length: this.canvas.width  }, (_, key) => key).map(num => { return { x: num, y: this.canvas.height,r: Obstacles.rWall }; }) as [Point],
            Array.from({ length: this.canvas.width  }, (_, key) => key).map(num => { return { x: num, y: 0,r: Obstacles.rWall }; }) as [Point],
            Array.from({ length: this.canvas.width*0.5  }, (_, key) => key).map(num => { return { x: num, y: this.canvas.height*0.5,r: Obstacles.rWall }; }) as [Point]

        ];
    }

    show() {
        this.walls.forEach(wall => wall.forEach( point => {
            this.plotCircle(point);
        } ));
        
        
    }

    plotCircle(point :Point) {
        this.context.beginPath();
        this.context.arc(point.x, point.y, point.r, 0, Math.PI * 2, true);
        this.context.closePath();
        this.context.fill();

        this.context.fillText("Hello World", 10, 50);
    }

}