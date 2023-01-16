/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Obstacles.ts":
/*!**************************!*\
  !*** ./src/Obstacles.ts ***!
  \**************************/
/*! exports provided: Obstacles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Obstacles", function() { return Obstacles; });
var Obstacles = /** @class */ (function () {
    function Obstacles() {
        this.canvas = document.getElementById('canvas');
        this.context = this.canvas.getContext("2d");
        this.generateObstacles();
    }
    Obstacles.prototype.generateObstacles = function () {
        var _this = this;
        this.walls = [
            Array.from({ length: this.canvas.height }, function (_, key) { return key; }).map(function (num) { return { x: 0, y: num }; }),
            Array.from({ length: this.canvas.height }, function (_, key) { return key; }).map(function (num) { return { x: _this.canvas.width, y: num }; }),
            Array.from({ length: this.canvas.width }, function (_, key) { return key; }).map(function (num) { return { x: num, y: _this.canvas.height }; }),
            Array.from({ length: this.canvas.width }, function (_, key) { return key; }).map(function (num) { return { x: num, y: 0 }; }),
            Array.from({ length: this.canvas.width * 0.15 }, function (_, key) { return key; }).map(function (num) { return { x: _this.canvas.height * 0.3, y: _this.canvas.height * 0.45 - num }; }),
            Array.from({ length: this.canvas.width * 0.15 }, function (_, key) { return key; }).map(function (num) { return { x: _this.canvas.height * 0.7, y: _this.canvas.height * 0.70 - num }; }),
            Array.from({ length: this.canvas.width * 0.11 }, function (_, key) { return key; }).map(function (num) { return { x: _this.canvas.height * 0.7, y: _this.canvas.height - num }; }),
            Array.from({ length: this.canvas.width * 0.7 }, function (_, key) { return key; }).map(function (num) { return { x: num, y: _this.canvas.height * 0.3 }; }),
            Array.from({ length: this.canvas.width * 0.7 }, function (_, key) { return key; }).map(function (num) { return { x: _this.canvas.width - num, y: _this.canvas.height * 0.7 }; })
        ];
    };
    Obstacles.prototype.calcDistancesFromSensors = function (sensors) {
        var _this = this;
        var wallsPoints = this.walls.reduce(function (prv, cur) { return prv.concat(cur); }, []);
        var sensDist = sensors.map(function (sensor) {
            var _a;
            return {
                d: (_a = wallsPoints.map(function (wallPoint) {
                    return {
                        x: wallPoint.x,
                        y: wallPoint.y,
                        d: _this.distanceBetweenRobotAndObstacle({ x: sensor.x, y: sensor.y, th: null }, wallPoint)
                    };
                }).sort(function (prv, cur) {
                    if (prv.d < cur.d) {
                        return -1;
                    }
                    else if (prv.d > cur.d) {
                        return 1;
                    }
                    else {
                        return 0;
                    }
                    ;
                })[0]) === null || _a === void 0 ? void 0 : _a.d,
                side: sensor.side
            };
        });
        return sensDist;
    };
    Obstacles.prototype.calcDistances = function (robotPosition) {
        var _this = this;
        return this.walls.reduce(function (prv, cur) { return prv.concat(cur); }, []).map(function (wallPoint) {
            return {
                x: wallPoint.x,
                y: wallPoint.y,
                d: _this.distanceBetweenRobotAndObstacle(robotPosition, wallPoint)
            };
        }).sort(function (prv, cur) {
            if (prv.d < cur.d) {
                return -1;
            }
            else if (prv.d > cur.d) {
                return 1;
            }
            else {
                return 0;
            }
            ;
        });
    };
    Obstacles.prototype.distanceBetweenRobotAndObstacle = function (robotPosition, point) {
        return Math.sqrt(Math.pow(robotPosition.x - point.x, 2) + Math.pow(robotPosition.y - point.y, 2));
    };
    Obstacles.prototype.show = function () {
        var _this = this;
        // this.calcDistances();
        this.walls.forEach(function (wall) { return wall.forEach(function (point) {
            _this.plotCircle(point);
        }); });
    };
    Obstacles.prototype.plotCircle = function (point) {
        this.context.beginPath();
        this.context.arc(point.x, point.y, Obstacles.rWall, 0, Math.PI * 2, true);
        this.context.closePath();
        this.context.fill();
    };
    Obstacles.rWall = 0.5;
    return Obstacles;
}());

/* harmony default export */ __webpack_exports__["default"] = (new Obstacles());


/***/ }),

/***/ "./src/PathGenerator.ts":
/*!******************************!*\
  !*** ./src/PathGenerator.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Robot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Robot */ "./src/Robot.ts");
/* harmony import */ var _SonarSensors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SonarSensors */ "./src/SonarSensors.ts");


var PathGenerator = /** @class */ (function () {
    function PathGenerator() {
        this.canvas = document.getElementById('canvas');
        this.context = this.canvas.getContext("2d");
    }
    PathGenerator.prototype.getRangeOfAngles = function (from, to, step) {
        return Array.from({ length: Math.ceil(Math.abs((to - from) / step)) }, function (x, i) { return i; }).map(function (indx) { return step > 0 ? from + indx * step : to + indx * step; });
    };
    PathGenerator.prototype.showFrontObstaclePathAvoidance = function (sensors, robotPosition) {
        var _this = this;
        var frontLeftDist = sensors.find(function (sens) { return sens.side === _SonarSensors__WEBPACK_IMPORTED_MODULE_1__["Sides"].frontLeft; }).d;
        var frontRightDist = sensors.find(function (sens) { return sens.side === _SonarSensors__WEBPACK_IMPORTED_MODULE_1__["Sides"].frontRight; }).d;
        var backLeftDist = sensors.find(function (sens) { return sens.side === _SonarSensors__WEBPACK_IMPORTED_MODULE_1__["Sides"].backLeft; }).d;
        var backRightDist = sensors.find(function (sens) { return sens.side === _SonarSensors__WEBPACK_IMPORTED_MODULE_1__["Sides"].backRight; }).d;
        this.context.fillText("frontLeftDist:" + frontLeftDist, 1, 10);
        this.context.fillText("backLeftDist:" + backLeftDist, 1, 30);
        this.context.fillText("frontRightDist:" + frontRightDist, 1, 50);
        this.context.fillText("backRightDist:" + backRightDist, 1, 70);
        this.context.fillText("Theta:" + robotPosition.th, 1, 90);
        if (backLeftDist <= 3 * _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].robotAttr.rW &&
            backRightDist <= 3 * _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].robotAttr.rW) {
            this.context.beginPath();
            if (robotPosition.th >= -Math.PI * 15 / 180 && robotPosition.th <= Math.PI * 15 / 180) {
                var currentColor = this.context.fillStyle;
                var arcX_1 = robotPosition.x;
                var arcY_1 = robotPosition.y + 1.5 * _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].robotAttr.rW;
                this.getRangeOfAngles(Math.PI / 2, 0, -0.02).forEach(function (angle) {
                    _this.plotCircle({
                        x: arcX_1 + 1.5 * _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].robotAttr.rW * Math.cos(angle),
                        y: arcY_1 + 1.5 * _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].robotAttr.rW * Math.sin(angle),
                        d: 0
                    });
                });
                this.context.fillStyle = currentColor;
            }
        }
    };
    PathGenerator.prototype.plotCircle = function (point) {
        this.context.beginPath();
        this.context.fillStyle = "green";
        this.context.arc(point.x, point.y, 2, 0, Math.PI * 2, true);
        this.context.closePath();
        this.context.fill();
    };
    return PathGenerator;
}());
/* harmony default export */ __webpack_exports__["default"] = (new PathGenerator());


/***/ }),

/***/ "./src/Robot.ts":
/*!**********************!*\
  !*** ./src/Robot.ts ***!
  \**********************/
/*! exports provided: Robot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Robot", function() { return Robot; });
/* harmony import */ var _SonarSensors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SonarSensors */ "./src/SonarSensors.ts");

var Robot = /** @class */ (function () {
    function Robot() {
        this.stop = false;
        this.dt = 0.01;
        this.position = { x: 150, y: 150, th: 0 };
        this.speed = { right: 100, left: 100 };
        this.delta = { dx: 0, dy: 0, dth: 0 };
        this.sonarSensors = new _SonarSensors__WEBPACK_IMPORTED_MODULE_0__["SonarSensors"]();
        this.canvas = document.getElementById('canvas');
        this.context = this.canvas.getContext("2d");
    }
    Robot.prototype.plotCircle = function (position) {
        this.context.beginPath();
        var defaultColor = this.context.fillStyle;
        this.context.fillStyle = "orange";
        this.context.arc(position.x, position.y, 3, 0, Math.PI * 2, true);
        this.context.closePath();
        this.context.fill();
        this.context.fillStyle = defaultColor;
    };
    Robot.prototype.plotRobot = function (position) {
        var _this = this;
        var previousPosition = position;
        var moveAndTurn = function (d, th) {
            var xCoord = previousPosition.x + d * Math.cos(th);
            var yCoord = previousPosition.y + d * Math.sin(th);
            previousPosition = { x: xCoord, y: yCoord, th: th };
            _this.context.lineTo(xCoord, yCoord);
        };
        var sensHolder = function (angle) {
            moveAndTurn(Robot.robotAttr.rSL, position.th - Math.PI / 4 + angle);
            moveAndTurn(Robot.robotAttr.rSW, position.th + Math.PI / 4 + angle);
            moveAndTurn(Robot.robotAttr.rSL, position.th + 3 * Math.PI / 4 + angle);
        };
        this.context.moveTo(previousPosition.x, previousPosition.y);
        moveAndTurn(Robot.robotAttr.rW / 2 - 2, position.th + Math.PI / 2);
        sensHolder(Math.PI / 2);
        moveAndTurn(Robot.robotAttr.rH, position.th + Math.PI);
        sensHolder(Math.PI);
        moveAndTurn(Robot.robotAttr.rW, position.th - Math.PI / 2);
        sensHolder(-Math.PI / 2);
        moveAndTurn(Robot.robotAttr.rH, position.th);
        sensHolder(0);
        moveAndTurn(Robot.robotAttr.rW / 2, position.th + Math.PI / 2);
        moveAndTurn(2, position.th);
        moveAndTurn(2, position.th + Math.PI / 2);
        moveAndTurn(2, position.th + Math.PI);
        this.context.stroke();
        this.context.fill();
    };
    Robot.prototype.keepRobotInWindows = function () {
        if (this.position.x >= 970) {
            this.delta.dx = -this.delta.dx;
            this.delta.dth = -this.delta.dth;
        }
        if (this.position.y >= 970 || this.position.y <= 5) {
            this.delta.dy = -this.delta.dy;
            this.delta.dth = -this.delta.dth;
        }
    };
    Robot.prototype.plotRobot2 = function (position) {
        var _this = this;
        var previousPosition = position;
        var moveAndTurn = function (d, th) {
            var xCoord = previousPosition.x + d * Math.cos(th * Math.PI / 180);
            var yCoord = previousPosition.y + d * Math.sin(th * Math.PI / 180);
            previousPosition = { x: xCoord, y: yCoord, th: th };
            _this.context.lineTo(xCoord, yCoord);
        };
        this.context.moveTo(previousPosition.x, previousPosition.y);
        moveAndTurn(Robot.robotAttr.rH, 90 + position.th);
        moveAndTurn(Robot.robotAttr.rSL, -180 - 45 + position.th);
        moveAndTurn(Robot.robotAttr.rSW, -180 - 45 + position.th);
        moveAndTurn(Robot.robotAttr.rSL - 2, -45 + position.th);
        moveAndTurn((Robot.robotAttr.rW - 4) / 2, position.th);
        moveAndTurn(4, 90 + position.th);
        moveAndTurn(4, 0 + position.th);
        moveAndTurn(4, -90 + position.th);
        moveAndTurn((Robot.robotAttr.rW - 4) / 2, 0 + position.th);
        moveAndTurn(Robot.robotAttr.rSL, 45 + position.th);
        moveAndTurn(Robot.robotAttr.rSW, -45 + position.th);
        moveAndTurn(Robot.robotAttr.rSL - 2, 22 + position.th);
        moveAndTurn(Robot.robotAttr.rH, -90 + position.th);
        moveAndTurn(Robot.robotAttr.rSL, -45 + position.th);
        moveAndTurn(Robot.robotAttr.rSW, -135 + position.th);
        moveAndTurn(Robot.robotAttr.rSL - 2, -225 + position.th);
        moveAndTurn(Robot.robotAttr.rW, 180 + position.th);
        moveAndTurn(Robot.robotAttr.rSL, -90 - 45 + position.th);
        moveAndTurn(Robot.robotAttr.rSW, -180 - 45 + position.th);
        moveAndTurn(Robot.robotAttr.rSL, -180 - 90 - 45 + position.th);
        this.context.stroke();
        this.context.fill();
    };
    Robot.prototype.getPosition = function () {
        return this.position;
    };
    Robot.prototype.setPosition = function (position) {
        this.position = position;
    };
    Robot.prototype.getSpeed = function () {
        return this.speed;
    };
    Robot.prototype.animate = function (speed) {
        this.speed = speed;
        this.calcNewPosition(speed);
        this.plotRobot(this.position);
        this.sonarSensors.show(this.position);
    };
    Robot.prototype.calcNewPosition = function (speed) {
        this.delta = this.stop ? { dx: 0, dy: 0, dth: 0 } : this.kinematic(speed.left, speed.right);
        this.position.x += this.delta.dx;
        this.position.y += this.delta.dy;
        this.position.th += this.delta.dth;
        this.position.th %= 2 * Math.PI;
        this.position.th = this.position.th > Math.PI ? (-2 * Math.PI + this.position.th) : this.position.th;
    };
    Robot.prototype.kinematic = function (leftWeelSpeed, rightWheelSpeed) {
        var linearVelocity = (rightWheelSpeed + leftWeelSpeed) / 2;
        var angularVelocity = leftWeelSpeed - rightWheelSpeed;
        var dth = angularVelocity * this.dt * 2 * Math.PI * Robot.robotAttr.WheelR / Robot.robotAttr.rW;
        // const theta = this.position.th + dth;
        var dx = linearVelocity * Math.cos(this.position.th) * this.dt * Robot.robotAttr.WheelR / 2;
        var dy = linearVelocity * Math.sin(this.position.th) * this.dt * Robot.robotAttr.WheelR / 2;
        return { dx: dx, dy: dy, dth: dth };
    };
    Robot.prototype.getSensors = function () {
        return this.sonarSensors.calcSensorsPositions(this.getPosition());
    };
    Robot.prototype.setX = function (x) {
        this.position.x = x;
    };
    Robot.prototype.setY = function (y) {
        this.position.y = y;
    };
    Robot.prototype.setTh = function (th) {
        this.position.th = th;
    };
    Robot.prototype.toggleStop = function () {
        this.stop = !this.stop;
    };
    Robot.robotAttr = {
        WheelR: 5,
        rH: 60,
        rW: 30,
        rSL: 20,
        rSW: 3
    };
    Robot.RSLCos45 = Math.cos(Math.PI / 4) * Robot.robotAttr.rSL;
    return Robot;
}());



/***/ }),

/***/ "./src/SonarSensors.ts":
/*!*****************************!*\
  !*** ./src/SonarSensors.ts ***!
  \*****************************/
/*! exports provided: Sides, SonarSensors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sides", function() { return Sides; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SonarSensors", function() { return SonarSensors; });
/* harmony import */ var _Robot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Robot */ "./src/Robot.ts");

var Sides;
(function (Sides) {
    Sides["frontLeft"] = "frontLeft";
    Sides["frontRight"] = "frontRight";
    Sides["backLeft"] = "backLeft";
    Sides["backRight"] = "backRight";
    Sides["middle"] = "middle";
    Sides["center"] = "center";
})(Sides || (Sides = {}));
var SonarSensors = /** @class */ (function () {
    function SonarSensors() {
        this.canvas = document.getElementById('canvas');
        this.context = this.canvas.getContext("2d");
    }
    SonarSensors.prototype.calDist = function (point1, point2) {
        return Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2));
    };
    SonarSensors.prototype.calAngle = function (point1, point2) {
        return Math.atan((point2.y - point1.y) / (point2.x - point1.x));
    };
    SonarSensors.prototype.calcSensorsPositions = function (robotPosition) {
        var _this = this;
        return [Sides.frontLeft, Sides.frontRight, Sides.backLeft, Sides.backRight, Sides.middle, Sides.center]
            .map(function (sensorSide) {
            if (sensorSide === Sides.center) {
                return {
                    x: robotPosition.x,
                    y: robotPosition.y,
                    side: sensorSide,
                };
            }
            if (sensorSide === Sides.middle) {
                return {
                    x: robotPosition.x,
                    y: robotPosition.y + _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].robotAttr.rH / 2,
                    side: sensorSide
                };
            }
            if (sensorSide === Sides.frontLeft) {
                return {
                    x: robotPosition.x - _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].RSLCos45 - _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].robotAttr.rW / 2 - 3,
                    y: robotPosition.y - _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].RSLCos45,
                    side: sensorSide
                };
            }
            if (sensorSide === Sides.frontRight) {
                return {
                    x: robotPosition.x + _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].RSLCos45 + _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].robotAttr.rW / 2,
                    y: robotPosition.y - _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].RSLCos45 + 1,
                    side: sensorSide
                };
            }
            if (sensorSide === Sides.backLeft) {
                return {
                    x: robotPosition.x - _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].RSLCos45 - _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].robotAttr.rW / 2 - 4,
                    y: robotPosition.y - _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].RSLCos45 + _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].robotAttr.rH + _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].robotAttr.rW,
                    side: sensorSide
                };
            }
            if (sensorSide === Sides.backRight) {
                return {
                    x: robotPosition.x + _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].RSLCos45 + _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].robotAttr.rW - _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].robotAttr.rW / 2 - 2,
                    y: robotPosition.y + _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].RSLCos45 + _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].robotAttr.rH + 3,
                    side: sensorSide
                };
            }
            return undefined;
        }).map(function (sens) {
            var sensCalc = sens;
            sensCalc.dc = _this.calDist(robotPosition, sensCalc);
            var angle = _this.calAngle(robotPosition, sensCalc) +
                (sens.side === Sides.frontLeft || sens.side === Sides.backLeft ? Math.PI : 0) +
                robotPosition.th + Math.PI / 2;
            sensCalc.x = robotPosition.x + sensCalc.dc * Math.cos(angle);
            sensCalc.y = robotPosition.y + sensCalc.dc * Math.sin(angle);
            return sensCalc;
        });
    };
    SonarSensors.prototype.show = function (robotPosition) {
        var _this = this;
        var currentColor = this.context.fillStyle;
        var sensors = this.calcSensorsPositions(robotPosition);
        sensors.forEach(function (sensor) {
            _this.plotCircle({ x: sensor.x, y: sensor.y, th: robotPosition.th });
        });
    };
    SonarSensors.prototype.plotCircle = function (poistion) {
        this.context.beginPath();
        // this.context.rotate(poistion.th*Math.PI/180);
        var defaultColor = this.context.fillStyle;
        this.context.fillStyle = "orange";
        this.context.arc(poistion.x, poistion.y, 3, 0, Math.PI * 2, true);
        this.context.closePath();
        this.context.fill();
        this.context.fillStyle = defaultColor;
    };
    return SonarSensors;
}());



/***/ }),

/***/ "./src/SpeedController.ts":
/*!********************************!*\
  !*** ./src/SpeedController.ts ***!
  \********************************/
/*! exports provided: SpeedController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeedController", function() { return SpeedController; });
/* harmony import */ var _SonarSensors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SonarSensors */ "./src/SonarSensors.ts");
/* harmony import */ var _Target__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Target */ "./src/Target.ts");


var SpeedController = /** @class */ (function () {
    function SpeedController() {
        this.iteration = 0;
    }
    SpeedController.prototype.calcWheelsSpeed3 = function (obstacleDistances, currentSpeed) {
        if (obstacleDistances.some(function (point) { return point.d < 10; })) {
            return {
                right: currentSpeed.right * (-1),
                left: currentSpeed.left * (-1),
            };
        }
        return currentSpeed;
    };
    SpeedController.prototype.calcWheelsSpeed2 = function (sensorObstDistances, currentSpeed) {
        var frontLeftDist = sensorObstDistances.find(function (sens) { return sens.side === _SonarSensors__WEBPACK_IMPORTED_MODULE_0__["Sides"].frontLeft; }).d;
        var frontRightDist = sensorObstDistances.find(function (sens) { return sens.side === _SonarSensors__WEBPACK_IMPORTED_MODULE_0__["Sides"].frontRight; }).d;
        var backLeftDist = sensorObstDistances.find(function (sens) { return sens.side === _SonarSensors__WEBPACK_IMPORTED_MODULE_0__["Sides"].backLeft; }).d;
        var backRightDist = sensorObstDistances.find(function (sens) { return sens.side === _SonarSensors__WEBPACK_IMPORTED_MODULE_0__["Sides"].backRight; }).d;
        var calcSpeed = { left: SpeedController.MaxSpeed, right: SpeedController.MaxSpeed };
        var coef = (1 - Math.exp(-0.04 * Math.sqrt(Math.pow(frontLeftDist - SpeedController.MaxDistance, 2) +
            Math.pow(frontRightDist - SpeedController.MaxDistance, 2) +
            Math.pow(backLeftDist - SpeedController.MaxDistance, 2) +
            Math.pow(backRightDist - SpeedController.MaxDistance, 2)) / SpeedController.MaxDistance));
        var speedMax = SpeedController.MaxSpeed * (1 - Math.exp(-0.8 * Math.sqrt(Math.pow(frontLeftDist - SpeedController.MaxDistance, 2) +
            Math.pow(frontRightDist - SpeedController.MaxDistance, 2) +
            Math.pow(backLeftDist - SpeedController.MaxDistance, 2) +
            Math.pow(backRightDist - SpeedController.MaxDistance, 2)) / SpeedController.MaxDistance));
        var angleCode = ((frontLeftDist < SpeedController.MaxDistance ? 1 : 0) << 3) |
            ((frontRightDist < SpeedController.MaxDistance ? 1 : 0) << 2) |
            ((backLeftDist < SpeedController.MaxDistance ? 1 : 0) << 1) |
            ((backRightDist < SpeedController.MaxDistance ? 1 : 0));
        var frontRightTurn = 1 - Math.exp(0.01 * Math.sqrt(Math.pow(frontRightDist - SpeedController.MaxDistance, 2) / SpeedController.MaxDistance));
        var frontLeftTurn = 1 - Math.exp(0.01 * Math.sqrt(Math.pow(frontLeftDist - SpeedController.MaxDistance, 2) / SpeedController.MaxDistance));
        var backRightTurn = 1 - Math.exp(0.01 * Math.sqrt(Math.pow(backRightDist - SpeedController.MaxDistance, 2) / SpeedController.MaxDistance));
        var backLeftTurn = 1 - Math.exp(0.01 * Math.sqrt(Math.pow(backLeftDist - SpeedController.MaxDistance, 2) / SpeedController.MaxDistance));
        var alpha = angleCode > 0 ? (frontRightTurn + backRightTurn) * 0.5 : 1;
        var beta = angleCode > 0 ? (frontLeftTurn + backLeftTurn) * 0.5 : 1;
        calcSpeed.left = SpeedController.MaxSpeed * alpha;
        calcSpeed.right = SpeedController.MaxSpeed * beta;
        return calcSpeed;
    };
    SpeedController.prototype.calcRepulseExpo = function (obstacleDist, factor) {
        if (factor === void 0) { factor = 0.01; }
        return obstacleDist < SpeedController.MaxDistance
            ? 1 - Math.exp(factor * Math.sqrt(Math.pow(obstacleDist - SpeedController.MaxDistance, 2) / SpeedController.MaxDistance))
            : 0;
    };
    SpeedController.prototype.calcRepulseCobined = function (obstacleDist, factor) {
        if (factor === void 0) { factor = 0.01; }
        return obstacleDist < SpeedController.MaxDistance
            // ? 1.5-1/( Math.abs(obstacleDist-SpeedController.MaxDistance*0.3) / SpeedController.MaxDistance)
            // ? Math.tanh( 0.034/( Math.abs(obstacleDist-SpeedController.MaxDistance) / SpeedController.MaxDistance))
            // ?0.03*Math.PI* Math.abs(obstacleDist-SpeedController.MaxDistance) / SpeedController.MaxDistance
            ? (0.4 * (1 - 1 / (1 + Math.exp(-0.001 * (obstacleDist - SpeedController.MaxDistance) / SpeedController.MaxDistance))) +
                0.6 * (1 - Math.exp(factor * Math.sqrt(Math.pow(obstacleDist - SpeedController.MaxDistance, 2) / SpeedController.MaxDistance)))) * 0.5
            : 0;
    };
    SpeedController.prototype.calcWheelsSpeed = function (sensorObstDistances, currentSpeed, robotPosition) {
        this.iteration += 1;
        var avoidObstacleCommand = this.avoidObstacle(sensorObstDistances, currentSpeed);
        var goToTargetCommand = this.goToTarget(robotPosition);
        var frontLeftDist = sensorObstDistances.find(function (sens) { return sens.side === _SonarSensors__WEBPACK_IMPORTED_MODULE_0__["Sides"].frontLeft; }).d;
        var frontRightDist = sensorObstDistances.find(function (sens) { return sens.side === _SonarSensors__WEBPACK_IMPORTED_MODULE_0__["Sides"].frontRight; }).d;
        var backLeftDist = sensorObstDistances.find(function (sens) { return sens.side === _SonarSensors__WEBPACK_IMPORTED_MODULE_0__["Sides"].backLeft; }).d;
        var backRightDist = sensorObstDistances.find(function (sens) { return sens.side === _SonarSensors__WEBPACK_IMPORTED_MODULE_0__["Sides"].backRight; }).d;
        return {
            left: avoidObstacleCommand.left * 0.5 + goToTargetCommand.left * 0.5,
            right: avoidObstacleCommand.right * 0.5 + goToTargetCommand.right * 0.5
        };
    };
    SpeedController.prototype.avoidObstacle = function (sensorObstDistances, currentSpeed) {
        var frontLeftDist = sensorObstDistances.find(function (sens) { return sens.side === _SonarSensors__WEBPACK_IMPORTED_MODULE_0__["Sides"].frontLeft; }).d;
        var frontRightDist = sensorObstDistances.find(function (sens) { return sens.side === _SonarSensors__WEBPACK_IMPORTED_MODULE_0__["Sides"].frontRight; }).d;
        var backLeftDist = sensorObstDistances.find(function (sens) { return sens.side === _SonarSensors__WEBPACK_IMPORTED_MODULE_0__["Sides"].backLeft; }).d;
        var backRightDist = sensorObstDistances.find(function (sens) { return sens.side === _SonarSensors__WEBPACK_IMPORTED_MODULE_0__["Sides"].backRight; }).d;
        var calcSpeed = { left: SpeedController.MaxSpeed / 2, right: SpeedController.MaxSpeed / 2 };
        var angleCode = ((frontLeftDist < SpeedController.MaxDistance ? 1 : 0) << 3) |
            ((frontRightDist < SpeedController.MaxDistance ? 1 : 0) << 2) |
            ((backLeftDist < SpeedController.MaxDistance ? 1 : 0) << 1) |
            ((backRightDist < SpeedController.MaxDistance ? 1 : 0));
        var frontRightTurn = this.calcRepulseCobined(frontRightDist);
        var frontLeftTurn = this.calcRepulseCobined(frontLeftDist);
        var backRightTurn = this.calcRepulseCobined(backRightDist);
        var backLeftTurn = this.calcRepulseCobined(backLeftDist);
        var obstIsOnFront = frontRightDist < SpeedController.MaxDistance
            && frontLeftDist < SpeedController.MaxDistance
            ? 1
            : 0;
        var obstIsOnBack = backRightDist < SpeedController.MaxDistance
            && backLeftDist < SpeedController.MaxDistance
            ? 1
            : 0;
        var obstIsOnRight = frontRightDist < SpeedController.MaxDistance &&
            frontLeftDist > SpeedController.MaxDistance ||
            backRightDist < SpeedController.MaxDistance
                && backLeftDist > SpeedController.MaxDistance
            ? 1
            : 0;
        var obstIsOnBackRight = backRightDist < SpeedController.MaxDistance &&
            frontLeftDist > SpeedController.MaxDistance &&
            backRightDist > SpeedController.MaxDistance &&
            backLeftDist > SpeedController.MaxDistance
            ? 2.9
            : 0;
        var obstIsOnBackLeft = backLeftDist < SpeedController.MaxDistance &&
            backRightDist > SpeedController.MaxDistance &&
            frontLeftDist > SpeedController.MaxDistance &&
            frontLeftDist > SpeedController.MaxDistance
            ? 2.9
            : 0;
        var obstIsOnLeft = frontLeftDist < SpeedController.MaxDistance &&
            frontRightDist > SpeedController.MaxDistance ||
            backLeftDist < SpeedController.MaxDistance &&
                backRightDist > SpeedController.MaxDistance
            ? 1
            : 0;
        var randEffectObsFr = (this.iteration % 10 === 0) && Math.random() > 0.5 && obstIsOnFront ? 1 : 0;
        var alpha = (frontRightTurn - backRightTurn) * obstIsOnRight + obstIsOnBackRight * backRightTurn + obstIsOnFront * (frontRightTurn + frontLeftTurn) * 0.5;
        var beta = (frontLeftTurn - backLeftTurn) * obstIsOnLeft + obstIsOnBackLeft * backLeftTurn;
        calcSpeed.left += SpeedController.MaxSpeed * 0.5 * alpha;
        calcSpeed.right += SpeedController.MaxSpeed * 0.5 * beta;
        this.lastDistanceToObstacles = sensorObstDistances;
        return calcSpeed;
    };
    SpeedController.prototype.calDist2Target = function (targetPosition, robotPosition) {
        return Math.sqrt(Math.pow(targetPosition.x - robotPosition.x, 2) + Math.pow(targetPosition.y - robotPosition.y, 2));
    };
    SpeedController.prototype.goToTarget = function (robotPosition) {
        var targetPosition = _Target__WEBPACK_IMPORTED_MODULE_1__["default"].getPosition();
        var targetDistance = this.calDist2Target(targetPosition, robotPosition);
        var linearSpeed = targetDistance < 1.3 * SpeedController.MaxDistance ? targetDistance * (Math.exp(-0.01 * targetDistance / SpeedController.MaxDistance)) : 0;
        var angularSpeed = Math.atan2((targetPosition.y - robotPosition.y), (targetPosition.x - robotPosition.x)) - robotPosition.th;
        return { right: linearSpeed * Math.cos(angularSpeed), left: linearSpeed * Math.sin(angularSpeed) };
    };
    SpeedController.MaxSpeed = 700;
    SpeedController.MaxDistance = 80;
    return SpeedController;
}());



/***/ }),

/***/ "./src/Target.ts":
/*!***********************!*\
  !*** ./src/Target.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (new (/** @class */ (function () {
    function Target() {
        this.target = { x: 490, y: 490, th: 0 };
        this.canvas = document.getElementById('canvas');
        this.context = this.canvas.getContext("2d");
    }
    Target.prototype.showTarget = function () {
        this.context.beginPath();
        var defaultColor = this.context.fillStyle;
        this.context.fillStyle = "blue";
        this.context.arc(this.target.x, this.target.y, 3, 0, Math.PI * 2, true);
        this.context.closePath();
        this.context.fill();
        this.context.fillStyle = defaultColor;
    };
    Target.prototype.getPosition = function () {
        return this.target;
    };
    return Target;
}())));


/***/ }),

/***/ "./src/World.ts":
/*!**********************!*\
  !*** ./src/World.ts ***!
  \**********************/
/*! exports provided: World */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "World", function() { return World; });
/* harmony import */ var _Obstacles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Obstacles */ "./src/Obstacles.ts");
/* harmony import */ var _PathGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PathGenerator */ "./src/PathGenerator.ts");
/* harmony import */ var _Robot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Robot */ "./src/Robot.ts");
/* harmony import */ var _SpeedController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SpeedController */ "./src/SpeedController.ts");
/* harmony import */ var _Target__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Target */ "./src/Target.ts");





var World = /** @class */ (function () {
    function World() {
        this.robot = new _Robot__WEBPACK_IMPORTED_MODULE_2__["Robot"]();
        this.obstacles = new _Obstacles__WEBPACK_IMPORTED_MODULE_0__["Obstacles"]();
        this.conroller = new _SpeedController__WEBPACK_IMPORTED_MODULE_3__["SpeedController"]();
        this.canvas = document.getElementById('canvas');
        this.context = this.canvas.getContext("2d");
    }
    World.prototype.animate = function () {
        var _this = this;
        this.clear();
        var distances = this.obstacles.calcDistances(this.robot.getPosition());
        var sensorDistances = this.obstacles.calcDistancesFromSensors(this.robot.getSensors());
        var speed = this.conroller.calcWheelsSpeed(sensorDistances, this.robot.getSpeed(), this.robot.getPosition());
        this.robot.animate(speed);
        this.obstacles.show();
        _PathGenerator__WEBPACK_IMPORTED_MODULE_1__["default"].showFrontObstaclePathAvoidance(sensorDistances, this.robot.getPosition());
        _Target__WEBPACK_IMPORTED_MODULE_4__["default"].showTarget();
        window.requestAnimationFrame(function () { _this.animate(); });
    };
    World.prototype.clear = function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };
    World.prototype.handleEvent = function (event) {
        this.clear();
        switch (event.currentTarget.getAttribute("id")) {
            case "right": {
                this.robot.animate({ right: 160, left: 150 });
                break;
            }
            case "left": {
                this.robot.animate({ right: 150, left: 160 });
                break;
            }
            case "forward": {
                this.robot.animate({ right: 160, left: 160 });
                break;
            }
            case "backward": {
                this.robot.animate({ right: -160, left: -160 });
                break;
            }
            case "stop": {
                this.robot.toggleStop();
                break;
            }
            case "step": {
                this.clear();
                var distances = this.obstacles.calcDistances(this.robot.getPosition());
                var sensorDistances = this.obstacles.calcDistancesFromSensors(this.robot.getSensors());
                var speed = this.conroller.calcWheelsSpeed(sensorDistances, this.robot.getSpeed(), this.robot.getPosition());
                this.robot.animate(speed);
                this.obstacles.show();
                _PathGenerator__WEBPACK_IMPORTED_MODULE_1__["default"].showFrontObstaclePathAvoidance(sensorDistances, this.robot.getPosition());
                break;
            }
            case "start": {
                this.clear();
                var distances = this.obstacles.calcDistances(this.robot.getPosition());
                var sensorDistances = this.obstacles.calcDistancesFromSensors(this.robot.getSensors());
                var speed = this.conroller.calcWheelsSpeed2(sensorDistances, this.robot.getSpeed());
                this.robot.animate(speed);
                this.obstacles.show();
                break;
            }
            case "x": {
                this.robot.setX(parseFloat(event.currentTarget.value));
                break;
            }
            case "y": {
                this.robot.setY(parseFloat(event.currentTarget.value));
                break;
            }
            case "th": {
                this.robot.setTh(parseFloat(event.currentTarget.value));
                break;
            }
        }
        this.obstacles.show();
    };
    return World;
}());



/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _World__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./World */ "./src/World.ts");

var world = new _World__WEBPACK_IMPORTED_MODULE_0__["World"]();
["right", "left", "forward", "backward", "step", "stop"].forEach(function (button) {
    document.getElementById(button).addEventListener("click", function (event) {
        world.handleEvent(event);
    });
});
["x", "y", "th"].forEach(function (input) {
    document.getElementById(input).addEventListener("change", function (event) {
        world.handleEvent(event);
    });
});
world.animate();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL09ic3RhY2xlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUGF0aEdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUm9ib3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NvbmFyU2Vuc29ycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU3BlZWRDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9UYXJnZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1dvcmxkLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDakVBO0FBQUE7QUFBQTtJQVFJO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBc0IsQ0FBQztRQUNyRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxxQ0FBaUIsR0FBakI7UUFBQSxpQkFZQztRQVhHLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUUsVUFBQyxDQUFDLEVBQUUsR0FBRyxJQUFLLFVBQUcsRUFBSCxDQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsYUFBRyxJQUFNLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBWTtZQUM5RyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUUsVUFBQyxDQUFDLEVBQUUsR0FBRyxJQUFLLFVBQUcsRUFBSCxDQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsYUFBRyxJQUFNLE9BQU8sRUFBRSxDQUFDLEVBQUUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFZO1lBQy9ILEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUcsRUFBRSxVQUFDLENBQUMsRUFBRSxHQUFHLElBQUssVUFBRyxFQUFILENBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxhQUFHLElBQU0sT0FBTyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQVk7WUFDL0gsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRyxFQUFFLFVBQUMsQ0FBQyxFQUFFLEdBQUcsSUFBSyxVQUFHLEVBQUgsQ0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLGFBQUcsSUFBTSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQVk7WUFDOUcsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBQyxJQUFJLEVBQUMsRUFBRSxVQUFDLENBQUMsRUFBRSxHQUFHLElBQUssVUFBRyxFQUFILENBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxhQUFHLElBQU0sT0FBTyxFQUFFLENBQUMsRUFBRSxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBQyxHQUFHLEVBQUcsQ0FBQyxFQUFFLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFDLElBQUksR0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBWTtZQUNoSyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFDLElBQUksRUFBQyxFQUFFLFVBQUMsQ0FBQyxFQUFFLEdBQUcsSUFBSyxVQUFHLEVBQUgsQ0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLGFBQUcsSUFBTSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFDLEdBQUcsRUFBRyxDQUFDLEVBQUUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUMsSUFBSSxHQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFZO1lBQ2hLLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUMsSUFBSSxFQUFDLEVBQUUsVUFBQyxDQUFDLEVBQUUsR0FBRyxJQUFLLFVBQUcsRUFBSCxDQUFHLENBQUMs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LENBQUMsR0FBRyxHQUFHLEVBQUUsR0FBRSxRQUFRLENBQUMsRUFBRSxDQUFFLENBQUM7UUFDMUQsV0FBVyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsR0FBRyxRQUFRLENBQUMsRUFBRSxDQUFFLENBQUM7UUFDM0QsV0FBVyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRSxRQUFRLENBQUMsRUFBRSxDQUFFLENBQUM7UUFDeEQsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUUsQ0FBQztRQUN6RCxXQUFXLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRSxRQUFRLENBQUMsRUFBRSxDQUFFLENBQUM7UUFDakMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBRSxDQUFDO1FBQ2hDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBRSxDQUFDO1FBQ2xDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBRSxDQUFDO1FBQzNELFdBQVcsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxFQUFFLEdBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBRSxDQUFDO1FBQ25ELFdBQVcsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRSxRQUFRLENBQUMsRUFBRSxDQUFFLENBQUM7UUFDcEQsV0FBVyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBRSxDQUFD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UyxHQUFHLENBQUMsQ0FBQyxhQUFhLEdBQUcsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUUsQ0FBQyxDQUFDLGNBQWMsR0FBRyxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3RCxDQUFDLENBQUMsWUFBWSxHQUFHLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNELENBQUMsQ0FBQyxhQUFhLEdBQUcsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTVELElBQU0sY0FBYyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFHLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEdBQUcsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDL0ksSUFBTSxhQUFhLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUcsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsR0FBRyxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUM3SSxJQUFNLGFBQWEsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxHQUFHLGVB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OlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gXCIuL1JvYm90XCI7XG5pbXBvcnQgeyBTZW5zb3IsIFNpZGVzIH0gZnJvbSBcIi4vU29uYXJTZW5zb3JzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9pbnRNaW5pbXVtIHtcbiAgICB4OiBudW1iZXIsIC8vIHBvc2l0aW9uIGNvb3JkaW5hdGUgeFxuICAgIHk6IG51bWJlciwgLy8gcG9zaXRpb24gY29vcmRpbmF0ZSB5XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9pbnQgZXh0ZW5kcyBQb2ludE1pbmltdW0ge1xuICAgIGQ6bnVtYmVyIC8vIGRpc3RhbmNlIGZyb20gcm9ib3Rcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZW5zb3JEaXN0YW5jZSB7XG4gICAgc2lkZTogU2lkZXMsXG4gICAgZDpudW1iZXIgLy8gZGlzdGFuY2UgZnJvbSByb2JvdFxufVxuXG5leHBvcnQgY2xhc3MgT2JzdGFjbGVzIHtcbiAgICBwcml2YXRlIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgcHJpdmF0ZSBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG5cblxuICAgIHdhbGxzOiBBcnJheTxBcnJheTxQb2ludD4+O1xuICAgIG9ic3RhY2xlczogQXJyYXk8UG9pbnQ+O1xuICAgIHN0YXRpYyByV2FsbCA9IDAuNTtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJykgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZU9ic3RhY2xlcygpO1xuICAgIH1cblxuICAgIGdlbmVyYXRlT2JzdGFjbGVzKCkge1xuICAgICAgICB0aGlzLndhbGxzID0gW1xuICAgICAgICAgICAgQXJyYXkuZnJvbSh7IGxlbmd0aDogdGhpcy5jYW52YXMuaGVpZ2h0IH0sIChfLCBrZXkpID0+IGtleSkubWFwKG51bSA9PiB7IHJldHVybiB7IHg6IDAsIHk6IG51bX07IH0pIGFzIFtQb2ludF0sXG4gICAgICAgICAgICBBcnJheS5mcm9tKHsgbGVuZ3RoOiB0aGlzLmNhbnZhcy5oZWlnaHQgfSwgKF8sIGtleSkgPT4ga2V5KS5tYXAobnVtID0+IHsgcmV0dXJuIHsgeDogdGhpcy5jYW52YXMud2lkdGgsIHk6IG51bSB9OyB9KSBhcyBbUG9pbnRdLFxuICAgICAgICAgICAgQXJyYXkuZnJvbSh7IGxlbmd0aDogdGhpcy5jYW52YXMud2lkdGggIH0sIChfLCBrZXkpID0+IGtleSkubWFwKG51bSA9PiB7IHJldHVybiB7IHg6IG51bSwgeTogdGhpcy5jYW52YXMuaGVpZ2h0fTsgfSkgYXMgW1BvaW50XSxcbiAgICAgICAgICAgIEFycmF5LmZyb20oeyBsZW5ndGg6IHRoaXMuY2FudmFzLndpZHRoICB9LCAoXywga2V5KSA9PiBrZXkpLm1hcChudW0gPT4geyByZXR1cm4geyB4OiBudW0sIHk6IDB9OyB9KSBhcyBbUG9pbnRdLFxuICAgICAgICAgICAgQXJyYXkuZnJvbSh7IGxlbmd0aDogdGhpcy5jYW52YXMud2lkdGgqMC4xNX0sIChfLCBrZXkpID0+IGtleSkubWFwKG51bSA9PiB7IHJldHVybiB7IHg6IHRoaXMuY2FudmFzLmhlaWdodCowLjMgLCB5OiB0aGlzLmNhbnZhcy5oZWlnaHQqMC40NS1udW0gfTsgfSkgYXMgW1BvaW50XSxcbiAgICAgICAgICAgIEFycmF5LmZyb20oeyBsZW5ndGg6IHRoaXMuY2FudmFzLndpZHRoKjAuMTV9LCAoXywga2V5KSA9PiBrZXkpLm1hcChudW0gPT4geyByZXR1cm4geyB4OiB0aGlzLmNhbnZhcy5oZWlnaHQqMC43ICwgeTogdGhpcy5jYW52YXMuaGVpZ2h0KjAuNzAtbnVtIH07IH0pIGFzIFtQb2ludF0sXG4gICAgICAgICAgICBBcnJheS5mcm9tKHsgbGVuZ3RoOiB0aGlzLmNhbnZhcy53aWR0aCowLjExfSwgKF8sIGtleSkgPT4ga2V5KS5tYXAobnVtID0+IHsgcmV0dXJuIHsgeDogdGhpcy5jYW52YXMuaGVpZ2h0KjAuNyAsIHk6IHRoaXMuY2FudmFzLmhlaWdodC1udW0gfTsgfSkgYXMgW1BvaW50XSxcbiAgICAgICAgICAgIEFycmF5LmZyb20oeyBsZW5ndGg6IHRoaXMuY2FudmFzLndpZHRoKjAuN30sIChfLCBrZXkpID0+IGtleSkubWFwKG51bSA9PiB7IHJldHVybiB7IHg6IG51bSwgeTogdGhpcy5jYW52YXMuaGVpZ2h0KjAuMyB9OyB9KSBhcyBbUG9pbnRdLFxuICAgICAgICAgICAgQXJyYXkuZnJvbSh7IGxlbmd0aDogdGhpcy5jYW52YXMud2lkdGgqMC43fSwgKF8sIGtleSkgPT4ga2V5KS5tYXAobnVtID0+IHsgcmV0dXJuIHsgeDogdGhpcy5jYW52YXMud2lkdGggLSBudW0sIHk6IHRoaXMuY2FudmFzLmhlaWdodCowLjcgfTsgfSkgYXMgW1BvaW50XVxuICAgICAgICBdO1xuICAgIH1cblxuICAgICBjYWxjRGlzdGFuY2VzRnJvbVNlbnNvcnMoc2Vuc29yczpTZW5zb3JbXSk6U2Vuc29yRGlzdGFuY2VbXSB7XG4gICAgICAgIGNvbnN0IHdhbGxzUG9pbnRzID0gdGhpcy53YWxscy5yZWR1Y2UoIChwcnYsY3VyKSA9PiBwcnYuY29uY2F0KGN1ciksW10gKTtcbiAgICAgICAgY29uc3Qgc2Vuc0Rpc3QgPSBzZW5zb3JzLm1hcChcbiAgICAgICAgICAgIHNlbnNvciA9PiBcbiAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBkOndhbGxzUG9pbnRzLm1hcChcbiAgICAgICAgICAgICAgICAgICAgd2FsbFBvaW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6d2FsbFBvaW50LngsXG4gICAgICAgICAgICAgICAgICAgICAgICB5OndhbGxQb2ludC55LFxuICAgICAgICAgICAgICAgICAgICAgICAgZDogdGhpcy5kaXN0YW5jZUJldHdlZW5Sb2JvdEFuZE9ic3RhY2xlKHt4OnNlbnNvci54LHk6c2Vuc29yLnksdGg6bnVsbCB9LHdhbGxQb2ludCkgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgfSBhcyBQb2ludDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICkuc29ydCggKHBydixjdXIpID0+ICB7XG4gICAgICAgICAgICAgICAgICAgIGlmKCBwcnYuZCA8IGN1ci5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiggcHJ2LmQgPiBjdXIuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KVswXT8uZCxcbiAgICAgICAgICAgICAgICBzaWRlOnNlbnNvci5zaWRlXG4gICAgICAgICAgICAgfSBhcyBTZW5zb3JEaXN0YW5jZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHNlbnNEaXN0O1xuICAgICB9XG5cbiAgICBjYWxjRGlzdGFuY2VzKCByb2JvdFBvc2l0aW9uOlBvc2l0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLndhbGxzLnJlZHVjZSggKHBydixjdXIpID0+IHBydi5jb25jYXQoY3VyKSxbXSApLm1hcChcbiAgICAgICAgICAgIHdhbGxQb2ludCA9PiB7XG4gICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHg6d2FsbFBvaW50LngsXG4gICAgICAgICAgICAgICAgeTp3YWxsUG9pbnQueSxcbiAgICAgICAgICAgICAgICBkOiB0aGlzLmRpc3RhbmNlQmV0d2VlblJvYm90QW5kT2JzdGFjbGUocm9ib3RQb3NpdGlvbix3YWxsUG9pbnQpICAgICAgXG4gICAgICAgICAgICAgICB9IGFzIFBvaW50O1xuICAgICAgICAgICAgfVxuICAgICAgICApLnNvcnQoIChwcnYsY3VyKSA9PiAge1xuICAgICAgICAgICAgaWYoIHBydi5kIDwgY3VyLmQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICB9IGVsc2UgaWYoIHBydi5kID4gY3VyLmQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkaXN0YW5jZUJldHdlZW5Sb2JvdEFuZE9ic3RhY2xlKCByb2JvdFBvc2l0aW9uOlBvc2l0aW9uLHBvaW50OlBvaW50KXtcbiAgICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KCBNYXRoLnBvdyhyb2JvdFBvc2l0aW9uLngtcG9pbnQueCwyKSArIE1hdGgucG93KHJvYm90UG9zaXRpb24ueS1wb2ludC55LDIpKTtcbiAgICB9XG5cbiAgICBzaG93KCkge1xuICAgICAgICAvLyB0aGlzLmNhbGNEaXN0YW5jZXMoKTtcbiAgICAgICAgdGhpcy53YWxscy5mb3JFYWNoKHdhbGwgPT4gd2FsbC5mb3JFYWNoKCBwb2ludCA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsb3RDaXJjbGUocG9pbnQpO1xuICAgICAgICB9ICkpO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcGxvdENpcmNsZShwb2ludCA6UG9pbnQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmNvbnRleHQuYXJjKHBvaW50LngsIHBvaW50LnksIE9ic3RhY2xlcy5yV2FsbCwgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xuICAgICAgICB0aGlzLmNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsKCk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBPYnN0YWNsZXMoKTsiLCJpbXBvcnQgeyBQb2ludCwgU2Vuc29yRGlzdGFuY2UgfSBmcm9tIFwiLi9PYnN0YWNsZXNcIjtcbmltcG9ydCB7IFBvc2l0aW9uLCBSb2JvdCB9IGZyb20gXCIuL1JvYm90XCI7XG5pbXBvcnQgeyBTZW5zb3IsIFNpZGVzIH0gZnJvbSBcIi4vU29uYXJTZW5zb3JzXCI7XG5cbmNsYXNzIFBhdGhHZW5lcmF0b3Ige1xuICAgIHByaXZhdGUgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICBwcml2YXRlIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgfVxuXG4gICAgZ2V0UmFuZ2VPZkFuZ2xlcyhmcm9tOiBudW1iZXIsIHRvOiBudW1iZXIsIHN0ZXA6IG51bWJlcik6IG51bWJlcltdIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oeyBsZW5ndGg6IE1hdGguY2VpbChNYXRoLmFicygodG8gLSBmcm9tKSAvIHN0ZXApKSB9LCAoeCwgaSkgPT4gaSkubWFwKFxuICAgICAgICAgICAgaW5keCA9PiBzdGVwID4gMCA/IGZyb20gKyBpbmR4ICogc3RlcCA6IHRvICsgaW5keCAqIHN0ZXBcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzaG93RnJvbnRPYnN0YWNsZVBhdGhBdm9pZGFuY2Uoc2Vuc29yczogU2Vuc29yRGlzdGFuY2VbXSwgcm9ib3RQb3NpdGlvbjogUG9zaXRpb24pIHtcbiAgICAgICAgY29uc3QgZnJvbnRMZWZ0RGlzdCA9IHNlbnNvcnMuZmluZChzZW5zID0+IHNlbnMuc2lkZSA9PT0gU2lkZXMuZnJvbnRMZWZ0KS5kO1xuICAgICAgICBjb25zdCBmcm9udFJpZ2h0RGlzdCA9IHNlbnNvcnMuZmluZChzZW5zID0+IHNlbnMuc2lkZSA9PT0gU2lkZXMuZnJvbnRSaWdodCkuZDtcbiAgICAgICAgY29uc3QgYmFja0xlZnREaXN0ID0gc2Vuc29ycy5maW5kKHNlbnMgPT4gc2Vucy5zaWRlID09PSBTaWRlcy5iYWNrTGVmdCkuZDtcbiAgICAgICAgY29uc3QgYmFja1JpZ2h0RGlzdCA9IHNlbnNvcnMuZmluZChzZW5zID0+IHNlbnMuc2lkZSA9PT0gU2lkZXMuYmFja1JpZ2h0KS5kO1xuXG5cbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxUZXh0KGBmcm9udExlZnREaXN0OiR7ZnJvbnRMZWZ0RGlzdH1gLCAxLCAxMCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsVGV4dChgYmFja0xlZnREaXN0OiR7YmFja0xlZnREaXN0fWAsIDEsIDMwKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxUZXh0KGBmcm9udFJpZ2h0RGlzdDoke2Zyb250UmlnaHREaXN0fWAsIDEsIDUwKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxUZXh0KGBiYWNrUmlnaHREaXN0OiR7YmFja1JpZ2h0RGlzdH1gLCAxLCA3MCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsVGV4dChgVGhldGE6JHtyb2JvdFBvc2l0aW9uLnRofWAsIDEsIDkwKTtcblxuICAgICAgICBpZiAoYmFja0xlZnREaXN0IDw9IDMqUm9ib3Qucm9ib3RBdHRyLnJXICYmXG4gICAgICAgICAgICBiYWNrUmlnaHREaXN0IDw9IDMqUm9ib3Qucm9ib3RBdHRyLnJXKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBpZiAocm9ib3RQb3NpdGlvbi50aCA+PSAtTWF0aC5QSSoxNS8xODAgJiYgcm9ib3RQb3NpdGlvbi50aCA8PSBNYXRoLlBJKjE1LzE4MCkge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudENvbG9yID0gdGhpcy5jb250ZXh0LmZpbGxTdHlsZTtcbiAgICAgICAgICAgICAgICBjb25zdCBhcmNYID0gcm9ib3RQb3NpdGlvbi54O1xuICAgICAgICAgICAgICAgIGNvbnN0IGFyY1kgPSByb2JvdFBvc2l0aW9uLnkgKyAxLjUgKiBSb2JvdC5yb2JvdEF0dHIuclc7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmdldFJhbmdlT2ZBbmdsZXMoTWF0aC5QSSAvIDIsIDAsIC0wLjAyKS5mb3JFYWNoKGFuZ2xlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbG90Q2lyY2xlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IGFyY1ggKyAxLjUgKiBSb2JvdC5yb2JvdEF0dHIuclcgKiBNYXRoLmNvcyhhbmdsZSksXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBhcmNZICsgMS41ICogUm9ib3Qucm9ib3RBdHRyLnJXICogTWF0aC5zaW4oYW5nbGUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgZDogMFxuICAgICAgICAgICAgICAgICAgICB9IGFzIFBvaW50KTtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBjdXJyZW50Q29sb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwbG90Q2lyY2xlKHBvaW50OiBQb2ludCkge1xuICAgICAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBcImdyZWVuXCI7XG4gICAgICAgIHRoaXMuY29udGV4dC5hcmMocG9pbnQueCwgcG9pbnQueSwgMiwgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xuICAgICAgICB0aGlzLmNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsKCk7XG5cbiAgICB9XG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBuZXcgUGF0aEdlbmVyYXRvcigpO1xuIiwiaW1wb3J0IHsgU3BlZWQgfSBmcm9tIFwiLi9TcGVlZENvbnRyb2xsZXJcIjtcbmltcG9ydCB7IFBvaW50IH0gZnJvbSBcIi4vT2JzdGFjbGVzXCI7XG5pbXBvcnQgeyBTZW5zb3IsIFNvbmFyU2Vuc29ycyB9IGZyb20gXCIuL1NvbmFyU2Vuc29yc1wiO1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9zaXRpb24ge1xuICAgIHg6IG51bWJlciwgLy8gcG9zaXRpb24gY29vcmRpbmF0ZSB4XG4gICAgeTogbnVtYmVyLCAvLyBwb3NpdGlvbiBjb29yZGluYXRlIHlcbiAgICB0aDogbnVtYmVyIC8vIHRoZXRhIG9yaWVudGF0aW9uIG9mIHJvYm90IGluIDIgRGltZW50aW9uXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVsdGFQb3NpdGlvbiB7XG4gICAgZHg6IG51bWJlciwgLy8gZGVsdGEgY29vcmRpbmF0ZSB4XG4gICAgZHk6IG51bWJlciwgLy8gc2VsdGEgY29vcmRpbmF0ZSB5XG4gICAgZHRoOiBudW1iZXIgLy8gZGVsdGEgdGhldGEgb3JpZW50YXRpb24gb2Ygcm9ib3QgaW4gMiBEaW1lbnRpb25cbn1cblxuZXhwb3J0IGNsYXNzIFJvYm90IHtcbiAgICBwcml2YXRlIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgcHJpdmF0ZSBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG5cbiAgICBwcml2YXRlIHN0b3AgPSBmYWxzZTtcbiAgICBzdGF0aWMgcm9ib3RBdHRyID0ge1xuICAgICAgICBXaGVlbFI6IDUsXG4gICAgICAgIHJIOiA2MCxcbiAgICAgICAgclc6IDMwLFxuICAgICAgICByU0w6IDIwLFxuICAgICAgICByU1c6IDNcbiAgICB9O1xuXG4gICAgc3RhdGljIFJTTENvczQ1ID0gTWF0aC5jb3MoTWF0aC5QSSAvIDQpICogUm9ib3Qucm9ib3RBdHRyLnJTTDtcblxuICAgIGR0ID0gMC4wMTtcblxuICAgIHBvc2l0aW9uID0geyB4OiAxNTAsIHk6IDE1MCwgdGg6MCB9IGFzIFBvc2l0aW9uO1xuICAgIHNwZWVkID0geyByaWdodDogMTAwLCBsZWZ0OiAxMDAgfSBhcyBTcGVlZDtcbiAgICBkZWx0YSA9IHtkeDowLGR5OjAsZHRoOjB9IGFzIERlbHRhUG9zaXRpb247XG4gICAgc29uYXJTZW5zb3JzPW5ldyBTb25hclNlbnNvcnMoKTtcblxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xuICAgICAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgfVxuXG4gICAgcGxvdENpcmNsZShwb3NpdGlvbjogUG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICBjb25zdCBkZWZhdWx0Q29sb3IgPSB0aGlzLmNvbnRleHQuZmlsbFN0eWxlO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gXCJvcmFuZ2VcIjtcbiAgICAgICAgdGhpcy5jb250ZXh0LmFyYyhwb3NpdGlvbi54LCBwb3NpdGlvbi55LCAzLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGwoKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGRlZmF1bHRDb2xvcjtcbiAgICB9XG5cbiAgICBwbG90Um9ib3QocG9zaXRpb246IFBvc2l0aW9uKSB7XG4gICAgICAgIGxldCBwcmV2aW91c1Bvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgIGNvbnN0IG1vdmVBbmRUdXJuID0gKGQ6IG51bWJlciwgdGg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgeENvb3JkID0gcHJldmlvdXNQb3NpdGlvbi54ICsgZCAqIE1hdGguY29zKHRoICk7XG4gICAgICAgICAgICBjb25zdCB5Q29vcmQgPSBwcmV2aW91c1Bvc2l0aW9uLnkgKyBkICogTWF0aC5zaW4odGgpO1xuICAgICAgICAgICAgcHJldmlvdXNQb3NpdGlvbiA9IHsgeDogeENvb3JkLCB5OiB5Q29vcmQsIHRoIH07XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQubGluZVRvKHhDb29yZCwgeUNvb3JkKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBzZW5zSG9sZGVyID0gKGFuZ2xlOm51bWJlcikgPT4ge1xuICAgICAgICAgICAgbW92ZUFuZFR1cm4oUm9ib3Qucm9ib3RBdHRyLnJTTCAsIHBvc2l0aW9uLnRoIC1NYXRoLlBJLzQrYW5nbGUpO1xuICAgICAgICAgICAgbW92ZUFuZFR1cm4oUm9ib3Qucm9ib3RBdHRyLnJTVywgcG9zaXRpb24udGgrTWF0aC5QSS80ICthbmdsZSk7XG4gICAgICAgICAgICBtb3ZlQW5kVHVybihSb2JvdC5yb2JvdEF0dHIuclNMICwgcG9zaXRpb24udGggKzMqTWF0aC5QSS80K2FuZ2xlKTtcbiAgICAgICAgfTsgXG4gICAgICAgIFxuICAgICAgICB0aGlzLmNvbnRleHQubW92ZVRvKHByZXZpb3VzUG9zaXRpb24ueCAsIHByZXZpb3VzUG9zaXRpb24ueSApO1xuICAgICAgICBtb3ZlQW5kVHVybihSb2JvdC5yb2JvdEF0dHIuclcvMiAtMiAsIHBvc2l0aW9uLnRoICsgTWF0aC5QSS8yICk7XG4gICAgICAgIHNlbnNIb2xkZXIoIE1hdGguUEkvMiApO1xuICAgICAgICBtb3ZlQW5kVHVybihSb2JvdC5yb2JvdEF0dHIuckggLCBwb3NpdGlvbi50aCArIE1hdGguUEkgKTtcbiAgICAgICAgc2Vuc0hvbGRlcihNYXRoLlBJICk7XG4gICAgICAgIG1vdmVBbmRUdXJuKFJvYm90LnJvYm90QXR0ci5yVyAsIHBvc2l0aW9uLnRoIC1NYXRoLlBJLzIgKTtcbiAgICAgICAgc2Vuc0hvbGRlcigtTWF0aC5QSS8yICk7XG4gICAgICAgIG1vdmVBbmRUdXJuKFJvYm90LnJvYm90QXR0ci5ySCAsIHBvc2l0aW9uLnRoICk7XG4gICAgICAgIHNlbnNIb2xkZXIoMCApO1xuICAgICAgICBtb3ZlQW5kVHVybihSb2JvdC5yb2JvdEF0dHIuclcvMiAsIHBvc2l0aW9uLnRoICsgTWF0aC5QSS8yICk7XG5cbiAgICAgICAgbW92ZUFuZFR1cm4oMiwgIHBvc2l0aW9uLnRoICApO1xuICAgICAgICBtb3ZlQW5kVHVybigyLCBwb3NpdGlvbi50aCArIE1hdGguUEkvMiApO1xuICAgICAgICBtb3ZlQW5kVHVybigyLCBwb3NpdGlvbi50aCsgTWF0aC5QSSApO1xuXG4gICAgICAgIHRoaXMuY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGwoKTtcblxuICAgIH1cblxuICAgIGtlZXBSb2JvdEluV2luZG93cygpOnZvaWQge1xuICAgICAgICBpZih0aGlzLnBvc2l0aW9uLnggPj0gOTcwKSB7XG4gICAgICAgICAgICB0aGlzLmRlbHRhLmR4ID0gIC10aGlzLmRlbHRhLmR4IDtcbiAgICAgICAgICAgIHRoaXMuZGVsdGEuZHRoID0gIC10aGlzLmRlbHRhLmR0aCA7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLnBvc2l0aW9uLnkgPj0gOTcwIHx8IHRoaXMucG9zaXRpb24ueSA8PSA1ICkge1xuICAgICAgICAgICAgdGhpcy5kZWx0YS5keSA9ICAtdGhpcy5kZWx0YS5keSA7XG4gICAgICAgICAgICB0aGlzLmRlbHRhLmR0aCA9ICAtdGhpcy5kZWx0YS5kdGggO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBwbG90Um9ib3QyKHBvc2l0aW9uOiBQb3NpdGlvbikge1xuICAgICAgICBsZXQgcHJldmlvdXNQb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgICBjb25zdCBtb3ZlQW5kVHVybiA9IChkOiBudW1iZXIsIHRoOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHhDb29yZCA9IHByZXZpb3VzUG9zaXRpb24ueCArIGQgKiBNYXRoLmNvcyh0aCAqIE1hdGguUEkgLyAxODApO1xuICAgICAgICAgICAgY29uc3QgeUNvb3JkID0gcHJldmlvdXNQb3NpdGlvbi55ICsgZCAqIE1hdGguc2luKHRoICogTWF0aC5QSSAvIDE4MCk7XG4gICAgICAgICAgICBwcmV2aW91c1Bvc2l0aW9uID0geyB4OiB4Q29vcmQsIHk6IHlDb29yZCwgdGggfTtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5saW5lVG8oeENvb3JkLCB5Q29vcmQpO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgdGhpcy5jb250ZXh0Lm1vdmVUbyhwcmV2aW91c1Bvc2l0aW9uLnggLCBwcmV2aW91c1Bvc2l0aW9uLnkgKTtcbiAgICAgICAgbW92ZUFuZFR1cm4oUm9ib3Qucm9ib3RBdHRyLnJIICwgOTAgKyBwb3NpdGlvbi50aCApO1xuICAgICAgICBtb3ZlQW5kVHVybihSb2JvdC5yb2JvdEF0dHIuclNMLCAtMTgwIC0gNDUrIHBvc2l0aW9uLnRoICk7XG4gICAgICAgIG1vdmVBbmRUdXJuKFJvYm90LnJvYm90QXR0ci5yU1csIC0xODAgLSA0NSArIHBvc2l0aW9uLnRoICk7XG4gICAgICAgIG1vdmVBbmRUdXJuKFJvYm90LnJvYm90QXR0ci5yU0wgLSAyLCAtNDUrIHBvc2l0aW9uLnRoICk7XG4gICAgICAgIG1vdmVBbmRUdXJuKChSb2JvdC5yb2JvdEF0dHIuclcgLSA0KSAvIDIsICBwb3NpdGlvbi50aCApO1xuICAgICAgICBtb3ZlQW5kVHVybig0LCA5MCsgcG9zaXRpb24udGggKTtcbiAgICAgICAgbW92ZUFuZFR1cm4oNCwgMCsgcG9zaXRpb24udGggKTtcbiAgICAgICAgbW92ZUFuZFR1cm4oNCwgLTkwKyBwb3NpdGlvbi50aCApO1xuICAgICAgICBtb3ZlQW5kVHVybigoUm9ib3Qucm9ib3RBdHRyLnJXIC0gNCkgLyAyLCAwKyBwb3NpdGlvbi50aCApO1xuICAgICAgICBtb3ZlQW5kVHVybihSb2JvdC5yb2JvdEF0dHIuclNMLCA0NSsgcG9zaXRpb24udGggKTtcbiAgICAgICAgbW92ZUFuZFR1cm4oUm9ib3Qucm9ib3RBdHRyLnJTVywgLTQ1KyBwb3NpdGlvbi50aCApO1xuICAgICAgICBtb3ZlQW5kVHVybihSb2JvdC5yb2JvdEF0dHIuclNMIC0gMiwgMjIrIHBvc2l0aW9uLnRoICk7XG4gICAgICAgIG1vdmVBbmRUdXJuKFJvYm90LnJvYm90QXR0ci5ySCwgLTkwKyBwb3NpdGlvbi50aCApO1xuICAgICAgICBtb3ZlQW5kVHVybihSb2JvdC5yb2JvdEF0dHIuclNMLCAtNDUrIHBvc2l0aW9uLnRoICk7XG4gICAgICAgIG1vdmVBbmRUdXJuKFJvYm90LnJvYm90QXR0ci5yU1csIC0xMzUrIHBvc2l0aW9uLnRoICk7XG4gICAgICAgIG1vdmVBbmRUdXJuKFJvYm90LnJvYm90QXR0ci5yU0wgLSAyLCAtMjI1KyBwb3NpdGlvbi50aCApO1xuICAgICAgICBtb3ZlQW5kVHVybihSb2JvdC5yb2JvdEF0dHIuclcsIDE4MCsgcG9zaXRpb24udGggKTtcbiAgICAgICAgbW92ZUFuZFR1cm4oUm9ib3Qucm9ib3RBdHRyLnJTTCwgLTkwIC0gNDUrIHBvc2l0aW9uLnRoICk7XG4gICAgICAgIG1vdmVBbmRUdXJuKFJvYm90LnJvYm90QXR0ci5yU1csIC0xODAgLSA0NSsgcG9zaXRpb24udGggKTtcbiAgICAgICAgbW92ZUFuZFR1cm4oUm9ib3Qucm9ib3RBdHRyLnJTTCwgLTE4MCAtIDkwIC0gNDUrIHBvc2l0aW9uLnRoICk7XG4gICAgICAgIHRoaXMuY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGwoKTtcblxuICAgIH1cblxuICAgIGdldFBvc2l0aW9uKCk6IFBvc2l0aW9uIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb247XG4gICAgfVxuXG4gICAgc2V0UG9zaXRpb24ocG9zaXRpb246UG9zaXRpb24pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgIH1cblxuICAgIGdldFNwZWVkKCk6IFNwZWVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3BlZWQ7XG4gICAgfVxuXG4gICAgYW5pbWF0ZShzcGVlZDogU3BlZWQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xuICAgICAgICB0aGlzLmNhbGNOZXdQb3NpdGlvbihzcGVlZCk7XG4gICAgICAgIHRoaXMucGxvdFJvYm90KHRoaXMucG9zaXRpb24pO1xuICAgICAgICB0aGlzLnNvbmFyU2Vuc29ycy5zaG93KHRoaXMucG9zaXRpb24pO1xuXG4gICAgfVxuXG4gICAgY2FsY05ld1Bvc2l0aW9uKHNwZWVkOiBTcGVlZCkge1xuICAgICAgICB0aGlzLmRlbHRhID0gdGhpcy5zdG9wPyB7IGR4OiAwLCBkeTogMCwgZHRoOiAwIH06IHRoaXMua2luZW1hdGljKHNwZWVkLmxlZnQsIHNwZWVkLnJpZ2h0KTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMuZGVsdGEuZHg7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueSArPSB0aGlzLmRlbHRhLmR5O1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnRoICs9IHRoaXMuZGVsdGEuZHRoO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnRoICU9IDIqTWF0aC5QSTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi50aCA9IHRoaXMucG9zaXRpb24udGggPiBNYXRoLlBJID8gKC0yKk1hdGguUEkgK3RoaXMucG9zaXRpb24udGgpIDogdGhpcy5wb3NpdGlvbi50aDtcbiAgICB9XG5cbiAgICBraW5lbWF0aWMobGVmdFdlZWxTcGVlZDogbnVtYmVyLCByaWdodFdoZWVsU3BlZWQ6IG51bWJlcik6IHsgZHg6IG51bWJlciwgZHk6IG51bWJlciwgZHRoOiBudW1iZXIgfSB7XG4gICAgICAgIGNvbnN0IGxpbmVhclZlbG9jaXR5ID0gKHJpZ2h0V2hlZWxTcGVlZCArIGxlZnRXZWVsU3BlZWQpIC8gMjtcbiAgICAgICAgY29uc3QgYW5ndWxhclZlbG9jaXR5ID0gbGVmdFdlZWxTcGVlZC1yaWdodFdoZWVsU3BlZWQ7XG4gICAgICAgIGNvbnN0IGR0aCA9YW5ndWxhclZlbG9jaXR5ICogdGhpcy5kdCAqMiogTWF0aC5QSSogUm9ib3Qucm9ib3RBdHRyLldoZWVsUi8gUm9ib3Qucm9ib3RBdHRyLnJXO1xuICAgICAgICAvLyBjb25zdCB0aGV0YSA9IHRoaXMucG9zaXRpb24udGggKyBkdGg7XG4gICAgICAgIGNvbnN0IGR4ID1saW5lYXJWZWxvY2l0eSAqIE1hdGguY29zKHRoaXMucG9zaXRpb24udGgpICogdGhpcy5kdCAqIFJvYm90LnJvYm90QXR0ci5XaGVlbFIvMjtcbiAgICAgICAgY29uc3QgZHkgPWxpbmVhclZlbG9jaXR5ICogTWF0aC5zaW4odGhpcy5wb3NpdGlvbi50aCkgKiB0aGlzLmR0ICogUm9ib3Qucm9ib3RBdHRyLldoZWVsUi8yO1xuXG4gICAgICAgIHJldHVybiB7IGR4LCBkeSwgZHRoIH07XG4gICAgfVxuXG4gICAgZ2V0U2Vuc29ycygpOkFycmF5PFNlbnNvcj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zb25hclNlbnNvcnMuY2FsY1NlbnNvcnNQb3NpdGlvbnModGhpcy5nZXRQb3NpdGlvbigpKTtcbiAgICB9XG5cbiAgICBzZXRYKHg6bnVtYmVyKSA6dm9pZCB7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueCA9IHg7XG4gICAgfVxuXG4gICAgc2V0WSh5Om51bWJlcikgOnZvaWQge1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSB5O1xuICAgIH1cblxuICAgIHNldFRoKHRoOm51bWJlcikgOnZvaWQge1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnRoID0gdGg7XG4gICAgfVxuXG4gICAgdG9nZ2xlU3RvcCgpe1xuICAgICAgICB0aGlzLnN0b3AgPSAhdGhpcy5zdG9wO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFBvaW50LCBQb2ludE1pbmltdW0gfSBmcm9tIFwiLi9PYnN0YWNsZXNcIjtcbmltcG9ydCB7IFBvc2l0aW9uLCBSb2JvdCB9IGZyb20gXCIuL1JvYm90XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2Vuc29yIGV4dGVuZHMgUG9pbnQge1xuICAgIHNpZGU6IHN0cmluZyxcbiAgICBkYzogbnVtYmVyIC8vIGRpc3RhbmNlIGZyb20gY2VudGVyXG59XG5cblxuXG5leHBvcnQgZW51bSBTaWRlcyB7XG4gICAgZnJvbnRMZWZ0ID0gXCJmcm9udExlZnRcIixcbiAgICBmcm9udFJpZ2h0ID0gXCJmcm9udFJpZ2h0XCIsXG4gICAgYmFja0xlZnQgPSBcImJhY2tMZWZ0XCIsXG4gICAgYmFja1JpZ2h0ID0gXCJiYWNrUmlnaHRcIixcbiAgICBtaWRkbGUgPSBcIm1pZGRsZVwiLFxuICAgIGNlbnRlciA9IFwiY2VudGVyXCJcbn1cblxuZXhwb3J0IGNsYXNzIFNvbmFyU2Vuc29ycyB7XG4gICAgcHJpdmF0ZSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICAgIHByaXZhdGUgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xuICAgICAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgfVxuXG4gICAgY2FsRGlzdChwb2ludDE6IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfSwgcG9pbnQyOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH0pIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhwb2ludDEueCAtIHBvaW50Mi54LCAyKSArIE1hdGgucG93KHBvaW50MS55IC0gcG9pbnQyLnksIDIpKTtcbiAgICB9XG5cbiAgICBjYWxBbmdsZShwb2ludDE6IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfSwgcG9pbnQyOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH0pIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYXRhbigocG9pbnQyLnkgLSBwb2ludDEueSkvKHBvaW50Mi54IC0gcG9pbnQxLngpKTtcbiAgICB9XG5cbiAgICBjYWxjU2Vuc29yc1Bvc2l0aW9ucyhyb2JvdFBvc2l0aW9uOiBQb3NpdGlvbik6IEFycmF5PFNlbnNvcj4ge1xuICAgICAgICByZXR1cm4gW1NpZGVzLmZyb250TGVmdCwgU2lkZXMuZnJvbnRSaWdodCwgU2lkZXMuYmFja0xlZnQsIFNpZGVzLmJhY2tSaWdodCwgU2lkZXMubWlkZGxlLCBTaWRlcy5jZW50ZXJdXG4gICAgICAgICAgICAubWFwKHNlbnNvclNpZGUgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzZW5zb3JTaWRlID09PSBTaWRlcy5jZW50ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IHJvYm90UG9zaXRpb24ueCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IHJvYm90UG9zaXRpb24ueSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZGU6IHNlbnNvclNpZGUsXG4gICAgICAgICAgICAgICAgICAgIH0gYXMgU2Vuc29yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc2Vuc29yU2lkZSA9PT0gU2lkZXMubWlkZGxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiByb2JvdFBvc2l0aW9uLngsXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiByb2JvdFBvc2l0aW9uLnkgKyBSb2JvdC5yb2JvdEF0dHIuckggLyAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2lkZTogc2Vuc29yU2lkZVxuICAgICAgICAgICAgICAgICAgICB9IGFzIFNlbnNvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHNlbnNvclNpZGUgPT09IFNpZGVzLmZyb250TGVmdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgeDogcm9ib3RQb3NpdGlvbi54IC0gUm9ib3QuUlNMQ29zNDUgLSBSb2JvdC5yb2JvdEF0dHIuclcgLyAyIC0gMyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IHJvYm90UG9zaXRpb24ueSAtIFJvYm90LlJTTENvczQ1LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2lkZTogc2Vuc29yU2lkZVxuICAgICAgICAgICAgICAgICAgICB9IGFzIFNlbnNvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHNlbnNvclNpZGUgPT09IFNpZGVzLmZyb250UmlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IHJvYm90UG9zaXRpb24ueCArIFJvYm90LlJTTENvczQ1ICsgUm9ib3Qucm9ib3RBdHRyLnJXIC8gMixcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IHJvYm90UG9zaXRpb24ueSAtIFJvYm90LlJTTENvczQ1ICsgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZGU6IHNlbnNvclNpZGVcbiAgICAgICAgICAgICAgICAgICAgfSBhcyBTZW5zb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzZW5zb3JTaWRlID09PSBTaWRlcy5iYWNrTGVmdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgeDogcm9ib3RQb3NpdGlvbi54IC0gUm9ib3QuUlNMQ29zNDUgLSBSb2JvdC5yb2JvdEF0dHIuclcgLyAyIC0gNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IHJvYm90UG9zaXRpb24ueSAtIFJvYm90LlJTTENvczQ1ICsgUm9ib3Qucm9ib3RBdHRyLnJIICsgUm9ib3Qucm9ib3RBdHRyLnJXLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2lkZTogc2Vuc29yU2lkZVxuICAgICAgICAgICAgICAgICAgICB9IGFzIFNlbnNvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHNlbnNvclNpZGUgPT09IFNpZGVzLmJhY2tSaWdodCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgeDogcm9ib3RQb3NpdGlvbi54ICsgUm9ib3QuUlNMQ29zNDUgKyBSb2JvdC5yb2JvdEF0dHIuclcgLSBSb2JvdC5yb2JvdEF0dHIuclcgLyAyIC0gMixcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IHJvYm90UG9zaXRpb24ueSArIFJvYm90LlJTTENvczQ1ICsgUm9ib3Qucm9ib3RBdHRyLnJIICsgMyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZGU6IHNlbnNvclNpZGVcbiAgICAgICAgICAgICAgICAgICAgfSBhcyBTZW5zb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICApLm1hcChzZW5zID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZW5zQ2FsYyA9IHNlbnM7XG4gICAgICAgICAgICAgICAgc2Vuc0NhbGMuZGMgPSB0aGlzLmNhbERpc3Qocm9ib3RQb3NpdGlvbiwgc2Vuc0NhbGMpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFuZ2xlID0gdGhpcy5jYWxBbmdsZShyb2JvdFBvc2l0aW9uLCBzZW5zQ2FsYykgK1xuICAgICAgICAgICAgICAgIChzZW5zLnNpZGUgPT09IFNpZGVzLmZyb250TGVmdCB8fCBzZW5zLnNpZGUgPT09IFNpZGVzLmJhY2tMZWZ0ID8gTWF0aC5QSSA6IDApICtcbiAgICAgICAgICAgICAgICByb2JvdFBvc2l0aW9uLnRoICArIE1hdGguUEkvMiA7XG4gICAgICAgICAgICAgICAgc2Vuc0NhbGMueCA9IHJvYm90UG9zaXRpb24ueCArIHNlbnNDYWxjLmRjICogTWF0aC5jb3MoYW5nbGUgKTtcbiAgICAgICAgICAgICAgICBzZW5zQ2FsYy55ID0gcm9ib3RQb3NpdGlvbi55ICsgc2Vuc0NhbGMuZGMgKiBNYXRoLnNpbihhbmdsZSApO1xuICAgICAgICAgICAgICAgIHJldHVybiBzZW5zQ2FsYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgc2hvdyhyb2JvdFBvc2l0aW9uOiBQb3NpdGlvbikge1xuICAgICAgICBjb25zdCBjdXJyZW50Q29sb3IgPSB0aGlzLmNvbnRleHQuZmlsbFN0eWxlO1xuICAgICAgICBjb25zdCBzZW5zb3JzID0gdGhpcy5jYWxjU2Vuc29yc1Bvc2l0aW9ucyhyb2JvdFBvc2l0aW9uKTtcblxuICAgICAgICBzZW5zb3JzLmZvckVhY2goc2Vuc29yID0+IHtcbiAgICAgICAgICAgIHRoaXMucGxvdENpcmNsZSh7IHg6IHNlbnNvci54LCB5OiBzZW5zb3IueSwgdGg6IHJvYm90UG9zaXRpb24udGggfSk7XG4gICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cblxuICAgIHBsb3RDaXJjbGUocG9pc3Rpb246IFBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgLy8gdGhpcy5jb250ZXh0LnJvdGF0ZShwb2lzdGlvbi50aCpNYXRoLlBJLzE4MCk7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRDb2xvciA9IHRoaXMuY29udGV4dC5maWxsU3R5bGU7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBcIm9yYW5nZVwiO1xuICAgICAgICB0aGlzLmNvbnRleHQuYXJjKHBvaXN0aW9uLngsIHBvaXN0aW9uLnksIDMsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbCgpO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gZGVmYXVsdENvbG9yO1xuICAgIH1cblxuXG59XG4iLCJpbXBvcnQgeyBQb2ludCwgU2Vuc29yRGlzdGFuY2UgfSBmcm9tIFwiLi9PYnN0YWNsZXNcIjtcbmltcG9ydCB7IFBvc2l0aW9uLCBSb2JvdCB9IGZyb20gXCIuL1JvYm90XCI7XG5pbXBvcnQgeyBTZW5zb3IsIFNpZGVzIH0gZnJvbSBcIi4vU29uYXJTZW5zb3JzXCI7XG5pbXBvcnQgdGFyZ2V0IGZyb20gXCIuL1RhcmdldFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNwZWVkIHtcbiAgICByaWdodDogbnVtYmVyLFxuICAgIGxlZnQ6IG51bWJlclxufVxuXG5leHBvcnQgY2xhc3MgU3BlZWRDb250cm9sbGVyIHtcbiAgICBzdGF0aWMgTWF4U3BlZWQgPSA3MDA7XG4gICAgc3RhdGljIE1heERpc3RhbmNlID0gODA7XG4gICAgaXRlcmF0aW9uID0gMDtcblxuICAgIGxhc3REaXN0YW5jZVRvT2JzdGFjbGVzOiBTZW5zb3JEaXN0YW5jZVtdO1xuXG4gICAgY2FsY1doZWVsc1NwZWVkMyhvYnN0YWNsZURpc3RhbmNlczogQXJyYXk8UG9pbnQ+LCBjdXJyZW50U3BlZWQ6IFNwZWVkKTogU3BlZWQge1xuICAgICAgICBpZiAob2JzdGFjbGVEaXN0YW5jZXMuc29tZShwb2ludCA9PiBwb2ludC5kIDwgMTApKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHJpZ2h0OiBjdXJyZW50U3BlZWQucmlnaHQgKiAoLTEpLFxuICAgICAgICAgICAgICAgIGxlZnQ6IGN1cnJlbnRTcGVlZC5sZWZ0ICogKC0xKSxcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjdXJyZW50U3BlZWQ7XG4gICAgfVxuXG5cbiAgICBjYWxjV2hlZWxzU3BlZWQyKHNlbnNvck9ic3REaXN0YW5jZXM6IFNlbnNvckRpc3RhbmNlW10sIGN1cnJlbnRTcGVlZDogU3BlZWQpOiBTcGVlZCB7XG5cblxuICAgICAgICBjb25zdCBmcm9udExlZnREaXN0ID0gc2Vuc29yT2JzdERpc3RhbmNlcy5maW5kKHNlbnMgPT4gc2Vucy5zaWRlID09PSBTaWRlcy5mcm9udExlZnQpLmQ7XG4gICAgICAgIGNvbnN0IGZyb250UmlnaHREaXN0ID0gc2Vuc29yT2JzdERpc3RhbmNlcy5maW5kKHNlbnMgPT4gc2Vucy5zaWRlID09PSBTaWRlcy5mcm9udFJpZ2h0KS5kO1xuICAgICAgICBjb25zdCBiYWNrTGVmdERpc3QgPSBzZW5zb3JPYnN0RGlzdGFuY2VzLmZpbmQoc2VucyA9PiBzZW5zLnNpZGUgPT09IFNpZGVzLmJhY2tMZWZ0KS5kO1xuICAgICAgICBjb25zdCBiYWNrUmlnaHREaXN0ID0gc2Vuc29yT2JzdERpc3RhbmNlcy5maW5kKHNlbnMgPT4gc2Vucy5zaWRlID09PSBTaWRlcy5iYWNrUmlnaHQpLmQ7XG5cbiAgICAgICAgbGV0IGNhbGNTcGVlZDogU3BlZWQgPSB7IGxlZnQ6IFNwZWVkQ29udHJvbGxlci5NYXhTcGVlZCwgcmlnaHQ6IFNwZWVkQ29udHJvbGxlci5NYXhTcGVlZCB9O1xuXG5cbiAgICAgICAgY29uc3QgY29lZiA9ICgxIC0gTWF0aC5leHAoLTAuMDQgKiBNYXRoLnNxcnQoTWF0aC5wb3coZnJvbnRMZWZ0RGlzdCAtIFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZSwgMikgK1xuICAgICAgICAgICAgTWF0aC5wb3coZnJvbnRSaWdodERpc3QgLSBTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2UsIDIpICtcbiAgICAgICAgICAgIE1hdGgucG93KGJhY2tMZWZ0RGlzdCAtIFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZSwgMikgK1xuICAgICAgICAgICAgTWF0aC5wb3coYmFja1JpZ2h0RGlzdCAtIFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZSwgMikpIC8gU3BlZWRDb250cm9sbGVyLk1heERpc3RhbmNlKSk7XG5cbiAgICAgICAgY29uc3Qgc3BlZWRNYXggPSBTcGVlZENvbnRyb2xsZXIuTWF4U3BlZWQgKiAoMSAtIE1hdGguZXhwKC0wLjggKiBNYXRoLnNxcnQoTWF0aC5wb3coZnJvbnRMZWZ0RGlzdCAtIFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZSwgMikgK1xuICAgICAgICAgICAgTWF0aC5wb3coZnJvbnRSaWdodERpc3QgLSBTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2UsIDIpICtcbiAgICAgICAgICAgIE1hdGgucG93KGJhY2tMZWZ0RGlzdCAtIFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZSwgMikgK1xuICAgICAgICAgICAgTWF0aC5wb3coYmFja1JpZ2h0RGlzdCAtIFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZSwgMikpIC8gU3BlZWRDb250cm9sbGVyLk1heERpc3RhbmNlKSk7XG5cbiAgICAgICAgY29uc3QgYW5nbGVDb2RlID0gKChmcm9udExlZnREaXN0IDwgU3BlZWRDb250cm9sbGVyLk1heERpc3RhbmNlID8gMSA6IDApIDw8IDMpIHxcbiAgICAgICAgICAgICgoZnJvbnRSaWdodERpc3QgPCBTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2UgPyAxIDogMCkgPDwgMikgfFxuICAgICAgICAgICAgKChiYWNrTGVmdERpc3QgPCBTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2UgPyAxIDogMCkgPDwgMSkgfFxuICAgICAgICAgICAgKChiYWNrUmlnaHREaXN0IDwgU3BlZWRDb250cm9sbGVyLk1heERpc3RhbmNlID8gMSA6IDApKTtcblxuICAgICAgICBjb25zdCBmcm9udFJpZ2h0VHVybiA9IDEgLSBNYXRoLmV4cCgwLjAxICogTWF0aC5zcXJ0KE1hdGgucG93KGZyb250UmlnaHREaXN0IC0gU3BlZWRDb250cm9sbGVyLk1heERpc3RhbmNlLCAyKSAvIFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZSkpO1xuICAgICAgICBjb25zdCBmcm9udExlZnRUdXJuID0gMSAtIE1hdGguZXhwKDAuMDEgKiBNYXRoLnNxcnQoTWF0aC5wb3coZnJvbnRMZWZ0RGlzdCAtIFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZSwgMikgLyBTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2UpKTtcbiAgICAgICAgY29uc3QgYmFja1JpZ2h0VHVybiA9IDEgLSBNYXRoLmV4cCgwLjAxICogTWF0aC5zcXJ0KE1hdGgucG93KGJhY2tSaWdodERpc3QgLSBTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2UsIDIpIC8gU3BlZWRDb250cm9sbGVyLk1heERpc3RhbmNlKSk7XG4gICAgICAgIGNvbnN0IGJhY2tMZWZ0VHVybiA9IDEgLSBNYXRoLmV4cCgwLjAxICogTWF0aC5zcXJ0KE1hdGgucG93KGJhY2tMZWZ0RGlzdCAtIFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZSwgMikgLyBTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2UpKTtcblxuICAgICAgICBsZXQgYWxwaGEgPSBhbmdsZUNvZGUgPiAwID8gKGZyb250UmlnaHRUdXJuICsgYmFja1JpZ2h0VHVybikgKiAwLjUgOiAxO1xuICAgICAgICBsZXQgYmV0YSA9IGFuZ2xlQ29kZSA+IDAgPyAoZnJvbnRMZWZ0VHVybiArIGJhY2tMZWZ0VHVybikgKiAwLjUgOiAxO1xuICAgICAgICBcbiAgICAgICAgY2FsY1NwZWVkLmxlZnQgID0gU3BlZWRDb250cm9sbGVyLk1heFNwZWVkICogYWxwaGE7XG4gICAgICAgIGNhbGNTcGVlZC5yaWdodCA9IFNwZWVkQ29udHJvbGxlci5NYXhTcGVlZCAqIGJldGE7XG5cbiAgICAgICAgcmV0dXJuIGNhbGNTcGVlZDtcbiAgICB9XG5cblxuICAgIGNhbGNSZXB1bHNlRXhwbyhvYnN0YWNsZURpc3Q6IG51bWJlciwgZmFjdG9yID0gMC4wMSk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBvYnN0YWNsZURpc3QgPCBTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2VcbiAgICAgICAgICAgID8gMSAtIE1hdGguZXhwKGZhY3RvciAqIE1hdGguc3FydChNYXRoLnBvdyhvYnN0YWNsZURpc3QgLSBTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2UsIDIpIC8gU3BlZWRDb250cm9sbGVyLk1heERpc3RhbmNlKSlcbiAgICAgICAgICAgIDogMDtcbiAgICB9XG5cbiAgICBjYWxjUmVwdWxzZUNvYmluZWQob2JzdGFjbGVEaXN0OiBudW1iZXIsIGZhY3RvciA9IDAuMDEpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gb2JzdGFjbGVEaXN0IDwgU3BlZWRDb250cm9sbGVyLk1heERpc3RhbmNlXG4gICAgICAgICAgICAvLyA/IDEuNS0xLyggTWF0aC5hYnMob2JzdGFjbGVEaXN0LVNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZSowLjMpIC8gU3BlZWRDb250cm9sbGVyLk1heERpc3RhbmNlKVxuICAgICAgICAgICAgLy8gPyBNYXRoLnRhbmgoIDAuMDM0LyggTWF0aC5hYnMob2JzdGFjbGVEaXN0LVNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZSkgLyBTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2UpKVxuICAgICAgICAgICAgLy8gPzAuMDMqTWF0aC5QSSogTWF0aC5hYnMob2JzdGFjbGVEaXN0LVNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZSkgLyBTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2VcbiAgICAgICAgICAgID8gKDAuNCAqICgxIC0gMSAvICgxICsgTWF0aC5leHAoLTAuMDAxICogKG9ic3RhY2xlRGlzdCAtIFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZSkgLyBTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2UpKSkgK1xuICAgICAgICAgICAgICAgIDAuNiAqICgxIC0gTWF0aC5leHAoZmFjdG9yICogTWF0aC5zcXJ0KE1hdGgucG93KG9ic3RhY2xlRGlzdCAtIFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZSwgMikgLyBTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2UpKSkpICogMC41XG4gICAgICAgICAgICA6IDA7XG4gICAgfVxuXG5cbiAgICBjYWxjV2hlZWxzU3BlZWQoc2Vuc29yT2JzdERpc3RhbmNlczogU2Vuc29yRGlzdGFuY2VbXSwgY3VycmVudFNwZWVkOiBTcGVlZCwgcm9ib3RQb3NpdGlvbjogUG9zaXRpb24pOiBTcGVlZCB7XG4gICAgICAgIHRoaXMuaXRlcmF0aW9uICs9IDE7XG4gICAgICAgIGNvbnN0IGF2b2lkT2JzdGFjbGVDb21tYW5kID0gdGhpcy5hdm9pZE9ic3RhY2xlKHNlbnNvck9ic3REaXN0YW5jZXMsIGN1cnJlbnRTcGVlZCk7XG4gICAgICAgIGNvbnN0IGdvVG9UYXJnZXRDb21tYW5kID0gdGhpcy5nb1RvVGFyZ2V0KHJvYm90UG9zaXRpb24pO1xuXG4gICAgICAgIGNvbnN0IGZyb250TGVmdERpc3QgPSBzZW5zb3JPYnN0RGlzdGFuY2VzLmZpbmQoc2VucyA9PiBzZW5zLnNpZGUgPT09IFNpZGVzLmZyb250TGVmdCkuZDtcbiAgICAgICAgY29uc3QgZnJvbnRSaWdodERpc3QgPSBzZW5zb3JPYnN0RGlzdGFuY2VzLmZpbmQoc2VucyA9PiBzZW5zLnNpZGUgPT09IFNpZGVzLmZyb250UmlnaHQpLmQ7XG4gICAgICAgIGNvbnN0IGJhY2tMZWZ0RGlzdCA9IHNlbnNvck9ic3REaXN0YW5jZXMuZmluZChzZW5zID0+IHNlbnMuc2lkZSA9PT0gU2lkZXMuYmFja0xlZnQpLmQ7XG4gICAgICAgIGNvbnN0IGJhY2tSaWdodERpc3QgPSBzZW5zb3JPYnN0RGlzdGFuY2VzLmZpbmQoc2VucyA9PiBzZW5zLnNpZGUgPT09IFNpZGVzLmJhY2tSaWdodCkuZDtcblxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsZWZ0OiAgYXZvaWRPYnN0YWNsZUNvbW1hbmQubGVmdCAgKiAwLjUgICArIGdvVG9UYXJnZXRDb21tYW5kLmxlZnQgKiAwLjUgLFxuICAgICAgICAgICAgcmlnaHQ6IGF2b2lkT2JzdGFjbGVDb21tYW5kLnJpZ2h0ICogMC41ICAgKyBnb1RvVGFyZ2V0Q29tbWFuZC5yaWdodCogMC41ICBcbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIGF2b2lkT2JzdGFjbGUoc2Vuc29yT2JzdERpc3RhbmNlczogU2Vuc29yRGlzdGFuY2VbXSwgY3VycmVudFNwZWVkOiBTcGVlZCk6IFNwZWVkIHtcbiAgICAgICAgY29uc3QgZnJvbnRMZWZ0RGlzdCA9IHNlbnNvck9ic3REaXN0YW5jZXMuZmluZChzZW5zID0+IHNlbnMuc2lkZSA9PT0gU2lkZXMuZnJvbnRMZWZ0KS5kO1xuICAgICAgICBjb25zdCBmcm9udFJpZ2h0RGlzdCA9IHNlbnNvck9ic3REaXN0YW5jZXMuZmluZChzZW5zID0+IHNlbnMuc2lkZSA9PT0gU2lkZXMuZnJvbnRSaWdodCkuZDtcbiAgICAgICAgY29uc3QgYmFja0xlZnREaXN0ID0gc2Vuc29yT2JzdERpc3RhbmNlcy5maW5kKHNlbnMgPT4gc2Vucy5zaWRlID09PSBTaWRlcy5iYWNrTGVmdCkuZDtcbiAgICAgICAgY29uc3QgYmFja1JpZ2h0RGlzdCA9IHNlbnNvck9ic3REaXN0YW5jZXMuZmluZChzZW5zID0+IHNlbnMuc2lkZSA9PT0gU2lkZXMuYmFja1JpZ2h0KS5kO1xuXG4gICAgICAgIGxldCBjYWxjU3BlZWQ6IFNwZWVkID0geyBsZWZ0OiBTcGVlZENvbnRyb2xsZXIuTWF4U3BlZWQgLyAyLCByaWdodDogU3BlZWRDb250cm9sbGVyLk1heFNwZWVkIC8gMiB9O1xuXG4gICAgICAgIGNvbnN0IGFuZ2xlQ29kZSA9ICgoZnJvbnRMZWZ0RGlzdCA8IFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZSA/IDEgOiAwKSA8PCAzKSB8XG4gICAgICAgICAgICAoKGZyb250UmlnaHREaXN0IDwgU3BlZWRDb250cm9sbGVyLk1heERpc3RhbmNlID8gMSA6IDApIDw8IDIpIHxcbiAgICAgICAgICAgICgoYmFja0xlZnREaXN0IDwgU3BlZWRDb250cm9sbGVyLk1heERpc3RhbmNlID8gMSA6IDApIDw8IDEpIHxcbiAgICAgICAgICAgICgoYmFja1JpZ2h0RGlzdCA8IFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZSA/IDEgOiAwKSk7XG5cbiAgICAgICAgY29uc3QgZnJvbnRSaWdodFR1cm4gPSB0aGlzLmNhbGNSZXB1bHNlQ29iaW5lZChmcm9udFJpZ2h0RGlzdCk7XG4gICAgICAgIGNvbnN0IGZyb250TGVmdFR1cm4gPSB0aGlzLmNhbGNSZXB1bHNlQ29iaW5lZChmcm9udExlZnREaXN0KTtcbiAgICAgICAgY29uc3QgYmFja1JpZ2h0VHVybiA9IHRoaXMuY2FsY1JlcHVsc2VDb2JpbmVkKGJhY2tSaWdodERpc3QpO1xuICAgICAgICBjb25zdCBiYWNrTGVmdFR1cm4gPSB0aGlzLmNhbGNSZXB1bHNlQ29iaW5lZChiYWNrTGVmdERpc3QpO1xuXG4gICAgICAgIGNvbnN0IG9ic3RJc09uRnJvbnQgPSBmcm9udFJpZ2h0RGlzdCA8IFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZVxuICAgICAgICAgICAgJiYgZnJvbnRMZWZ0RGlzdCA8IFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZVxuICAgICAgICAgICAgPyAxXG4gICAgICAgICAgICA6IDA7XG4gICAgICAgIGNvbnN0IG9ic3RJc09uQmFjayA9IGJhY2tSaWdodERpc3QgPCBTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2VcbiAgICAgICAgICAgICYmIGJhY2tMZWZ0RGlzdCA8IFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZVxuICAgICAgICAgICAgPyAxXG4gICAgICAgICAgICA6IDA7XG4gICAgICAgIGNvbnN0IG9ic3RJc09uUmlnaHQgPSBmcm9udFJpZ2h0RGlzdCA8IFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZSAmJlxuICAgICAgICAgICAgZnJvbnRMZWZ0RGlzdCA+IFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZSB8fFxuICAgICAgICAgICAgYmFja1JpZ2h0RGlzdCA8IFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZVxuICAgICAgICAgICAgJiYgYmFja0xlZnREaXN0ID4gU3BlZWRDb250cm9sbGVyLk1heERpc3RhbmNlXG4gICAgICAgICAgICA/IDFcbiAgICAgICAgICAgIDogMDtcblxuICAgICAgICAgICAgY29uc3Qgb2JzdElzT25CYWNrUmlnaHQgPSBiYWNrUmlnaHREaXN0IDwgU3BlZWRDb250cm9sbGVyLk1heERpc3RhbmNlICYmXG4gICAgICAgICAgICBmcm9udExlZnREaXN0ID4gU3BlZWRDb250cm9sbGVyLk1heERpc3RhbmNlICAmJlxuICAgICAgICAgICAgYmFja1JpZ2h0RGlzdCA+IFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZSAmJlxuICAgICAgICAgICAgYmFja0xlZnREaXN0ICA+IFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZVxuICAgICAgICAgICAgPyAyLjlcbiAgICAgICAgICAgIDogMDtcblxuICAgICAgICAgICAgY29uc3Qgb2JzdElzT25CYWNrTGVmdCA9IGJhY2tMZWZ0RGlzdCA8IFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZSAmJlxuICAgICAgICAgICAgYmFja1JpZ2h0RGlzdCA+IFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZSAmJlxuICAgICAgICAgICAgZnJvbnRMZWZ0RGlzdCA+IFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZSAgJiZcbiAgICAgICAgICAgIGZyb250TGVmdERpc3QgPiBTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2VcbiAgICAgICAgICAgID8gMi45XG4gICAgICAgICAgICA6IDA7XG5cbiAgICAgICAgY29uc3Qgb2JzdElzT25MZWZ0ID0gZnJvbnRMZWZ0RGlzdCA8IFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZSAmJlxuICAgICAgICAgICAgZnJvbnRSaWdodERpc3QgPiBTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2UgfHxcbiAgICAgICAgICAgIGJhY2tMZWZ0RGlzdCA8IFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZSAmJlxuICAgICAgICAgICAgYmFja1JpZ2h0RGlzdCA+IFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZVxuICAgICAgICAgICAgPyAxXG4gICAgICAgICAgICA6IDA7XG5cbiAgICAgICAgY29uc3QgcmFuZEVmZmVjdE9ic0ZyID0gKHRoaXMuaXRlcmF0aW9uICUgMTAgPT09IDAgKSAmJiBNYXRoLnJhbmRvbSgpID4gMC41ICYmIG9ic3RJc09uRnJvbnQgPyAxOjA7XG5cbiAgICAgICAgbGV0IGFscGhhID0gKGZyb250UmlnaHRUdXJuIC0gYmFja1JpZ2h0VHVybikgKiBvYnN0SXNPblJpZ2h0ICArIG9ic3RJc09uQmFja1JpZ2h0ICogYmFja1JpZ2h0VHVybiArIG9ic3RJc09uRnJvbnQgKiAoZnJvbnRSaWdodFR1cm4gKyBmcm9udExlZnRUdXJuKSAqIDAuNTtcbiAgICAgICAgbGV0IGJldGEgPSAgKGZyb250TGVmdFR1cm4gLSBiYWNrTGVmdFR1cm4pICogb2JzdElzT25MZWZ0ICAgICArIG9ic3RJc09uQmFja0xlZnQgICogYmFja0xlZnRUdXJuIDtcbiAgIFxuXG4gICAgICAgIGNhbGNTcGVlZC5sZWZ0ICs9IFNwZWVkQ29udHJvbGxlci5NYXhTcGVlZCAgKiAwLjUgKiBhbHBoYTtcbiAgICAgICAgY2FsY1NwZWVkLnJpZ2h0ICs9IFNwZWVkQ29udHJvbGxlci5NYXhTcGVlZCAqIDAuNSAqIGJldGE7XG4gICAgICAgIHRoaXMubGFzdERpc3RhbmNlVG9PYnN0YWNsZXMgPSBzZW5zb3JPYnN0RGlzdGFuY2VzO1xuXG4gICAgICAgIHJldHVybiBjYWxjU3BlZWQ7XG4gICAgfVxuXG4gICAgY2FsRGlzdDJUYXJnZXQodGFyZ2V0UG9zaXRpb246IFBvc2l0aW9uLCByb2JvdFBvc2l0aW9uOiBQb3NpdGlvbik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3codGFyZ2V0UG9zaXRpb24ueCAtIHJvYm90UG9zaXRpb24ueCwgMikgKyBNYXRoLnBvdyh0YXJnZXRQb3NpdGlvbi55IC0gcm9ib3RQb3NpdGlvbi55LCAyKSk7XG4gICAgfVxuXG4gICAgZ29Ub1RhcmdldChyb2JvdFBvc2l0aW9uOiBQb3NpdGlvbik6IFNwZWVkIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0UG9zaXRpb24gPSB0YXJnZXQuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0RGlzdGFuY2UgPSB0aGlzLmNhbERpc3QyVGFyZ2V0KHRhcmdldFBvc2l0aW9uLCByb2JvdFBvc2l0aW9uKTtcblxuICAgICAgICBjb25zdCBsaW5lYXJTcGVlZCA9IHRhcmdldERpc3RhbmNlIDwgMS4zKlNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZSA/IHRhcmdldERpc3RhbmNlICogKE1hdGguZXhwKC0wLjAxKnRhcmdldERpc3RhbmNlL1NwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZSkpIDogMDtcbiAgICAgICAgY29uc3QgYW5ndWxhclNwZWVkID0gTWF0aC5hdGFuMigodGFyZ2V0UG9zaXRpb24ueSAtIHJvYm90UG9zaXRpb24ueSksKHRhcmdldFBvc2l0aW9uLnggLSByb2JvdFBvc2l0aW9uLngpKS1yb2JvdFBvc2l0aW9uLnRoO1xuXG4gICAgICAgIHJldHVybiB7IHJpZ2h0OiBsaW5lYXJTcGVlZCAqTWF0aC5jb3MoYW5ndWxhclNwZWVkKSAsIGxlZnQ6IGxpbmVhclNwZWVkICpNYXRoLnNpbihhbmd1bGFyU3BlZWQgKSAgIH07XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gXCIuL1JvYm90XCI7XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyAoY2xhc3MgVGFyZ2V0IHtcbiAgXG4gICAgcHJpdmF0ZSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICAgIHByaXZhdGUgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuXG4gICAgcHJpdmF0ZSB0YXJnZXQgPSB7eDo0OTAseTo0OTAsIHRoOjAgfSBhcyBQb3NpdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIH1cblxuICAgIHNob3dUYXJnZXQoKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjb25zdCBkZWZhdWx0Q29sb3IgPSB0aGlzLmNvbnRleHQuZmlsbFN0eWxlO1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IFwiYmx1ZVwiO1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmFyYyh0aGlzLnRhcmdldC54LCB0aGlzLnRhcmdldC55LCAzLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbCgpO1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGRlZmF1bHRDb2xvcjtcbiAgICB9XG5cbiAgICBnZXRQb3NpdGlvbigpOlBvc2l0aW9uIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0O1xuICAgIH1cbn0pOyIsImltcG9ydCB7IE9ic3RhY2xlcyB9IGZyb20gXCIuL09ic3RhY2xlc1wiO1xuaW1wb3J0IFBhdGhHZW5lcmF0b3IgZnJvbSBcIi4vUGF0aEdlbmVyYXRvclwiO1xuaW1wb3J0IHsgUm9ib3QgfSBmcm9tIFwiLi9Sb2JvdFwiO1xuaW1wb3J0IHsgU3BlZWRDb250cm9sbGVyIH0gZnJvbSBcIi4vU3BlZWRDb250cm9sbGVyXCI7XG5pbXBvcnQgdGFyZ2V0IGZyb20gXCIuL1RhcmdldFwiO1xuXG5leHBvcnQgY2xhc3MgV29ybGQge1xuICByb2JvdCA9IG5ldyBSb2JvdCgpO1xuICBvYnN0YWNsZXMgPSBuZXcgT2JzdGFjbGVzKCk7XG4gIGNvbnJvbGxlciA9IG5ldyBTcGVlZENvbnRyb2xsZXIoKTtcblxuICBwcml2YXRlIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIHByaXZhdGUgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gIH1cblxuICBhbmltYXRlKCkge1xuICAgIHRoaXMuY2xlYXIoKTtcblxuICAgIGNvbnN0IGRpc3RhbmNlcyA9IHRoaXMub2JzdGFjbGVzLmNhbGNEaXN0YW5jZXModGhpcy5yb2JvdC5nZXRQb3NpdGlvbigpKTtcbiAgICBjb25zdCBzZW5zb3JEaXN0YW5jZXMgPSB0aGlzLm9ic3RhY2xlcy5jYWxjRGlzdGFuY2VzRnJvbVNlbnNvcnModGhpcy5yb2JvdC5nZXRTZW5zb3JzKCkpO1xuXG4gICAgY29uc3Qgc3BlZWQgPSB0aGlzLmNvbnJvbGxlci5jYWxjV2hlZWxzU3BlZWQoc2Vuc29yRGlzdGFuY2VzLCB0aGlzLnJvYm90LmdldFNwZWVkKCksdGhpcy5yb2JvdC5nZXRQb3NpdGlvbigpKTtcbiAgICB0aGlzLnJvYm90LmFuaW1hdGUoc3BlZWQpO1xuICAgIHRoaXMub2JzdGFjbGVzLnNob3coKTtcbiAgICBQYXRoR2VuZXJhdG9yLnNob3dGcm9udE9ic3RhY2xlUGF0aEF2b2lkYW5jZShzZW5zb3JEaXN0YW5jZXMsIHRoaXMucm9ib3QuZ2V0UG9zaXRpb24oKSk7XG4gICAgdGFyZ2V0LnNob3dUYXJnZXQoKTtcblxuXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7IHRoaXMuYW5pbWF0ZSgpIH0pO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgfVxuXG4gIGhhbmRsZUV2ZW50KGV2ZW50OiBQb2ludGVyRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFyKCk7XG5cbiAgICBzd2l0Y2ggKChldmVudC5jdXJyZW50VGFyZ2V0IGFzIEVsZW1lbnQpLmdldEF0dHJpYnV0ZShcImlkXCIpKSB7XG4gICAgICBjYXNlIFwicmlnaHRcIjoge1xuICAgICAgICB0aGlzLnJvYm90LmFuaW1hdGUoeyByaWdodDogMTYwLCBsZWZ0OiAxNTAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBcImxlZnRcIjoge1xuICAgICAgICB0aGlzLnJvYm90LmFuaW1hdGUoeyByaWdodDogMTUwLCBsZWZ0OiAxNjAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIFwiZm9yd2FyZFwiOiB7XG4gICAgICAgIHRoaXMucm9ib3QuYW5pbWF0ZSh7IHJpZ2h0OiAxNjAsIGxlZnQ6IDE2MCB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgXCJiYWNrd2FyZFwiOiB7XG4gICAgICAgIHRoaXMucm9ib3QuYW5pbWF0ZSh7IHJpZ2h0OiAtMTYwLCBsZWZ0OiAtMTYwIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBcInN0b3BcIjoge1xuICAgICAgICB0aGlzLnJvYm90LnRvZ2dsZVN0b3AoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgXCJzdGVwXCI6IHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICBjb25zdCBkaXN0YW5jZXMgPSB0aGlzLm9ic3RhY2xlcy5jYWxjRGlzdGFuY2VzKHRoaXMucm9ib3QuZ2V0UG9zaXRpb24oKSk7XG4gICAgICAgIGNvbnN0IHNlbnNvckRpc3RhbmNlcyA9IHRoaXMub2JzdGFjbGVzLmNhbGNEaXN0YW5jZXNGcm9tU2Vuc29ycyh0aGlzLnJvYm90LmdldFNlbnNvcnMoKSk7XG4gICAgICAgIGNvbnN0IHNwZWVkID0gdGhpcy5jb25yb2xsZXIuY2FsY1doZWVsc1NwZWVkKHNlbnNvckRpc3RhbmNlcywgdGhpcy5yb2JvdC5nZXRTcGVlZCgpLHRoaXMucm9ib3QuZ2V0UG9zaXRpb24oKSk7XG4gICAgICAgIHRoaXMucm9ib3QuYW5pbWF0ZShzcGVlZCk7XG4gICAgICAgIHRoaXMub2JzdGFjbGVzLnNob3coKTtcbiAgICAgICAgUGF0aEdlbmVyYXRvci5zaG93RnJvbnRPYnN0YWNsZVBhdGhBdm9pZGFuY2Uoc2Vuc29yRGlzdGFuY2VzLCB0aGlzLnJvYm90LmdldFBvc2l0aW9uKCkpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBcInN0YXJ0XCI6IHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZGlzdGFuY2VzID0gdGhpcy5vYnN0YWNsZXMuY2FsY0Rpc3RhbmNlcyh0aGlzLnJvYm90LmdldFBvc2l0aW9uKCkpO1xuICAgICAgICBjb25zdCBzZW5zb3JEaXN0YW5jZXMgPSB0aGlzLm9ic3RhY2xlcy5jYWxjRGlzdGFuY2VzRnJvbVNlbnNvcnModGhpcy5yb2JvdC5nZXRTZW5zb3JzKCkpO1xuICAgICAgICBjb25zdCBzcGVlZCA9IHRoaXMuY29ucm9sbGVyLmNhbGNXaGVlbHNTcGVlZDIoc2Vuc29yRGlzdGFuY2VzLCB0aGlzLnJvYm90LmdldFNwZWVkKCkpO1xuICAgICAgICB0aGlzLnJvYm90LmFuaW1hdGUoc3BlZWQpO1xuICAgICAgICB0aGlzLm9ic3RhY2xlcy5zaG93KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIFwieFwiOntcbiAgICAgICAgdGhpcy5yb2JvdC5zZXRYKCBwYXJzZUZsb2F0KCAoZXZlbnQuY3VycmVudFRhcmdldCBhcyB1bmtub3duIGFzIHsgdmFsdWU6c3RyaW5nfSkudmFsdWUgKSAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgXCJ5XCI6e1xuICAgICAgICB0aGlzLnJvYm90LnNldFkoIHBhcnNlRmxvYXQoIChldmVudC5jdXJyZW50VGFyZ2V0IGFzIHVua25vd24gYXMgeyB2YWx1ZTpzdHJpbmd9KS52YWx1ZSApICApO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBcInRoXCI6e1xuICAgICAgICB0aGlzLnJvYm90LnNldFRoKCBwYXJzZUZsb2F0KCAoZXZlbnQuY3VycmVudFRhcmdldCBhcyB1bmtub3duIGFzIHsgdmFsdWU6c3RyaW5nfSkudmFsdWUgKSAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICB9XG5cblxuICAgIHRoaXMub2JzdGFjbGVzLnNob3coKTtcblxuICB9XG59IiwiXG5pbXBvcnQgeyBXb3JsZCB9IGZyb20gXCIuL1dvcmxkXCI7XG5cbmNvbnN0IHdvcmxkID0gbmV3IFdvcmxkKCk7XG5cbltcInJpZ2h0XCIsIFwibGVmdFwiLCBcImZvcndhcmRcIiwgXCJiYWNrd2FyZFwiLCBcInN0ZXBcIiwgXCJzdG9wXCJdLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChidXR0b24pLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XG4gICAgICAgIHdvcmxkLmhhbmRsZUV2ZW50KGV2ZW50IGFzIFBvaW50ZXJFdmVudCk7XG4gICAgfSk7XG59XG4pO1xuXG5bXCJ4XCIsXCJ5XCIsXCJ0aFwiXS5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbnB1dCkuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBldmVudCA9PiB7XG4gICAgICAgIHdvcmxkLmhhbmRsZUV2ZW50KGV2ZW50IGFzIFBvaW50ZXJFdmVudCk7XG4gICAgfSk7XG59KTtcblxud29ybGQuYW5pbWF0ZSgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==