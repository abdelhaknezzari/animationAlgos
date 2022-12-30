import { Speed } from "./SpeedController";
import { Point } from "./Obstacles";
import { Sensor, SonarSensors } from "./SonarSensors";


export interface Position {
    x: number, // position coordinate x
    y: number, // position coordinate y
    th: number // theta orientation of robot in 2 Dimention
}


export class Robot {
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    static robotAttr = {
        WheelR: 5,
        rH: 50,
        rW: 30,
        rSL: 20,
        rSW: 3
    };

    static RSLCos45 = Math.cos(Math.PI / 4) * Robot.robotAttr.rSL;

    dt = 0.01;

    position = { x: 130, y: 145, th: Math.PI / 3 } as Position;
    speed = { right: 100, left: 100 } as Speed;
    sonarSensors=new SonarSensors();


    constructor() {
        this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
        this.context = this.canvas.getContext("2d");
    }

    plotCircle(position: Position) {
        this.context.beginPath();
        const defaultColor = this.context.fillStyle;
        this.context.fillStyle = "orange";
        this.context.arc(position.x, position.y, 3, 0, Math.PI * 2, true);
        this.context.closePath();
        this.context.fill();
        this.context.fillStyle = defaultColor;
    }

    plotRobot(position: Position) {
        let previousPosition = position;
        const moveAndTurn = (d: number, th: number) => {
            const xCoord = previousPosition.x + d * Math.cos(th * Math.PI / 180);
            const yCoord = previousPosition.y + d * Math.sin(th * Math.PI / 180);
            previousPosition = { x: xCoord, y: yCoord, th };
            this.context.lineTo(xCoord, yCoord);
        };

        const sensHolder = (angle:number) => {
            moveAndTurn(Robot.robotAttr.rSL , position.th -45+angle);
            moveAndTurn(Robot.robotAttr.rSW, position.th+45 +angle);
            moveAndTurn(Robot.robotAttr.rSL , position.th +45 +90+angle);
        }; 
        
        this.context.moveTo(previousPosition.x , previousPosition.y );
        moveAndTurn(Robot.robotAttr.rW/2 -2 , position.th );
        sensHolder(0);
        moveAndTurn(Robot.robotAttr.rH , position.th +90);
        sensHolder(90);
        moveAndTurn(Robot.robotAttr.rW , position.th -180);
        sensHolder(180);
        moveAndTurn(Robot.robotAttr.rH , position.th-90);
        sensHolder(270);
        moveAndTurn(Robot.robotAttr.rW/2 , position.th );

        moveAndTurn(2,  position.th-90 );
        moveAndTurn(2, 0+ position.th );
        moveAndTurn(2, 90+ position.th );

        this.context.stroke();
        this.context.fill();

    }


    plotRobot2(position: Position) {
        let previousPosition = position;
        const moveAndTurn = (d: number, th: number) => {
            const xCoord = previousPosition.x + d * Math.cos(th * Math.PI / 180);
            const yCoord = previousPosition.y + d * Math.sin(th * Math.PI / 180);
            previousPosition = { x: xCoord, y: yCoord, th };
            this.context.lineTo(xCoord, yCoord);
        };
        
        this.context.moveTo(previousPosition.x , previousPosition.y );
        moveAndTurn(Robot.robotAttr.rH , 90 + position.th );
        moveAndTurn(Robot.robotAttr.rSL, -180 - 45+ position.th );
        moveAndTurn(Robot.robotAttr.rSW, -180 - 90 - 45+ position.th );
        moveAndTurn(Robot.robotAttr.rSL - 2, -45+ position.th );
        moveAndTurn((Robot.robotAttr.rW - 4) / 2,  position.th );
        moveAndTurn(4, 90+ position.th );
        moveAndTurn(4, 0+ position.th );
        moveAndTurn(4, -90+ position.th );
        moveAndTurn((Robot.robotAttr.rW - 4) / 2, 0+ position.th );
        moveAndTurn(Robot.robotAttr.rSL, 45+ position.th );
        moveAndTurn(Robot.robotAttr.rSW, -45+ position.th );
        moveAndTurn(Robot.robotAttr.rSL - 2, 180 + 45+ position.th );
        moveAndTurn(Robot.robotAttr.rH, -90+ position.th );
        moveAndTurn(Robot.robotAttr.rSL, -45+ position.th );
        moveAndTurn(Robot.robotAttr.rSW, -135+ position.th );
        moveAndTurn(Robot.robotAttr.rSL - 2, -225+ position.th );
        moveAndTurn(Robot.robotAttr.rW, 180+ position.th );
        moveAndTurn(Robot.robotAttr.rSL, -90 - 45+ position.th );
        moveAndTurn(Robot.robotAttr.rSW, -180 - 45+ position.th );
        moveAndTurn(Robot.robotAttr.rSL, -180 - 90 - 45+ position.th );
        this.context.stroke();
        this.context.fill();

    }

    getPosition(): Position {
        return this.position;
    }

    getSpeed(): Speed {
        return this.speed;
    }

    animate(speed: Speed): void {
        this.speed = speed;
        this.calcNewPosition(speed);
        this.plotRobot(this.position);
        this.sonarSensors.show(this.position);
    }

    calcNewPosition(speed: Speed) {
        const delta = this.kinematic(speed.left, speed.right);
        this.position.x += delta.dx;
        this.position.y += delta.dy;
        this.position.th += delta.dth ;
    }

    kinematic(leftWeelSpeed: number, rightWheelSpeed: number): { dx: number, dy: number, dth: number } {
        const linearVelocity = (rightWheelSpeed + leftWeelSpeed) / 2;
        const angularVelocity = rightWheelSpeed - leftWeelSpeed;
        const dth = (2 * Math.PI * Robot.robotAttr.WheelR / Robot.robotAttr.rW) * angularVelocity * this.dt;
        const theta = this.position.th + dth;
        const dx = Robot.robotAttr.WheelR * linearVelocity * Math.cos(theta) * this.dt;
        const dy = Robot.robotAttr.WheelR * linearVelocity * Math.sin(theta) * this.dt;

        return { dx, dy, dth };
    }

    getSensors():Array<Sensor> {
        return this.sonarSensors.calcSensorsPositions(this.getPosition());
    }
}
