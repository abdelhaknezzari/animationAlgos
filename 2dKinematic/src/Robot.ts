import { Speed } from "./SpeedController";


export interface Position {
    x: number, // position coordinate x
    y: number, // position coordinate y
    th: number // theta orientation of robot in 2 Dimention
}


export class Robot {
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;

    counter = 0;

    robotAttr = {
        width: 50,
        height: 50,
        wheelH: 0.10,
        WheelW: 0.5,
        WheelR: 0.2,
    };
    dt = 0.01;
    position = { x: 130, y: 145, th: Math.PI / 2 } as Position;
    speed ={right:1000, left:1000} as Speed;


    constructor() {
        this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
        addEventListener('click', (event) => {
        });
        this.context = this.canvas.getContext("2d");
        // this.plotRobot(268, 234);
    }

    plotCircle(poistion:Position) {
        this.context.beginPath();
        this.context.arc(poistion.x, poistion.y, 15, 0, Math.PI * 2, true);
        this.context.closePath();
        this.context.fill();
    }

    plotRobot2( poistion:Position ) {
        let previousPosition = poistion;

        const moveAndTurn = (d:number,th:number) => {  
            const xCoord = previousPosition.x+d * Math.cos( th * Math.PI / 180);
            const yCoord = previousPosition.y+d * Math.sin( th * Math.PI / 180);
            previousPosition = {x:xCoord,y:yCoord,th};
            this.context.lineTo( xCoord , yCoord);
        };

  
        this.context.moveTo(poistion.x, poistion.y+2);
        moveAndTurn(50,90);
        moveAndTurn(20,-180-45);
        moveAndTurn(3,-180-90-45);
        moveAndTurn(18,-45);
        moveAndTurn(30,0);
        moveAndTurn(20,45);
        moveAndTurn(3,-45);
        moveAndTurn(18,180+45);

          moveAndTurn(50,-90);
          moveAndTurn(20,-45);
         moveAndTurn(3,-135);
         moveAndTurn(20,-225);
          moveAndTurn(30,180);
         moveAndTurn(20,-90-45);
         moveAndTurn(3,-180-45);
         moveAndTurn(20,-180-90-45);
  



        this.context.stroke();
         this.context.fill();
       

    }

    plotRobot(poistion:Position) {
        this.context.translate(poistion.x, poistion.y);
        this.context.rotate(poistion.th);
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

    getPosition():Position {
      return this.position;
    }

    getSpeed():Speed {
        return this.speed;
      }

    animate(speed:Speed): void {
        this.speed = speed;
        
        const delta = this.kinematic(speed.left ,speed.right);

        this.position.x += delta.dx;
        this.position.y += delta.dy;
        this.position.th += delta.dth;
            // this.plotRobot(this.position.x, this.position.y, this.position.theta);
        // this.plotCircle( this.position);
        this.plotRobot2(this.position);

    }

    kinematic(leftWeelSpeed: number, rightWheelSpeed: number): { dx: number, dy: number, dth: number } {
        const linearVelocity = (rightWheelSpeed + leftWeelSpeed)/2;
        const angularVelocity = rightWheelSpeed - leftWeelSpeed;
        const dth = (2 * Math.PI * this.robotAttr.WheelR / this.robotAttr.width) * angularVelocity * this.dt;
        const theta = this.position.th + dth;
        const dx = this.robotAttr.WheelR * linearVelocity * Math.cos(theta) * this.dt;
        const dy = this.robotAttr.WheelR * linearVelocity * Math.sin(theta) * this.dt;

        return { dx, dy, dth };
    }
}
