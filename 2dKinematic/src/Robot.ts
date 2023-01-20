import { Speed } from "./SpeedController";
import { Point } from "./Obstacles";
import { Sensor, SonarSensors } from "./SonarSensors";


export interface Position {
    x: number, // position coordinate x
    y: number, // position coordinate y
    th: number // theta orientation of robot in 2 Dimention
}

export interface DeltaPosition {
    dx: number, // delta coordinate x
    dy: number, // selta coordinate y
    dth: number // delta theta orientation of robot in 2 Dimention
}

export class Robot {
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;

    private stop = false;
    static robotAttr = {
        WheelR: 5,
        rH: 60,
        rW: 30,
        rSL: 20,
        rSW: 3
    };

    static RSLCos45 = Math.cos(Math.PI / 4) * Robot.robotAttr.rSL;

    dt = 0.01;

    position = { x: 150, y: 150, th:0 } as Position;
    speed = { right: 100, left: 100 } as Speed;
    delta = {dx:0,dy:0,dth:0} as DeltaPosition;
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
            const xCoord = previousPosition.x + d * Math.cos(th );
            const yCoord = previousPosition.y + d * Math.sin(th);
            previousPosition = { x: xCoord, y: yCoord, th };
            this.context.lineTo(xCoord, yCoord);
        };

        const sensHolder = (angle:number) => {
            moveAndTurn(Robot.robotAttr.rSL , position.th -Math.PI/4+angle);
            moveAndTurn(Robot.robotAttr.rSW, position.th+Math.PI/4 +angle);
            moveAndTurn(Robot.robotAttr.rSL , position.th +3*Math.PI/4+angle);
        }; 
        
        this.context.moveTo(previousPosition.x , previousPosition.y );
        moveAndTurn(Robot.robotAttr.rW/2 -2 , position.th + Math.PI/2 );
        sensHolder( Math.PI/2 );
        moveAndTurn(Robot.robotAttr.rH , position.th + Math.PI );
        sensHolder(Math.PI );
        moveAndTurn(Robot.robotAttr.rW , position.th -Math.PI/2 );
        sensHolder(-Math.PI/2 );
        moveAndTurn(Robot.robotAttr.rH , position.th );
        sensHolder(0 );
        moveAndTurn(Robot.robotAttr.rW/2 , position.th + Math.PI/2 );

        moveAndTurn(2,  position.th  );
        moveAndTurn(2, position.th + Math.PI/2 );
        moveAndTurn(2, position.th+ Math.PI );

        this.context.stroke();
        this.context.fill();

    }

    keepRobotInWindows():void {
        if(this.position.x >= 970) {
            this.delta.dx =  -this.delta.dx ;
            this.delta.dth =  -this.delta.dth ;
        }

        if(this.position.y >= 970 || this.position.y <= 5 ) {
            this.delta.dy =  -this.delta.dy ;
            this.delta.dth =  -this.delta.dth ;
        }
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
        moveAndTurn(Robot.robotAttr.rSW, -180 - 45 + position.th );
        moveAndTurn(Robot.robotAttr.rSL - 2, -45+ position.th );
        moveAndTurn((Robot.robotAttr.rW - 4) / 2,  position.th );
        moveAndTurn(4, 90+ position.th );
        moveAndTurn(4, 0+ position.th );
        moveAndTurn(4, -90+ position.th );
        moveAndTurn((Robot.robotAttr.rW - 4) / 2, 0+ position.th );
        moveAndTurn(Robot.robotAttr.rSL, 45+ position.th );
        moveAndTurn(Robot.robotAttr.rSW, -45+ position.th );
        moveAndTurn(Robot.robotAttr.rSL - 2, 22+ position.th );
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

    setPosition(position:Position): void {
        this.position = position;
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
        this.delta = this.stop? { dx: 0, dy: 0, dth: 0 }: this.kinematic(speed.left, speed.right);
        this.position.x += this.delta.dx;
        this.position.y += this.delta.dy;
        this.position.th += this.delta.dth;
        this.position.th %= 2*Math.PI;
        this.position.th = this.position.th > Math.PI ? (-2*Math.PI +this.position.th) : this.position.th;
    }

    kinematic(leftWeelSpeed: number, rightWheelSpeed: number): { dx: number, dy: number, dth: number } {
        const linearVelocity = (rightWheelSpeed + leftWeelSpeed) / 2;
        const angularVelocity = leftWeelSpeed-rightWheelSpeed;
        const dth =angularVelocity * this.dt *2* Math.PI* Robot.robotAttr.WheelR/ Robot.robotAttr.rW;
        // const theta = this.position.th + dth;
        const dx =linearVelocity * Math.cos(this.position.th) * this.dt * Robot.robotAttr.WheelR/2;
        const dy =linearVelocity * Math.sin(this.position.th) * this.dt * Robot.robotAttr.WheelR/2;

        return { dx, dy, dth };
    }

    getSensors():Array<Sensor> {
        return this.sonarSensors.calcSensorsPositions(this.getPosition());
    }

    setX(x:number) :void {
        this.position.x = x;
    }

    setY(y:number) :void {
        this.position.y = y;
    }

    setTh(th:number) :void {
        this.position.th = th;
    }

    toggleStop(){
        this.stop = !this.stop;
    }
}

export default new Robot();
