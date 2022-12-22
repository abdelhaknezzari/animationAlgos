class Boids {
    static numBoids = 200;
    static visualRange = 75;
    static DRAW_TRAIL = true;

    centeringFactor = 0.005;
    minDistance = 20;
    avoidFactor = 0.05;
    matchingFactor = 0.05;
    speedLimit = 15;
    margin = 100;
    turnFactor = 1;

    boids = [];
    width = 150;
    height = 150;

    initBoids() {
        this.boids = Array.from({ length: Boids.numBoids }, (x, i) => i)
            .map(num => {
                return {
                    x: Math.random() * this.width,
                    y: Math.random() * this.height,
                    dx: Math.random() * 5,
                    dy: Math.random() * 5,
                    history: [],
                };
            });
    }

    distance(boid1, boid2) {
        return Math.sqrt(Math.pow(boid1.x - boid2.x, 2) + Math.pow(boid1.y - boid2.y, 2));
    }

    sizeCanvas() {
        const canvas = document.getElementById("boids");
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    keepWithinBounds(boid) {
        if (boid.x < this.margin) {
            boid.dx += this.turnFactor;
        }
        if (boid.x > this.width - this.margin) {
            boid.dx -= this.turnFactor
        }
        if (boid.y < this.margin) {
            boid.dy += this.turnFactor;
        }
        if (boid.y > this.height - this.margin) {
            boid.dy -= this.turnFactor;
        }
    }

    flyTowardsCenter(boid) {
        const calc = this.boids
            .filter(otherBoid => this.distance(boid, otherBoid) < Boids.visualRange)
            .reduce((acc, curr) => {
                return {
                    numNeighbors: acc.numNeighbors + curr.numNeighbors + 1,
                    centerX: (acc.centerX + curr.centerX),
                    centerY: (acc.centerY + curr.centerY)
                };
            },
                {
                    centerX: 0,
                    centerY: 0,
                    numNeighbors: 0
                }
            );

        if (calc.numNeighbors) {
            boid.dx += (calc.centerX / calc.numNeighbors - boid.x) * this.centeringFactor;
            boid.dy += (calc.centerY / calc.numNeighbors - boid.y) * this.centeringFactor;
        }
    }

    avoidOthers(boid) {
        const calc = this.boids
            .filter(otherBoid => otherBoid !== boid && (this.distance(boid, otherBoid) < this.minDistance))
            .reduce((acc, curr) => {
                return {
                    moveX: acc.moveX + boid.x - curr.x,
                    moveY: acc.moveY + boid.y - curr.y
                };
            }, {
                moveX: 0,
                moveY: 0
            });

        boid.dx += calc.moveX * this.avoidFactor;
        boid.dy += calc.moveY * this.avoidFactor;
    }

    matchVelocity(boid) {
        const calc = this.boids
            .filter(otherBoid => this.distance(boid, otherBoid) < Boids.visualRange)
            .reduce((acc, curr) => {
                return {
                    numNeighbors: acc.numNeighbors + 1,
                    avgDX: (acc.avgDX + curr.dx),
                    avgDY: (acc.avgDY + curr.dy)
                };
            },
                {
                    numNeighbors: 0,
                    avgDX: 0,
                    avgDY: 0

                }
            );

        if (calc.numNeighbors) {
            boid.dx += (calc.avgDX / calc.numNeighbors - boid.dx) * this.matchingFactor;
            boid.dy += (calc.avgDY / calc.numNeighbors - boid.dy) * this.matchingFactor;
        }
    }

    limitSpeed(boid) {
        const speed = Math.sqrt(Math.pow(boid.dx, 2) + Math.pow(boid.dy, 2));
        if (speed > this.speedLimit) {
            boid.dx = (boid.dx / speed) * this.speedLimit;
            boid.dy = (boid.dy / speed) * this.speedLimit;
        }
    }


    drawBoid(ctx, boid) {
        const angle = Math.atan2(boid.dy, boid.dx);
        ctx.translate(boid.x, boid.y);
        ctx.rotate(angle);
        ctx.translate(-boid.x, -boid.y);
        ctx.fillStyle = "#558cf4";
        ctx.beginPath();
        ctx.moveTo(boid.x, boid.y);
        ctx.lineTo(boid.x - 15, boid.y + 5);
        ctx.lineTo(boid.x - 15, boid.y - 5);
        ctx.lineTo(boid.x, boid.y);
        ctx.fill();
        ctx.setTransform(1, 0, 0, 1, 0, 1);

        if (Boids.DRAW_TRAIL) {
            ctx.strokeStyle = "#558cf466";
            ctx.beginPath();
            ctx.moveTo(boid.history[0][0], boid.history[0][1]);
            for (const point of boid.history) {
                ctx.lineTo(point[0], point[1]);
            }
            ctx.stroke();
        }
    }

    clearCtx() {
        const ctx = document.getElementById("boids").getContext("2d");
        ctx.clearRect(0, 0, this.width, this.height);
        return ctx;
    }

    updatBoid(boid) {
        this.flyTowardsCenter(boid);
        this.avoidOthers(boid);
        this.matchVelocity(boid);
        this.limitSpeed(boid);
        this.keepWithinBounds(boid);

        boid.x += boid.dx;
        boid.y += boid.dy;
        boid.history.push([boid.x, boid.y])
        boid.history = boid.history.slice(-50);

    }

    animationLoop() {
        for (let boid of this.boids) {
            this.updatBoid(boid);
        }

        const ctx = this.clearCtx();

        for (let boid of this.boids) {
            this.drawBoid(ctx, boid);
        }

        window.requestAnimationFrame(() => { this.animationLoop(); });
    }

    load() {
        window.onload = () => {
            window.addEventListener("resize", () => { this.sizeCanvas(); }, false);
            window.addEventListener("pageshow", () => { this.sizeCanvas(); this.initBoids(); }, false);
            window.requestAnimationFrame(() => { this.animationLoop(); });
        };

    }



}

var boids = new Boids();
boids.load();
