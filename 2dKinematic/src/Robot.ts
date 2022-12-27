export class Robot {
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;

    counter = 0;

    robotAttr = {
        width: 50,
        height: 50,
        wheelH: 10,
        WheelW: 5,
        WheelR: 5,
    };
    dt = 0.002;
    position = { x: 130, y: 145, theta: Math.PI / 2 };
    speed ={vRight:100, vLeft:100};


    constructor() {
        this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
        addEventListener('click', (event) => {
        });
        this.context = this.canvas.getContext("2d");
        // this.plotRobot(268, 234);
    }

    plotCircle(x = 25, y = 25, theta = 30) {
        this.context.beginPath();
        this.context.arc(x, y, 15, 0, Math.PI * 2, true);
        this.context.closePath();
        this.context.fill();

    }

    plotRobot(x = 25, y = 25, theta = 30) {
        this.context.translate(x, y);
        this.context.rotate(theta);
        this.context.fillStyle = "#0095DD";
        this.context.fillRect(0, 0, this.robotAttr.height, this.robotAttr.width);

        this.context.fillStyle = "#FFCC99";
        this.context.fillRect(this.robotAttr.width + this.robotAttr.WheelW - 8,
            this.robotAttr.height - this.robotAttr.wheelH + 3,
            12,
            4);

        this.context.fillRect(- this.robotAttr.wheelH + 2,
            this.robotAttr.height - this.robotAttr.wheelH + 3,
            12,
            4);

        this.context.fillStyle = "#B252C3";
        this.context.fillRect(- this.robotAttr.wheelH,
            this.robotAttr.height - this.robotAttr.wheelH,
            this.robotAttr.WheelW,
            this.robotAttr.wheelH);
        this.context.fillRect(this.robotAttr.width + this.robotAttr.WheelW,
            this.robotAttr.height - this.robotAttr.wheelH,
            this.robotAttr.WheelW,
            this.robotAttr.wheelH);

    }

    animate(): void {
   
        if(this.position.x >= (this.canvas.width  - 50) ||
           this.position.y >= (this.canvas.height - 50)) {
             this.speed.vLeft *= -1;
             this.speed.vRight *= -1;
        }

        const delta = this.kinematic( this.speed.vLeft ,  this.speed.vRight);

        this.position.x += delta.dx;
        this.position.y += delta.dy;
        this.position.theta += delta.dth;

        if (this.counter % 1 === 0) {
            this.context.clearRect(0, 0, 788, 899);
            // this.plotRobot(this.position.x, this.position.y, this.position.theta);
            this.plotCircle(this.position.x, this.position.y, this.position.theta);
        }

        this.counter += 1;

        window.requestAnimationFrame(() => { this.animate() });
    }

    kinematic(leftWeelSpeed: number, rightWheelSpeed: number): { dx: number, dy: number, dth: number } {
        const dth = (0.5 * this.robotAttr.WheelR / this.robotAttr.width) * (-rightWheelSpeed + leftWeelSpeed) * this.dt;
        const theta = this.position.theta + dth;
        const dx = this.robotAttr.WheelR * 0.5 * Math.cos(theta) * (rightWheelSpeed + leftWeelSpeed) * this.dt;
        const dy = this.robotAttr.WheelR * 0.5 * Math.sin(theta) * (rightWheelSpeed + leftWeelSpeed) * this.dt;

        return { dx, dy, dth };
    }
}
