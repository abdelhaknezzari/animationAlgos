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
/* harmony import */ var _Robot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Robot */ "./src/Robot.ts");
/* harmony import */ var _SonarSensors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SonarSensors */ "./src/SonarSensors.ts");


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
    Obstacles.prototype.calcDistancesAsJson = function () {
        var sensorObstDistances = this.calcDistancesFromSensors(_Robot__WEBPACK_IMPORTED_MODULE_0__["default"].getSensors());
        var frontLeft = sensorObstDistances.find(function (sens) { return sens.side === _SonarSensors__WEBPACK_IMPORTED_MODULE_1__["Sides"].frontLeft; }).d;
        var frontRight = sensorObstDistances.find(function (sens) { return sens.side === _SonarSensors__WEBPACK_IMPORTED_MODULE_1__["Sides"].frontRight; }).d;
        var backLeft = sensorObstDistances.find(function (sens) { return sens.side === _SonarSensors__WEBPACK_IMPORTED_MODULE_1__["Sides"].backLeft; }).d;
        var backRight = sensorObstDistances.find(function (sens) { return sens.side === _SonarSensors__WEBPACK_IMPORTED_MODULE_1__["Sides"].backRight; }).d;
        return { frontLeft: frontLeft, frontRight: frontRight, backLeft: backLeft, backRight: backRight };
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
/*! exports provided: Robot, default */
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

/* harmony default export */ __webpack_exports__["default"] = (new Robot());


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
/* harmony import */ var _SpeedController1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SpeedController1 */ "./src/SpeedController1.ts");
/* harmony import */ var _SpeedController3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpeedController3 */ "./src/SpeedController3.ts");
/* harmony import */ var _SpeedController4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SpeedController4 */ "./src/SpeedController4.ts");
/* harmony import */ var _World__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./World */ "./src/World.ts");




var SpeedController = /** @class */ (function () {
    function SpeedController() {
        this.iteration = 0;
    }
    SpeedController.prototype.calcWheelsSpeed = function (sensorObstDistances, currentSpeed, robotPosition, algorithm) {
        switch (algorithm) {
            case _World__WEBPACK_IMPORTED_MODULE_3__["AlgorithmToRun"].avoidObstaclesTarget: {
                return _SpeedController1__WEBPACK_IMPORTED_MODULE_0__["default"].calcWheelsSpeed(sensorObstDistances, currentSpeed, robotPosition);
            }
            case _World__WEBPACK_IMPORTED_MODULE_3__["AlgorithmToRun"].goToTargetByPath: {
                return _SpeedController4__WEBPACK_IMPORTED_MODULE_2__["default"].calcWheelsSpeed(sensorObstDistances, currentSpeed, robotPosition);
            }
            default: {
                return _SpeedController3__WEBPACK_IMPORTED_MODULE_1__["default"].calcWheelsSpeed(sensorObstDistances, currentSpeed, robotPosition);
            }
        }
    };
    SpeedController.MaxSpeed = 700;
    SpeedController.MaxDistance = 80;
    return SpeedController;
}());



/***/ }),

/***/ "./src/SpeedController1.ts":
/*!*********************************!*\
  !*** ./src/SpeedController1.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SonarSensors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SonarSensors */ "./src/SonarSensors.ts");
/* harmony import */ var _SpeedController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpeedController */ "./src/SpeedController.ts");
/* harmony import */ var _Target__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Target */ "./src/Target.ts");
var _a;



/* harmony default export */ __webpack_exports__["default"] = (new (_a = /** @class */ (function () {
        function SpeedController1() {
            this.iteration = 0;
        }
        SpeedController1.prototype.calcWheelsSpeed = function (sensorObstDistances, currentSpeed, robotPosition) {
            this.iteration += 1;
            var avoidObstacleCommand = this.avoidObstacle(sensorObstDistances, currentSpeed);
            var goToTargetCommand = this.goToTarget(robotPosition);
            return {
                left: avoidObstacleCommand.left * 0.5 + goToTargetCommand.left * 0.5,
                right: avoidObstacleCommand.right * 0.5 + goToTargetCommand.right * 0.5
            };
        };
        SpeedController1.prototype.calcRepulseExpo = function (obstacleDist, factor) {
            if (factor === void 0) { factor = 0.01; }
            return obstacleDist < _SpeedController__WEBPACK_IMPORTED_MODULE_1__["SpeedController"].MaxDistance
                ? 1 - Math.exp(factor * Math.sqrt(Math.pow(obstacleDist - _SpeedController__WEBPACK_IMPORTED_MODULE_1__["SpeedController"].MaxDistance, 2) / _SpeedController__WEBPACK_IMPORTED_MODULE_1__["SpeedController"].MaxDistance))
                : 0;
        };
        SpeedController1.prototype.calcCombinedRepulse = function (obstacleDist, factor) {
            if (factor === void 0) { factor = 0.01; }
            return obstacleDist < _SpeedController__WEBPACK_IMPORTED_MODULE_1__["SpeedController"].MaxDistance
                ? (0.4 * (1 - 1 / (1 + Math.exp(-0.001 * (obstacleDist - _SpeedController__WEBPACK_IMPORTED_MODULE_1__["SpeedController"].MaxDistance) / _SpeedController__WEBPACK_IMPORTED_MODULE_1__["SpeedController"].MaxDistance))) +
                    0.6 * (1 - Math.exp(factor * Math.sqrt(Math.pow(obstacleDist - _SpeedController__WEBPACK_IMPORTED_MODULE_1__["SpeedController"].MaxDistance, 2) / _SpeedController__WEBPACK_IMPORTED_MODULE_1__["SpeedController"].MaxDistance)))) * 0.5
                : 0;
        };
        SpeedController1.prototype.avoidObstacle = function (sensorObstDistances, currentSpeed) {
            var _a = this.calcObstacleDistances(sensorObstDistances), frontRightDist = _a.frontRightDist, frontLeftDist = _a.frontLeftDist, backRightDist = _a.backRightDist, backLeftDist = _a.backLeftDist;
            var calcSpeed = { left: _SpeedController__WEBPACK_IMPORTED_MODULE_1__["SpeedController"].MaxSpeed / 2, right: _SpeedController__WEBPACK_IMPORTED_MODULE_1__["SpeedController"].MaxSpeed / 2 };
            var _b = this.getObstacleDirection(frontRightDist, frontLeftDist, backRightDist, backLeftDist), obstIsOnFront = _b.obstIsOnFront, frontRightTurn = _b.frontRightTurn, backRightTurn = _b.backRightTurn, obstIsOnRight = _b.obstIsOnRight, obstIsOnBackRight = _b.obstIsOnBackRight, frontLeftTurn = _b.frontLeftTurn, backLeftTurn = _b.backLeftTurn, obstIsOnLeft = _b.obstIsOnLeft, obstIsOnBackLeft = _b.obstIsOnBackLeft;
            var wheelFactors = this.calcWheelsFactors(frontRightTurn, backRightTurn, obstIsOnRight, obstIsOnBackRight, obstIsOnFront, frontLeftTurn, backLeftTurn, obstIsOnLeft, obstIsOnBackLeft);
            calcSpeed.left += _SpeedController__WEBPACK_IMPORTED_MODULE_1__["SpeedController"].MaxSpeed * 0.5 * wheelFactors.alpha;
            calcSpeed.right += _SpeedController__WEBPACK_IMPORTED_MODULE_1__["SpeedController"].MaxSpeed * 0.5 * wheelFactors.beta;
            this.lastDistanceToObstacles = sensorObstDistances;
            return calcSpeed;
        };
        SpeedController1.prototype.calcWheelsFactors = function (frontRightTurn, backRightTurn, obstIsOnRight, obstIsOnBackRight, obstIsOnFront, frontLeftTurn, backLeftTurn, obstIsOnLeft, obstIsOnBackLeft) {
            var alpha = (frontRightTurn - backRightTurn) * obstIsOnRight + obstIsOnBackRight * backRightTurn + obstIsOnFront * (frontRightTurn + frontLeftTurn) * 0.5;
            var beta = (frontLeftTurn - backLeftTurn) * obstIsOnLeft + obstIsOnBackLeft * backLeftTurn;
            return { alpha: alpha, beta: beta };
        };
        SpeedController1.prototype.calcObstacleDistances = function (sensorObstDistances) {
            var frontLeftDist = sensorObstDistances.find(function (sens) { return sens.side === _SonarSensors__WEBPACK_IMPORTED_MODULE_0__["Sides"].frontLeft; }).d;
            var frontRightDist = sensorObstDistances.find(function (sens) { return sens.side === _SonarSensors__WEBPACK_IMPORTED_MODULE_0__["Sides"].frontRight; }).d;
            var backLeftDist = sensorObstDistances.find(function (sens) { return sens.side === _SonarSensors__WEBPACK_IMPORTED_MODULE_0__["Sides"].backLeft; }).d;
            var backRightDist = sensorObstDistances.find(function (sens) { return sens.side === _SonarSensors__WEBPACK_IMPORTED_MODULE_0__["Sides"].backRight; }).d;
            return { frontRightDist: frontRightDist, frontLeftDist: frontLeftDist, backRightDist: backRightDist, backLeftDist: backLeftDist };
        };
        SpeedController1.prototype.getObstacleDirection = function (frontRightDist, frontLeftDist, backRightDist, backLeftDist) {
            var frontRightTurn = this.calcCombinedRepulse(frontRightDist);
            var frontLeftTurn = this.calcCombinedRepulse(frontLeftDist);
            var backRightTurn = this.calcCombinedRepulse(backRightDist);
            var backLeftTurn = this.calcCombinedRepulse(backLeftDist);
            var obstIsOnFront = frontRightDist < _SpeedController__WEBPACK_IMPORTED_MODULE_1__["SpeedController"].MaxDistance
                && frontLeftDist < _SpeedController__WEBPACK_IMPORTED_MODULE_1__["SpeedController"].MaxDistance
                ? 1
                : 0;
            var obstIsOnBack = backRightDist < _SpeedController__WEBPACK_IMPORTED_MODULE_1__["SpeedController"].MaxDistance
                && backLeftDist < _SpeedController__WEBPACK_IMPORTED_MODULE_1__["SpeedController"].MaxDistance
                ? 1
                : 0;
            var obstIsOnRight = frontRightDist < _SpeedController__WEBPACK_IMPORTED_MODULE_1__["SpeedController"].MaxDistance &&
                frontLeftDist > _SpeedController__WEBPACK_IMPORTED_MODULE_1__["SpeedController"].MaxDistance ||
                backRightDist < _SpeedController__WEBPACK_IMPORTED_MODULE_1__["SpeedController"].MaxDistance
                    && backLeftDist > _SpeedController__WEBPACK_IMPORTED_MODULE_1__["SpeedController"].MaxDistance
                ? 1
                : 0;
            var obstIsOnBackRight = backRightDist < _SpeedController__WEBPACK_IMPORTED_MODULE_1__["SpeedController"].MaxDistance &&
                frontLeftDist > _SpeedController__WEBPACK_IMPORTED_MODULE_1__["SpeedController"].MaxDistance &&
                backRightDist > _SpeedController__WEBPACK_IMPORTED_MODULE_1__["SpeedController"].MaxDistance &&
                backLeftDist > _SpeedController__WEBPACK_IMPORTED_MODULE_1__["SpeedController"].MaxDistance
                ? 2.9
                : 0;
            var obstIsOnBackLeft = backLeftDist < _SpeedController__WEBPACK_IMPORTED_MODULE_1__["SpeedController"].MaxDistance &&
                backRightDist > _SpeedController__WEBPACK_IMPORTED_MODULE_1__["SpeedController"].MaxDistance &&
                frontLeftDist > _SpeedController__WEBPACK_IMPORTED_MODULE_1__["SpeedController"].MaxDistance &&
                frontLeftDist > _SpeedController__WEBPACK_IMPORTED_MODULE_1__["SpeedController"].MaxDistance
                ? 2.9
                : 0;
            var obstIsOnLeft = frontLeftDist < _SpeedController__WEBPACK_IMPORTED_MODULE_1__["SpeedController"].MaxDistance &&
                frontRightDist > _SpeedController__WEBPACK_IMPORTED_MODULE_1__["SpeedController"].MaxDistance ||
                backLeftDist < _SpeedController__WEBPACK_IMPORTED_MODULE_1__["SpeedController"].MaxDistance &&
                    backRightDist > _SpeedController__WEBPACK_IMPORTED_MODULE_1__["SpeedController"].MaxDistance
                ? 1
                : 0;
            return { obstIsOnFront: obstIsOnFront, frontRightTurn: frontRightTurn, backRightTurn: backRightTurn, obstIsOnRight: obstIsOnRight, obstIsOnBackRight: obstIsOnBackRight, frontLeftTurn: frontLeftTurn, backLeftTurn: backLeftTurn, obstIsOnLeft: obstIsOnLeft, obstIsOnBackLeft: obstIsOnBackLeft };
        };
        SpeedController1.prototype.getObstacleCode = function (frontLeftDist, frontRightDist, backLeftDist, backRightDist) {
            return ((frontLeftDist < _SpeedController__WEBPACK_IMPORTED_MODULE_1__["SpeedController"].MaxDistance ? 1 : 0) << 3) |
                ((frontRightDist < _SpeedController__WEBPACK_IMPORTED_MODULE_1__["SpeedController"].MaxDistance ? 1 : 0) << 2) |
                ((backLeftDist < _SpeedController__WEBPACK_IMPORTED_MODULE_1__["SpeedController"].MaxDistance ? 1 : 0) << 1) |
                ((backRightDist < _SpeedController__WEBPACK_IMPORTED_MODULE_1__["SpeedController"].MaxDistance ? 1 : 0));
        };
        SpeedController1.prototype.calDist2Target = function (targetPosition, robotPosition) {
            return Math.sqrt(Math.pow(targetPosition.x - robotPosition.x, 2) + Math.pow(targetPosition.y - robotPosition.y, 2));
        };
        SpeedController1.prototype.goToTarget = function (robotPosition) {
            var targetPosition = _Target__WEBPACK_IMPORTED_MODULE_2__["default"].getPosition();
            var targetDistance = this.calDist2Target(targetPosition, robotPosition);
            var linearSpeed = targetDistance < 1.3 * _SpeedController__WEBPACK_IMPORTED_MODULE_1__["SpeedController"].MaxDistance ? targetDistance * (Math.exp(-0.01 * targetDistance / _SpeedController__WEBPACK_IMPORTED_MODULE_1__["SpeedController"].MaxDistance)) : 0;
            var angularSpeed = Math.atan2((targetPosition.y - robotPosition.y), (targetPosition.x - robotPosition.x)) - robotPosition.th;
            return { right: linearSpeed * Math.cos(angularSpeed), left: linearSpeed * Math.sin(angularSpeed) };
        };
        return SpeedController1;
    }()),
    _a.MaxSpeed = 700,
    _a.MaxDistance = 80,
    _a));


/***/ }),

/***/ "./src/SpeedController3.ts":
/*!*********************************!*\
  !*** ./src/SpeedController3.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Robot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Robot */ "./src/Robot.ts");
/* harmony import */ var _SpeedController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpeedController */ "./src/SpeedController.ts");
/* harmony import */ var _Target__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Target */ "./src/Target.ts");
var _a;



/* harmony default export */ __webpack_exports__["default"] = (new (_a = /** @class */ (function () {
        function SpeedController3() {
            this.iteration = 0;
        }
        SpeedController3.prototype.wrap2Pi = function (ang) {
            return ang > Math.PI ? (-2 * Math.PI + ang) : ang;
        };
        SpeedController3.prototype.calDist2Target = function (targetPosition, robotPosition) {
            return Math.sqrt(Math.pow(targetPosition.x - robotPosition.x, 2) + Math.pow(targetPosition.y - robotPosition.y, 2));
        };
        SpeedController3.prototype.calcWheelsSpeed = function (sensorObstDistances, currentSpeed, robotPosition) {
            //    Control to reference pose using an intermediate direction:
            var targetPosition = _Target__WEBPACK_IMPORTED_MODULE_2__["default"].getPosition();
            var phiR = Math.atan2((targetPosition.y - robotPosition.y), (targetPosition.x - robotPosition.x));
            var alpha = this.wrap2Pi(phiR - Math.PI);
            var beta = (alpha < 0 ? -1 : 1) * Math.atan(SpeedController3.DistanceFromTargetGoal / this.calDist2Target(targetPosition, robotPosition));
            var linearSpeed = this.calDist2Target(targetPosition, robotPosition);
            var angularSpeed = this.wrap2Pi(phiR - robotPosition.th +
                (Math.abs(alpha) < Math.abs(beta) ? alpha : beta));
            return { right: (linearSpeed - _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].robotAttr.rW * 0.5 * angularSpeed),
                left: (linearSpeed + _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].robotAttr.rW * 0.5 * angularSpeed) };
        };
        SpeedController3.prototype.getLeftPulseObstacle = function (obstacles) {
            return this.calcPulse(obstacles.frontLeft) + this.calcPulse(obstacles.backLeft);
        };
        SpeedController3.prototype.getLFrontPulseObstacle = function (obstacles) {
            return this.calcPulse(obstacles.frontLeft) * this.calcPulse(obstacles.frontRight);
        };
        SpeedController3.prototype.calcPulse = function (dist) {
            return dist < _SpeedController__WEBPACK_IMPORTED_MODULE_1__["SpeedController"].MaxDistance ? 1 / (1 + Math.exp(-Math.abs(dist))) : 0;
        };
        return SpeedController3;
    }()),
    _a.MaxSpeed = 700,
    _a.MaxDistance = 80,
    _a.DistanceFromTargetGoal = 20,
    _a));


/***/ }),

/***/ "./src/SpeedController4.ts":
/*!*********************************!*\
  !*** ./src/SpeedController4.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Robot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Robot */ "./src/Robot.ts");
/* harmony import */ var _SpeedController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpeedController */ "./src/SpeedController.ts");
/* harmony import */ var _Target__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Target */ "./src/Target.ts");
var _a;



/* harmony default export */ __webpack_exports__["default"] = (new (_a = /** @class */ (function () {
        function SpeedController4() {
            this.iteration = 0;
        }
        SpeedController4.prototype.wrap2Pi = function (ang) {
            return ang > Math.PI ? (-2 * Math.PI + ang) : ang;
        };
        SpeedController4.prototype.calDist2Target = function (targetPosition, robotPosition) {
            return Math.sqrt(Math.pow(targetPosition.x - robotPosition.x, 2) + Math.pow(targetPosition.y - robotPosition.y, 2));
        };
        SpeedController4.prototype.calcWheelsSpeed = function (sensorObstDistances, currentSpeed, robotPosition) {
            //    Control to reference pose using an intermediate direction:
            var targetPosition = _Target__WEBPACK_IMPORTED_MODULE_2__["default"].getPosition();
            return this.getCommandToTarget(targetPosition, robotPosition);
        };
        SpeedController4.prototype.getCommandToTarget = function (targetPosition, robotPosition) {
            var phiR = Math.atan2((targetPosition.y - robotPosition.y), (targetPosition.x - robotPosition.x));
            var alpha = this.wrap2Pi(phiR - Math.PI);
            var beta = (alpha < 0 ? -1 : 1) * Math.atan(SpeedController4.DistanceFromTargetGoal / this.calDist2Target(targetPosition, robotPosition));
            var linearSpeed = this.calDist2Target(targetPosition, robotPosition);
            var angularSpeed = this.wrap2Pi(phiR - robotPosition.th +
                (Math.abs(alpha) < Math.abs(beta) ? alpha : beta));
            return {
                right: (linearSpeed - _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].robotAttr.rW * 0.5 * angularSpeed),
                left: (linearSpeed + _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].robotAttr.rW * 0.5 * angularSpeed)
            };
        };
        SpeedController4.prototype.getLeftPulseObstacle = function (obstacles) {
            return this.calcPulse(obstacles.frontLeft) + this.calcPulse(obstacles.backLeft);
        };
        SpeedController4.prototype.getLFrontPulseObstacle = function (obstacles) {
            return this.calcPulse(obstacles.frontLeft) * this.calcPulse(obstacles.frontRight);
        };
        SpeedController4.prototype.calcPulse = function (dist) {
            return dist < _SpeedController__WEBPACK_IMPORTED_MODULE_1__["SpeedController"].MaxDistance ? 1 / (1 + Math.exp(-Math.abs(dist))) : 0;
        };
        return SpeedController4;
    }()),
    _a.MaxSpeed = 700,
    _a.MaxDistance = 80,
    _a.DistanceFromTargetGoal = 20,
    _a));


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
/*! exports provided: AlgorithmToRun, World */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlgorithmToRun", function() { return AlgorithmToRun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "World", function() { return World; });
/* harmony import */ var _Obstacles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Obstacles */ "./src/Obstacles.ts");
/* harmony import */ var _PathGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PathGenerator */ "./src/PathGenerator.ts");
/* harmony import */ var _Robot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Robot */ "./src/Robot.ts");
/* harmony import */ var _SpeedController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SpeedController */ "./src/SpeedController.ts");
/* harmony import */ var _Target__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Target */ "./src/Target.ts");





var AlgorithmToRun;
(function (AlgorithmToRun) {
    AlgorithmToRun["goToTarget"] = "goToTarget";
    AlgorithmToRun["avoidObstaclesTarget"] = "avoidObstaclesTarget";
    AlgorithmToRun["goToTargetByPath"] = "goToTargetByPath";
})(AlgorithmToRun || (AlgorithmToRun = {}));
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
        var speed = this.conroller.calcWheelsSpeed(sensorDistances, this.robot.getSpeed(), this.robot.getPosition(), this.getAlogorithm());
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
                var speed = this.conroller.calcWheelsSpeed(sensorDistances, this.robot.getSpeed(), this.robot.getPosition(), this.getAlogorithm());
                this.robot.animate(speed);
                this.obstacles.show();
                _PathGenerator__WEBPACK_IMPORTED_MODULE_1__["default"].showFrontObstaclePathAvoidance(sensorDistances, this.robot.getPosition());
                break;
            }
            case "start": {
                this.clear();
                var distances = this.obstacles.calcDistances(this.robot.getPosition());
                var sensorDistances = this.obstacles.calcDistancesFromSensors(this.robot.getSensors());
                var speed = this.conroller.calcWheelsSpeed(sensorDistances, this.robot.getSpeed(), this.robot.getPosition(), this.getAlogorithm());
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
            case AlgorithmToRun.avoidObstaclesTarget.toString(): {
                this.checkRadioButton(AlgorithmToRun.avoidObstaclesTarget.toString());
                break;
            }
            case AlgorithmToRun.goToTarget.toString(): {
                this.checkRadioButton(AlgorithmToRun.goToTarget.toString());
                break;
            }
        }
        this.obstacles.show();
    };
    World.prototype.checkRadioButton = function (radioButton) {
        Object.keys(AlgorithmToRun)
            .forEach(function (algo) { document.getElementById(algo).checked = false; });
        document.getElementById(radioButton).checked = true;
    };
    World.prototype.getAlogorithm = function () {
        if (document.getElementById(AlgorithmToRun.goToTarget.toString()).checked) {
            return AlgorithmToRun.goToTarget;
        }
        return AlgorithmToRun.avoidObstaclesTarget;
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
["right", "left", "forward", "backward", "step", "stop"]
    .concat(Object.keys(_World__WEBPACK_IMPORTED_MODULE_0__["AlgorithmToRun"]))
    .forEach(function (button) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL09ic3RhY2xlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUGF0aEdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUm9ib3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NvbmFyU2Vuc29ycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU3BlZWRDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9TcGVlZENvbnRyb2xsZXIxLnRzIiwid2VicGFjazovLy8uL3NyYy9TcGVlZENvbnRyb2xsZXIzLnRzIiwid2VicGFjazovLy8uL3NyYy9TcGVlZENvbnRyb2xsZXI0LnRzIiwid2VicGFjazovLy8uL3NyYy9UYXJnZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1dvcmxkLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQTBDO0FBQ0s7QUF1Qi9DO0lBUUk7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFzQixDQUFDO1FBQ3JFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELHFDQUFpQixHQUFqQjtRQUFBLGlCQVlDO1FBWEcsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNULEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRSxVQUFDLENBQUMsRUFBRSxHQUFHLElBQUssVUFBRyxFQUFILENBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxhQUFHLElBQU0sT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFZO1lBQzlHLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRSxVQUFDLENBQUMsRUFBRSxHQUFHLElBQUssVUFBRyxFQUFILENBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxhQUFHLElBQU0sT0FBTyxFQUFFLENBQUMsRUFBRSxLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQVk7WUFDL0gsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRyxFQUFFLFVBQUMsQ0FBQyxFQUFFLEdBQUcsSUFBSyxVQUFHLEVBQUgsQ0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLGFBQUcsSUFBTSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBWTtZQUMvSCxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFHLEVBQUUsVUFBQyxDQUFDLEVBQUUsR0FBRyxJQUFLLFVBQUcsRUFBSCxDQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsYUFBRyxJQUFNLE9BQU8sRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBWTtZQUM5RyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFDLElBQUksRUFBQyxFQUFFLFVBQUMsQ0FBQyxFQUFFLEdBQUcsSUFBSyxVQUFHLEVBQUgsQ0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLGFBQUcsSUFBTSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFDLEdBQUcsRUFBRyxDQUFDLEVBQUUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUMsSUFBSSxHQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFZO1lBQ2hLLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUMsSUFBSSxFQUFDLEVBQUUsVUFBQyxDQUFDLEVBQUUsR0FBRyxJQUFLLFVBQUcsRUFBSCxDQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsYUFBRyxJQUFNLE9BQU8sRUFBRSxDQUFDLEVBQUUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUMsR0FBRyxFQUFHLENBQUMsRUFBRSxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBQyxJQUFJLEdBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQVk7WUFDaEssS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBQyxJQUFJLEVBQUMsRUFBRSxVQUFDLENBQUMsRUFBRSxHQUFHLElBQUssVUFBRyxFQUFILENBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxhQUFHLElBQU0sT0FBTyxFQUFFLENBQUMsRUFBRSxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBQyxHQUFHLEVBQUcsQ0FBQyxFQUFFLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFZO1lBQzNKLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUMsR0FBRyxFQUFDLEVBQUUsVUFBQyxDQUFDLEVBQUUsR0FBRyxJQUFLLFVBQUcsRUFBSCxDQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsYUFBRyxJQUFNLE9BQU8sRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBWTtZQUN0SSxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFDLEdBQUcsRUFBQyxFQUFFLFVBQUMsQ0FBQyxFQUFFLEdBQUcsSUFBSyxVQUFHLEVBQUgsQ0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLGFBQUcsSUFBTSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEtBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQVk7U0FDN0osQ0FBQztJQUNOLENBQUM7SUFFQSw0Q0FBd0IsR0FBeEIsVUFBeUIsT0FBZ0I7UUFBekMsaUJBNEJDO1FBM0JFLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFFLFVBQUMsR0FBRyxFQUFDLEdBQUcsSUFBSyxVQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFmLENBQWUsRUFBQyxFQUFFLENBQUUsQ0FBQztRQUN6RSxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUN4QixnQkFBTTs7WUFFTCxPQUFPO2dCQUNKLENBQUMsUUFBQyxXQUFXLENBQUMsR0FBRyxDQUNiLG1CQUFTO29CQUNOLE9BQU87d0JBQ04sQ0FBQyxFQUFDLFNBQVMsQ0FBQyxDQUFDO3dCQUNiLENBQUMsRUFBQyxTQUFTLENBQUMsQ0FBQzt3QkFDYixDQUFDLEVBQUUsS0FBSSxDQUFDLCtCQUErQixDQUFDLEVBQUMsQ0FBQyxFQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUMsRUFBRSxFQUFDLElBQUksRUFBRSxFQUFDLFNBQVMsQ0FBQztxQkFDMUUsQ0FBQztnQkFDZCxDQUFDLENBQ0osQ0FBQyxJQUFJLENBQUUsVUFBQyxHQUFHLEVBQUMsR0FBRztvQkFDWixJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRTt3QkFDZixPQUFPLENBQUMsQ0FBQyxDQUFDO3FCQUNiO3lCQUFNLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFO3dCQUN0QixPQUFPLENBQUMsQ0FBQztxQkFDWjt5QkFBTTt3QkFDSCxPQUFPLENBQUMsQ0FBQztxQkFDWjtvQkFBQSxDQUFDO2dCQUNOLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQywwQ0FBRSxDQUFDO2dCQUNSLElBQUksRUFBQyxNQUFNLENBQUMsSUFBSTthQUNBLENBQUM7UUFDckIsQ0FBQyxDQUNKLENBQUM7UUFDRixPQUFPLFFBQVEsQ0FBQztJQUNuQixDQUFDO0lBRUYsaUNBQWEsR0FBYixVQUFlLGFBQXNCO1FBQXJDLGlCQWtCQztRQWpCRyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFFLFVBQUMsR0FBRyxFQUFDLEdBQUcsSUFBSyxVQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFmLENBQWUsRUFBQyxFQUFFLENBQUUsQ0FBQyxHQUFHLENBQzNELG1CQUFTO1lBQ04sT0FBTztnQkFDTixDQUFDLEVBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ2IsQ0FBQyxFQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNiLENBQUMsRUFBRSxLQUFJLENBQUMsK0JBQStCLENBQUMsYUFBYSxFQUFDLFNBQVMsQ0FBQzthQUN2RCxDQUFDO1FBQ2QsQ0FBQyxDQUNKLENBQUMsSUFBSSxDQUFFLFVBQUMsR0FBRyxFQUFDLEdBQUc7WUFDWixJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDZixPQUFPLENBQUMsQ0FBQyxDQUFDO2FBQ2I7aUJBQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3RCLE9BQU8sQ0FBQyxDQUFDO2FBQ1o7aUJBQU07Z0JBQ0gsT0FBTyxDQUFDLENBQUM7YUFDWjtZQUFBLENBQUM7UUFDTixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxtREFBK0IsR0FBL0IsVUFBaUMsYUFBc0IsRUFBQyxLQUFXO1FBQzdELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25HLENBQUM7SUFFRCx3QkFBSSxHQUFKO1FBQUEsaUJBT0M7UUFORyx3QkFBd0I7UUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsY0FBSSxJQUFJLFdBQUksQ0FBQyxPQUFPLENBQUUsZUFBSztZQUMxQyxLQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBRSxFQUZ3QixDQUV4QixDQUFDLENBQUM7SUFHVCxDQUFDO0lBRUQsOEJBQVUsR0FBVixVQUFXLEtBQVk7UUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCx1Q0FBbUIsR0FBbkI7UUFDSSxJQUFNLG1CQUFtQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyw4Q0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFDOUUsSUFBTSxTQUFTLEdBQUcsbUJBQW1CLENBQUMsSUFBSSxDQUFDLGNBQUksSUFBSSxXQUFJLENBQUMsSUFBSSxLQUFLLG1EQUFLLENBQUMsU0FBUyxFQUE3QixDQUE2QixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BGLElBQU0sVUFBVSxHQUFHLG1CQUFtQixDQUFDLElBQUksQ0FBQyxjQUFJLElBQUksV0FBSSxDQUFDLElBQUksS0FBSyxtREFBSyxDQUFDLFVBQVUsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RixJQUFNLFFBQVEsR0FBRyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsY0FBSSxJQUFJLFdBQUksQ0FBQyxJQUFJLEtBQUssbURBQUssQ0FBQyxRQUFRLEVBQTVCLENBQTRCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEYsSUFBTSxTQUFTLEdBQUcsbUJBQW1CLENBQUMsSUFBSSxDQUFDLGNBQUksSUFBSSxXQUFJLENBQUMsSUFBSSxLQUFLLG1EQUFLLENBQUMsU0FBUyxFQUE3QixDQUE2QixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BGLE9BQU8sRUFBRSxTQUFTLGFBQUUsVUFBVSxjQUFFLFFBQVEsWUFBRSxTQUFTLGFBQUUsQ0FBQztJQUMxRCxDQUFDO0lBbEdNLGVBQUssR0FBRyxHQUFHLENBQUM7SUFtR3ZCLGdCQUFDO0NBQUE7QUExR3FCO0FBNEdQLG1FQUFJLFNBQVMsRUFBRSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDbkkvQjtBQUFBO0FBQUE7QUFBMEM7QUFDSztBQUUvQztJQUlJO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBc0IsQ0FBQztRQUNyRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRWhELENBQUM7SUFFRCx3Q0FBZ0IsR0FBaEIsVUFBaUIsSUFBWSxFQUFFLEVBQVUsRUFBRSxJQUFZO1FBQ25ELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxRQUFDLEVBQUQsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUNuRixjQUFJLElBQUksV0FBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxJQUFJLEdBQUcsSUFBSSxFQUFoRCxDQUFnRCxDQUMzRCxDQUFDO0lBQ04sQ0FBQztJQUVELHNEQUE4QixHQUE5QixVQUErQixPQUF5QixFQUFFLGFBQXVCO1FBQWpGLGlCQWtDQztRQWpDRyxJQUFNLGFBQWEsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQUksSUFBSSxXQUFJLENBQUMsSUFBSSxLQUFLLG1EQUFLLENBQUMsU0FBUyxFQUE3QixDQUE2QixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVFLElBQU0sY0FBYyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBSSxJQUFJLFdBQUksQ0FBQyxJQUFJLEtBQUssbURBQUssQ0FBQyxVQUFVLEVBQTlCLENBQThCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUUsSUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFJLElBQUksV0FBSSxDQUFDLElBQUksS0FBSyxtREFBSyxDQUFDLFFBQVEsRUFBNUIsQ0FBNEIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxRSxJQUFNLGFBQWEsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQUksSUFBSSxXQUFJLENBQUMsSUFBSSxLQUFLLG1EQUFLLENBQUMsU0FBUyxFQUE3QixDQUE2QixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRzVFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLG1CQUFpQixhQUFlLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGtCQUFnQixZQUFjLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLG9CQUFrQixjQUFnQixFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxtQkFBaUIsYUFBZSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxXQUFTLGFBQWEsQ0FBQyxFQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRTFELElBQUksWUFBWSxJQUFJLENBQUMsR0FBQyw0Q0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3BDLGFBQWEsSUFBSSxDQUFDLEdBQUMsNENBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDekIsSUFBSSxhQUFhLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBQyxFQUFFLEdBQUMsR0FBRyxJQUFJLGFBQWEsQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLEVBQUUsR0FBQyxFQUFFLEdBQUMsR0FBRyxFQUFFO2dCQUUzRSxJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztnQkFDNUMsSUFBTSxNQUFJLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQztnQkFDN0IsSUFBTSxNQUFJLEdBQUcsYUFBYSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsNENBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDO2dCQUV4RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQUs7b0JBQ3RELEtBQUksQ0FBQyxVQUFVLENBQUM7d0JBQ1osQ0FBQyxFQUFFLE1BQUksR0FBRyxHQUFHLEdBQUcsNENBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO3dCQUNwRCxDQUFDLEVBQUUsTUFBSSxHQUFHLEdBQUcsR0FBRyw0Q0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7d0JBQ3BELENBQUMsRUFBRSxDQUFDO3FCQUNFLENBQUMsQ0FBQztnQkFFaEIsQ0FBQyxDQUNBLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDO2FBQ3pDO1NBQ0o7SUFDTCxDQUFDO0lBRUQsa0NBQVUsR0FBVixVQUFXLEtBQVk7UUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7UUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBRXhCLENBQUM7SUFFTCxvQkFBQztBQUFELENBQUM7QUFHYyxtRUFBSSxhQUFhLEVBQUUsRUFBQzs7Ozs7Ozs7Ozs7OztBQ2xFbkM7QUFBQTtBQUFBO0FBQXNEO0FBZXREO0lBdUJJO1FBbkJRLFNBQUksR0FBRyxLQUFLLENBQUM7UUFXckIsT0FBRSxHQUFHLElBQUksQ0FBQztRQUVWLGFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUMsQ0FBQyxFQUFjLENBQUM7UUFDaEQsVUFBSyxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFXLENBQUM7UUFDM0MsVUFBSyxHQUFHLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQWtCLENBQUM7UUFDM0MsaUJBQVksR0FBQyxJQUFJLDBEQUFZLEVBQUUsQ0FBQztRQUk1QixJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFzQixDQUFDO1FBQ3JFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELDBCQUFVLEdBQVYsVUFBVyxRQUFrQjtRQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3pCLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBQzVDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUNsQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDO0lBQzFDLENBQUM7SUFFRCx5QkFBUyxHQUFULFVBQVUsUUFBa0I7UUFBNUIsaUJBaUNDO1FBaENHLElBQUksZ0JBQWdCLEdBQUcsUUFBUSxDQUFDO1FBQ2hDLElBQU0sV0FBVyxHQUFHLFVBQUMsQ0FBUyxFQUFFLEVBQVU7WUFDdEMsSUFBTSxNQUFNLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBRSxDQUFDO1lBQ3RELElBQU0sTUFBTSxHQUFHLGdCQUFnQixDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNyRCxnQkFBZ0IsR0FBRyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLE1BQUUsQ0FBQztZQUNoRCxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDO1FBRUYsSUFBTSxVQUFVLEdBQUcsVUFBQyxLQUFZO1lBQzVCLFdBQVcsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRyxRQUFRLENBQUMsRUFBRSxHQUFFLElBQUksQ0FBQyxFQUFFLEdBQUMsQ0FBQyxHQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hFLFdBQVcsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsRUFBRSxHQUFDLElBQUksQ0FBQyxFQUFFLEdBQUMsQ0FBQyxHQUFFLEtBQUssQ0FBQyxDQUFDO1lBQy9ELFdBQVcsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRyxRQUFRLENBQUMsRUFBRSxHQUFFLENBQUMsR0FBQyxJQUFJLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0RSxDQUFDLENBQUM7UUFFRixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUcsZ0JBQWdCLENBQUMsQ0FBQyxDQUFFLENBQUM7UUFDOUQsV0FBVyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxDQUFDLEVBQUcsUUFBUSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFDLENBQUMsQ0FBRSxDQUFDO1FBQ2hFLFVBQVUsQ0FBRSxJQUFJLENBQUMsRUFBRSxHQUFDLENBQUMsQ0FBRSxDQUFDO1FBQ3hCLFdBQVcsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRyxRQUFRLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUUsQ0FBQztRQUN6RCxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBRSxDQUFDO1FBQ3JCLFdBQVcsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRyxRQUFRLENBQUMsRUFBRSxHQUFFLElBQUksQ0FBQyxFQUFFLEdBQUMsQ0FBQyxDQUFFLENBQUM7UUFDMUQsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBQyxDQUFDLENBQUUsQ0FBQztRQUN4QixXQUFXLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBRSxDQUFDO1FBQy9DLFVBQVUsQ0FBQyxDQUFDLENBQUUsQ0FBQztRQUNmLFdBQVcsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBQyxDQUFDLEVBQUcsUUFBUSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFDLENBQUMsQ0FBRSxDQUFDO1FBRTdELFdBQVcsQ0FBQyxDQUFDLEVBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBRyxDQUFDO1FBQy9CLFdBQVcsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFDLENBQUMsQ0FBRSxDQUFDO1FBQ3pDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLEVBQUUsR0FBRSxJQUFJLENBQUMsRUFBRSxDQUFFLENBQUM7UUFFdEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBRXhCLENBQUM7SUFFRCxrQ0FBa0IsR0FBbEI7UUFDSSxJQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLEdBQUcsRUFBRTtZQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFFO1lBQ2pDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUU7U0FDdEM7UUFFRCxJQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUc7WUFDaEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBRTtZQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFFO1NBQ3RDO0lBQ0wsQ0FBQztJQUdELDBCQUFVLEdBQVYsVUFBVyxRQUFrQjtRQUE3QixpQkFpQ0M7UUFoQ0csSUFBSSxnQkFBZ0IsR0FBRyxRQUFRLENBQUM7UUFDaEMsSUFBTSxXQUFXLEdBQUcsVUFBQyxDQUFTLEVBQUUsRUFBVTtZQUN0QyxJQUFNLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDckUsSUFBTSxNQUFNLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQ3JFLGdCQUFnQixHQUFHLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLEVBQUUsTUFBRSxDQUFDO1lBQ2hELEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUM7UUFFRixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUcsZ0JBQWdCLENBQUMsQ0FBQyxDQUFFLENBQUM7UUFDOUQsV0FBVyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFHLEVBQUUsR0FBRyxRQUFRLENBQUMsRUFBRSxDQUFFLENBQUM7UUFDcEQsV0FBVyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsR0FBRSxRQUFRLENBQUMsRUFBRSxDQUFFLENBQUM7UUFDMUQsV0FBVyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsR0FBRyxRQUFRLENBQUMsRUFBRSxDQUFFLENBQUM7UUFDM0QsV0FBVyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRSxRQUFRLENBQUMsRUFBRSxDQUFFLENBQUM7UUFDeEQsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUUsQ0FBQztRQUN6RCxXQUFXLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRSxRQUFRLENBQUMsRUFBRSxDQUFFLENBQUM7UUFDakMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBRSxDQUFDO1FBQ2hDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBRSxDQUFDO1FBQ2xDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBRSxDQUFDO1FBQzNELFdBQVcsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxFQUFFLEdBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBRSxDQUFDO1FBQ25ELFdBQVcsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRSxRQUFRLENBQUMsRUFBRSxDQUFFLENBQUM7UUFDcEQsV0FBVyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBRSxDQUFDO1FBQ3ZELFdBQVcsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRSxRQUFRLENBQUMsRUFBRSxDQUFFLENBQUM7UUFDbkQsV0FBVyxDQUFDLEtBQUssQ0FB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Z0JBQWdCLENBQUMsUUFBUSxFQUFFLGVBQUs7UUFDM0QsS0FBSyxDQUFDLFdBQVcsQ0FBQyxLQUFxQixDQUFDLENBQUM7SUFDN0MsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQztBQUVILEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImltcG9ydCBSb2JvdCwgeyBQb3NpdGlvbiB9IGZyb20gXCIuL1JvYm90XCI7XHJcbmltcG9ydCB7IFNlbnNvciwgU2lkZXMgfSBmcm9tIFwiLi9Tb25hclNlbnNvcnNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUG9pbnRNaW5pbXVtIHtcclxuICAgIHg6IG51bWJlciwgLy8gcG9zaXRpb24gY29vcmRpbmF0ZSB4XHJcbiAgICB5OiBudW1iZXIsIC8vIHBvc2l0aW9uIGNvb3JkaW5hdGUgeVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBvaW50IGV4dGVuZHMgUG9pbnRNaW5pbXVtIHtcclxuICAgIGQ6bnVtYmVyIC8vIGRpc3RhbmNlIGZyb20gcm9ib3RcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZW5zb3JEaXN0YW5jZSB7XHJcbiAgICBzaWRlOiBTaWRlcyxcclxuICAgIGQ6bnVtYmVyIC8vIGRpc3RhbmNlIGZyb20gcm9ib3RcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSb2JvdE9ic3RhY2xlRGlzdGFuY2VzIHtcclxuICAgIGZyb250TGVmdDogbnVtYmVyLCBcclxuICAgIGZyb250UmlnaHQ6bnVtYmVyLCBcclxuICAgIGJhY2tMZWZ0Om51bWJlciwgXHJcbiAgICBiYWNrUmlnaHQ6bnVtYmVyOyBcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE9ic3RhY2xlcyB7XHJcbiAgICBwcml2YXRlIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuXHJcblxyXG4gICAgd2FsbHM6IEFycmF5PEFycmF5PFBvaW50Pj47XHJcbiAgICBvYnN0YWNsZXM6IEFycmF5PFBvaW50PjtcclxuICAgIHN0YXRpYyByV2FsbCA9IDAuNTtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgICB0aGlzLmdlbmVyYXRlT2JzdGFjbGVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGVPYnN0YWNsZXMoKSB7XHJcbiAgICAgICAgdGhpcy53YWxscyA9IFtcclxuICAgICAgICAgICAgQXJyYXkuZnJvbSh7IGxlbmd0aDogdGhpcy5jYW52YXMuaGVpZ2h0IH0sIChfLCBrZXkpID0+IGtleSkubWFwKG51bSA9PiB7IHJldHVybiB7IHg6IDAsIHk6IG51bX07IH0pIGFzIFtQb2ludF0sXHJcbiAgICAgICAgICAgIEFycmF5LmZyb20oeyBsZW5ndGg6IHRoaXMuY2FudmFzLmhlaWdodCB9LCAoXywga2V5KSA9PiBrZXkpLm1hcChudW0gPT4geyByZXR1cm4geyB4OiB0aGlzLmNhbnZhcy53aWR0aCwgeTogbnVtIH07IH0pIGFzIFtQb2ludF0sXHJcbiAgICAgICAgICAgIEFycmF5LmZyb20oeyBsZW5ndGg6IHRoaXMuY2FudmFzLndpZHRoICB9LCAoXywga2V5KSA9PiBrZXkpLm1hcChudW0gPT4geyByZXR1cm4geyB4OiBudW0sIHk6IHRoaXMuY2FudmFzLmhlaWdodH07IH0pIGFzIFtQb2ludF0sXHJcbiAgICAgICAgICAgIEFycmF5LmZyb20oeyBsZW5ndGg6IHRoaXMuY2FudmFzLndpZHRoICB9LCAoXywga2V5KSA9PiBrZXkpLm1hcChudW0gPT4geyByZXR1cm4geyB4OiBudW0sIHk6IDB9OyB9KSBhcyBbUG9pbnRdLFxyXG4gICAgICAgICAgICBBcnJheS5mcm9tKHsgbGVuZ3RoOiB0aGlzLmNhbnZhcy53aWR0aCowLjE1fSwgKF8sIGtleSkgPT4ga2V5KS5tYXAobnVtID0+IHsgcmV0dXJuIHsgeDogdGhpcy5jYW52YXMuaGVpZ2h0KjAuMyAsIHk6IHRoaXMuY2FudmFzLmhlaWdodCowLjQ1LW51bSB9OyB9KSBhcyBbUG9pbnRdLFxyXG4gICAgICAgICAgICBBcnJheS5mcm9tKHsgbGVuZ3RoOiB0aGlzLmNhbnZhcy53aWR0aCowLjE1fSwgKF8sIGtleSkgPT4ga2V5KS5tYXAobnVtID0+IHsgcmV0dXJuIHsgeDogdGhpcy5jYW52YXMuaGVpZ2h0KjAuNyAsIHk6IHRoaXMuY2FudmFzLmhlaWdodCowLjcwLW51bSB9OyB9KSBhcyBbUG9pbnRdLFxyXG4gICAgICAgICAgICBBcnJheS5mcm9tKHsgbGVuZ3RoOiB0aGlzLmNhbnZhcy53aWR0aCowLjExfSwgKF8sIGtleSkgPT4ga2V5KS5tYXAobnVtID0+IHsgcmV0dXJuIHsgeDogdGhpcy5jYW52YXMuaGVpZ2h0KjAuNyAsIHk6IHRoaXMuY2FudmFzLmhlaWdodC1udW0gfTsgfSkgYXMgW1BvaW50XSxcclxuICAgICAgICAgICAgQXJyYXkuZnJvbSh7IGxlbmd0aDogdGhpcy5jYW52YXMud2lkdGgqMC43fSwgKF8sIGtleSkgPT4ga2V5KS5tYXAobnVtID0+IHsgcmV0dXJuIHsgeDogbnVtLCB5OiB0aGlzLmNhbnZhcy5oZWlnaHQqMC4zIH07IH0pIGFzIFtQb2ludF0sXHJcbiAgICAgICAgICAgIEFycmF5LmZyb20oeyBsZW5ndGg6IHRoaXMuY2FudmFzLndpZHRoKjAuN30sIChfLCBrZXkpID0+IGtleSkubWFwKG51bSA9PiB7IHJldHVybiB7IHg6IHRoaXMuY2FudmFzLndpZHRoIC0gbnVtLCB5OiB0aGlzLmNhbnZhcy5oZWlnaHQqMC43IH07IH0pIGFzIFtQb2ludF1cclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgICBjYWxjRGlzdGFuY2VzRnJvbVNlbnNvcnMoc2Vuc29yczpTZW5zb3JbXSk6U2Vuc29yRGlzdGFuY2VbXSB7XHJcbiAgICAgICAgY29uc3Qgd2FsbHNQb2ludHMgPSB0aGlzLndhbGxzLnJlZHVjZSggKHBydixjdXIpID0+IHBydi5jb25jYXQoY3VyKSxbXSApO1xyXG4gICAgICAgIGNvbnN0IHNlbnNEaXN0ID0gc2Vuc29ycy5tYXAoXHJcbiAgICAgICAgICAgIHNlbnNvciA9PiBcclxuICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBkOndhbGxzUG9pbnRzLm1hcChcclxuICAgICAgICAgICAgICAgICAgICB3YWxsUG9pbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6d2FsbFBvaW50LngsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6d2FsbFBvaW50LnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQ6IHRoaXMuZGlzdGFuY2VCZXR3ZWVuUm9ib3RBbmRPYnN0YWNsZSh7eDpzZW5zb3IueCx5OnNlbnNvci55LHRoOm51bGwgfSx3YWxsUG9pbnQpICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgfSBhcyBQb2ludDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApLnNvcnQoIChwcnYsY3VyKSA9PiAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCBwcnYuZCA8IGN1ci5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoIHBydi5kID4gY3VyLmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH0pWzBdPy5kLFxyXG4gICAgICAgICAgICAgICAgc2lkZTpzZW5zb3Iuc2lkZVxyXG4gICAgICAgICAgICAgfSBhcyBTZW5zb3JEaXN0YW5jZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIHNlbnNEaXN0O1xyXG4gICAgIH1cclxuXHJcbiAgICBjYWxjRGlzdGFuY2VzKCByb2JvdFBvc2l0aW9uOlBvc2l0aW9uKTpQb2ludFtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy53YWxscy5yZWR1Y2UoIChwcnYsY3VyKSA9PiBwcnYuY29uY2F0KGN1ciksW10gKS5tYXAoXHJcbiAgICAgICAgICAgIHdhbGxQb2ludCA9PiB7XHJcbiAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB4OndhbGxQb2ludC54LFxyXG4gICAgICAgICAgICAgICAgeTp3YWxsUG9pbnQueSxcclxuICAgICAgICAgICAgICAgIGQ6IHRoaXMuZGlzdGFuY2VCZXR3ZWVuUm9ib3RBbmRPYnN0YWNsZShyb2JvdFBvc2l0aW9uLHdhbGxQb2ludCkgICAgICBcclxuICAgICAgICAgICAgICAgfSBhcyBQb2ludDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICkuc29ydCggKHBydixjdXIpID0+ICB7XHJcbiAgICAgICAgICAgIGlmKCBwcnYuZCA8IGN1ci5kKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiggcHJ2LmQgPiBjdXIuZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkaXN0YW5jZUJldHdlZW5Sb2JvdEFuZE9ic3RhY2xlKCByb2JvdFBvc2l0aW9uOlBvc2l0aW9uLHBvaW50OlBvaW50KXtcclxuICAgICAgICAgIHJldHVybiBNYXRoLnNxcnQoIE1hdGgucG93KHJvYm90UG9zaXRpb24ueC1wb2ludC54LDIpICsgTWF0aC5wb3cocm9ib3RQb3NpdGlvbi55LXBvaW50LnksMikpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3coKSB7XHJcbiAgICAgICAgLy8gdGhpcy5jYWxjRGlzdGFuY2VzKCk7XHJcbiAgICAgICAgdGhpcy53YWxscy5mb3JFYWNoKHdhbGwgPT4gd2FsbC5mb3JFYWNoKCBwb2ludCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucGxvdENpcmNsZShwb2ludCk7XHJcbiAgICAgICAgfSApKTtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwbG90Q2lyY2xlKHBvaW50IDpQb2ludCkge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuYXJjKHBvaW50LngsIHBvaW50LnksIE9ic3RhY2xlcy5yV2FsbCwgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5jbG9zZVBhdGgoKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGNEaXN0YW5jZXNBc0pzb24oICk6Um9ib3RPYnN0YWNsZURpc3RhbmNlcyB7XHJcbiAgICAgICAgY29uc3Qgc2Vuc29yT2JzdERpc3RhbmNlcyA9IHRoaXMuY2FsY0Rpc3RhbmNlc0Zyb21TZW5zb3JzKFJvYm90LmdldFNlbnNvcnMoKSk7XHJcbiAgICAgICAgY29uc3QgZnJvbnRMZWZ0ID0gc2Vuc29yT2JzdERpc3RhbmNlcy5maW5kKHNlbnMgPT4gc2Vucy5zaWRlID09PSBTaWRlcy5mcm9udExlZnQpLmQ7XHJcbiAgICAgICAgY29uc3QgZnJvbnRSaWdodCA9IHNlbnNvck9ic3REaXN0YW5jZXMuZmluZChzZW5zID0+IHNlbnMuc2lkZSA9PT0gU2lkZXMuZnJvbnRSaWdodCkuZDtcclxuICAgICAgICBjb25zdCBiYWNrTGVmdCA9IHNlbnNvck9ic3REaXN0YW5jZXMuZmluZChzZW5zID0+IHNlbnMuc2lkZSA9PT0gU2lkZXMuYmFja0xlZnQpLmQ7XHJcbiAgICAgICAgY29uc3QgYmFja1JpZ2h0ID0gc2Vuc29yT2JzdERpc3RhbmNlcy5maW5kKHNlbnMgPT4gc2Vucy5zaWRlID09PSBTaWRlcy5iYWNrUmlnaHQpLmQ7XHJcbiAgICAgICAgcmV0dXJuIHsgZnJvbnRMZWZ0LCBmcm9udFJpZ2h0LCBiYWNrTGVmdCwgYmFja1JpZ2h0IH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBPYnN0YWNsZXMoKTsiLCJpbXBvcnQgeyBQb2ludCwgU2Vuc29yRGlzdGFuY2UgfSBmcm9tIFwiLi9PYnN0YWNsZXNcIjtcclxuaW1wb3J0IHsgUG9zaXRpb24sIFJvYm90IH0gZnJvbSBcIi4vUm9ib3RcIjtcclxuaW1wb3J0IHsgU2Vuc29yLCBTaWRlcyB9IGZyb20gXCIuL1NvbmFyU2Vuc29yc1wiO1xyXG5cclxuY2xhc3MgUGF0aEdlbmVyYXRvciB7XHJcbiAgICBwcml2YXRlIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldFJhbmdlT2ZBbmdsZXMoZnJvbTogbnVtYmVyLCB0bzogbnVtYmVyLCBzdGVwOiBudW1iZXIpOiBudW1iZXJbXSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oeyBsZW5ndGg6IE1hdGguY2VpbChNYXRoLmFicygodG8gLSBmcm9tKSAvIHN0ZXApKSB9LCAoeCwgaSkgPT4gaSkubWFwKFxyXG4gICAgICAgICAgICBpbmR4ID0+IHN0ZXAgPiAwID8gZnJvbSArIGluZHggKiBzdGVwIDogdG8gKyBpbmR4ICogc3RlcFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0Zyb250T2JzdGFjbGVQYXRoQXZvaWRhbmNlKHNlbnNvcnM6IFNlbnNvckRpc3RhbmNlW10sIHJvYm90UG9zaXRpb246IFBvc2l0aW9uKSB7XHJcbiAgICAgICAgY29uc3QgZnJvbnRMZWZ0RGlzdCA9IHNlbnNvcnMuZmluZChzZW5zID0+IHNlbnMuc2lkZSA9PT0gU2lkZXMuZnJvbnRMZWZ0KS5kO1xyXG4gICAgICAgIGNvbnN0IGZyb250UmlnaHREaXN0ID0gc2Vuc29ycy5maW5kKHNlbnMgPT4gc2Vucy5zaWRlID09PSBTaWRlcy5mcm9udFJpZ2h0KS5kO1xyXG4gICAgICAgIGNvbnN0IGJhY2tMZWZ0RGlzdCA9IHNlbnNvcnMuZmluZChzZW5zID0+IHNlbnMuc2lkZSA9PT0gU2lkZXMuYmFja0xlZnQpLmQ7XHJcbiAgICAgICAgY29uc3QgYmFja1JpZ2h0RGlzdCA9IHNlbnNvcnMuZmluZChzZW5zID0+IHNlbnMuc2lkZSA9PT0gU2lkZXMuYmFja1JpZ2h0KS5kO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxUZXh0KGBmcm9udExlZnREaXN0OiR7ZnJvbnRMZWZ0RGlzdH1gLCAxLCAxMCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxUZXh0KGBiYWNrTGVmdERpc3Q6JHtiYWNrTGVmdERpc3R9YCwgMSwgMzApO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsVGV4dChgZnJvbnRSaWdodERpc3Q6JHtmcm9udFJpZ2h0RGlzdH1gLCAxLCA1MCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxUZXh0KGBiYWNrUmlnaHREaXN0OiR7YmFja1JpZ2h0RGlzdH1gLCAxLCA3MCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxUZXh0KGBUaGV0YToke3JvYm90UG9zaXRpb24udGh9YCwgMSwgOTApO1xyXG5cclxuICAgICAgICBpZiAoYmFja0xlZnREaXN0IDw9IDMqUm9ib3Qucm9ib3RBdHRyLnJXICYmXHJcbiAgICAgICAgICAgIGJhY2tSaWdodERpc3QgPD0gMypSb2JvdC5yb2JvdEF0dHIuclcpIHtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICBpZiAocm9ib3RQb3NpdGlvbi50aCA+PSAtTWF0aC5QSSoxNS8xODAgJiYgcm9ib3RQb3NpdGlvbi50aCA8PSBNYXRoLlBJKjE1LzE4MCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRDb2xvciA9IHRoaXMuY29udGV4dC5maWxsU3R5bGU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhcmNYID0gcm9ib3RQb3NpdGlvbi54O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXJjWSA9IHJvYm90UG9zaXRpb24ueSArIDEuNSAqIFJvYm90LnJvYm90QXR0ci5yVztcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFJhbmdlT2ZBbmdsZXMoTWF0aC5QSSAvIDIsIDAsIC0wLjAyKS5mb3JFYWNoKGFuZ2xlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsb3RDaXJjbGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBhcmNYICsgMS41ICogUm9ib3Qucm9ib3RBdHRyLnJXICogTWF0aC5jb3MoYW5nbGUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBhcmNZICsgMS41ICogUm9ib3Qucm9ib3RBdHRyLnJXICogTWF0aC5zaW4oYW5nbGUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfSBhcyBQb2ludCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBjdXJyZW50Q29sb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcGxvdENpcmNsZShwb2ludDogUG9pbnQpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IFwiZ3JlZW5cIjtcclxuICAgICAgICB0aGlzLmNvbnRleHQuYXJjKHBvaW50LngsIHBvaW50LnksIDIsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGwoKTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFBhdGhHZW5lcmF0b3IoKTtcclxuIiwiaW1wb3J0IHsgU3BlZWQgfSBmcm9tIFwiLi9TcGVlZENvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgUG9pbnQgfSBmcm9tIFwiLi9PYnN0YWNsZXNcIjtcclxuaW1wb3J0IHsgU2Vuc29yLCBTb25hclNlbnNvcnMgfSBmcm9tIFwiLi9Tb25hclNlbnNvcnNcIjtcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBvc2l0aW9uIHtcclxuICAgIHg6IG51bWJlciwgLy8gcG9zaXRpb24gY29vcmRpbmF0ZSB4XHJcbiAgICB5OiBudW1iZXIsIC8vIHBvc2l0aW9uIGNvb3JkaW5hdGUgeVxyXG4gICAgdGg6IG51bWJlciAvLyB0aGV0YSBvcmllbnRhdGlvbiBvZiByb2JvdCBpbiAyIERpbWVudGlvblxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERlbHRhUG9zaXRpb24ge1xyXG4gICAgZHg6IG51bWJlciwgLy8gZGVsdGEgY29vcmRpbmF0ZSB4XHJcbiAgICBkeTogbnVtYmVyLCAvLyBzZWx0YSBjb29yZGluYXRlIHlcclxuICAgIGR0aDogbnVtYmVyIC8vIGRlbHRhIHRoZXRhIG9yaWVudGF0aW9uIG9mIHJvYm90IGluIDIgRGltZW50aW9uXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSb2JvdCB7XHJcbiAgICBwcml2YXRlIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuXHJcbiAgICBwcml2YXRlIHN0b3AgPSBmYWxzZTtcclxuICAgIHN0YXRpYyByb2JvdEF0dHIgPSB7XHJcbiAgICAgICAgV2hlZWxSOiA1LFxyXG4gICAgICAgIHJIOiA2MCxcclxuICAgICAgICByVzogMzAsXHJcbiAgICAgICAgclNMOiAyMCxcclxuICAgICAgICByU1c6IDNcclxuICAgIH07XHJcblxyXG4gICAgc3RhdGljIFJTTENvczQ1ID0gTWF0aC5jb3MoTWF0aC5QSSAvIDQpICogUm9ib3Qucm9ib3RBdHRyLnJTTDtcclxuXHJcbiAgICBkdCA9IDAuMDE7XHJcblxyXG4gICAgcG9zaXRpb24gPSB7IHg6IDE1MCwgeTogMTUwLCB0aDowIH0gYXMgUG9zaXRpb247XHJcbiAgICBzcGVlZCA9IHsgcmlnaHQ6IDEwMCwgbGVmdDogMTAwIH0gYXMgU3BlZWQ7XHJcbiAgICBkZWx0YSA9IHtkeDowLGR5OjAsZHRoOjB9IGFzIERlbHRhUG9zaXRpb247XHJcbiAgICBzb25hclNlbnNvcnM9bmV3IFNvbmFyU2Vuc29ycygpO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcGxvdENpcmNsZShwb3NpdGlvbjogUG9zaXRpb24pIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY29uc3QgZGVmYXVsdENvbG9yID0gdGhpcy5jb250ZXh0LmZpbGxTdHlsZTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gXCJvcmFuZ2VcIjtcclxuICAgICAgICB0aGlzLmNvbnRleHQuYXJjKHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIDMsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGwoKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gZGVmYXVsdENvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIHBsb3RSb2JvdChwb3NpdGlvbjogUG9zaXRpb24pIHtcclxuICAgICAgICBsZXQgcHJldmlvdXNQb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgICAgIGNvbnN0IG1vdmVBbmRUdXJuID0gKGQ6IG51bWJlciwgdGg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB4Q29vcmQgPSBwcmV2aW91c1Bvc2l0aW9uLnggKyBkICogTWF0aC5jb3ModGggKTtcclxuICAgICAgICAgICAgY29uc3QgeUNvb3JkID0gcHJldmlvdXNQb3NpdGlvbi55ICsgZCAqIE1hdGguc2luKHRoKTtcclxuICAgICAgICAgICAgcHJldmlvdXNQb3NpdGlvbiA9IHsgeDogeENvb3JkLCB5OiB5Q29vcmQsIHRoIH07XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5saW5lVG8oeENvb3JkLCB5Q29vcmQpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHNlbnNIb2xkZXIgPSAoYW5nbGU6bnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIG1vdmVBbmRUdXJuKFJvYm90LnJvYm90QXR0ci5yU0wgLCBwb3NpdGlvbi50aCAtTWF0aC5QSS80K2FuZ2xlKTtcclxuICAgICAgICAgICAgbW92ZUFuZFR1cm4oUm9ib3Qucm9ib3RBdHRyLnJTVywgcG9zaXRpb24udGgrTWF0aC5QSS80ICthbmdsZSk7XHJcbiAgICAgICAgICAgIG1vdmVBbmRUdXJuKFJvYm90LnJvYm90QXR0ci5yU0wgLCBwb3NpdGlvbi50aCArMypNYXRoLlBJLzQrYW5nbGUpO1xyXG4gICAgICAgIH07IFxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY29udGV4dC5tb3ZlVG8ocHJldmlvdXNQb3NpdGlvbi54ICwgcHJldmlvdXNQb3NpdGlvbi55ICk7XHJcbiAgICAgICAgbW92ZUFuZFR1cm4oUm9ib3Qucm9ib3RBdHRyLnJXLzIgLTIgLCBwb3NpdGlvbi50aCArIE1hdGguUEkvMiApO1xyXG4gICAgICAgIHNlbnNIb2xkZXIoIE1hdGguUEkvMiApO1xyXG4gICAgICAgIG1vdmVBbmRUdXJuKFJvYm90LnJvYm90QXR0ci5ySCAsIHBvc2l0aW9uLnRoICsgTWF0aC5QSSApO1xyXG4gICAgICAgIHNlbnNIb2xkZXIoTWF0aC5QSSApO1xyXG4gICAgICAgIG1vdmVBbmRUdXJuKFJvYm90LnJvYm90QXR0ci5yVyAsIHBvc2l0aW9uLnRoIC1NYXRoLlBJLzIgKTtcclxuICAgICAgICBzZW5zSG9sZGVyKC1NYXRoLlBJLzIgKTtcclxuICAgICAgICBtb3ZlQW5kVHVybihSb2JvdC5yb2JvdEF0dHIuckggLCBwb3NpdGlvbi50aCApO1xyXG4gICAgICAgIHNlbnNIb2xkZXIoMCApO1xyXG4gICAgICAgIG1vdmVBbmRUdXJuKFJvYm90LnJvYm90QXR0ci5yVy8yICwgcG9zaXRpb24udGggKyBNYXRoLlBJLzIgKTtcclxuXHJcbiAgICAgICAgbW92ZUFuZFR1cm4oMiwgIHBvc2l0aW9uLnRoICApO1xyXG4gICAgICAgIG1vdmVBbmRUdXJuKDIsIHBvc2l0aW9uLnRoICsgTWF0aC5QSS8yICk7XHJcbiAgICAgICAgbW92ZUFuZFR1cm4oMiwgcG9zaXRpb24udGgrIE1hdGguUEkgKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZSgpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGtlZXBSb2JvdEluV2luZG93cygpOnZvaWQge1xyXG4gICAgICAgIGlmKHRoaXMucG9zaXRpb24ueCA+PSA5NzApIHtcclxuICAgICAgICAgICAgdGhpcy5kZWx0YS5keCA9ICAtdGhpcy5kZWx0YS5keCA7XHJcbiAgICAgICAgICAgIHRoaXMuZGVsdGEuZHRoID0gIC10aGlzLmRlbHRhLmR0aCA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLnBvc2l0aW9uLnkgPj0gOTcwIHx8IHRoaXMucG9zaXRpb24ueSA8PSA1ICkge1xyXG4gICAgICAgICAgICB0aGlzLmRlbHRhLmR5ID0gIC10aGlzLmRlbHRhLmR5IDtcclxuICAgICAgICAgICAgdGhpcy5kZWx0YS5kdGggPSAgLXRoaXMuZGVsdGEuZHRoIDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHBsb3RSb2JvdDIocG9zaXRpb246IFBvc2l0aW9uKSB7XHJcbiAgICAgICAgbGV0IHByZXZpb3VzUG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgICAgICBjb25zdCBtb3ZlQW5kVHVybiA9IChkOiBudW1iZXIsIHRoOiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgeENvb3JkID0gcHJldmlvdXNQb3NpdGlvbi54ICsgZCAqIE1hdGguY29zKHRoICogTWF0aC5QSSAvIDE4MCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHlDb29yZCA9IHByZXZpb3VzUG9zaXRpb24ueSArIGQgKiBNYXRoLnNpbih0aCAqIE1hdGguUEkgLyAxODApO1xyXG4gICAgICAgICAgICBwcmV2aW91c1Bvc2l0aW9uID0geyB4OiB4Q29vcmQsIHk6IHlDb29yZCwgdGggfTtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmxpbmVUbyh4Q29vcmQsIHlDb29yZCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmNvbnRleHQubW92ZVRvKHByZXZpb3VzUG9zaXRpb24ueCAsIHByZXZpb3VzUG9zaXRpb24ueSApO1xyXG4gICAgICAgIG1vdmVBbmRUdXJuKFJvYm90LnJvYm90QXR0ci5ySCAsIDkwICsgcG9zaXRpb24udGggKTtcclxuICAgICAgICBtb3ZlQW5kVHVybihSb2JvdC5yb2JvdEF0dHIuclNMLCAtMTgwIC0gNDUrIHBvc2l0aW9uLnRoICk7XHJcbiAgICAgICAgbW92ZUFuZFR1cm4oUm9ib3Qucm9ib3RBdHRyLnJTVywgLTE4MCAtIDQ1ICsgcG9zaXRpb24udGggKTtcclxuICAgICAgICBtb3ZlQW5kVHVybihSb2JvdC5yb2JvdEF0dHIuclNMIC0gMiwgLTQ1KyBwb3NpdGlvbi50aCApO1xyXG4gICAgICAgIG1vdmVBbmRUdXJuKChSb2JvdC5yb2JvdEF0dHIuclcgLSA0KSAvIDIsICBwb3NpdGlvbi50aCApO1xyXG4gICAgICAgIG1vdmVBbmRUdXJuKDQsIDkwKyBwb3NpdGlvbi50aCApO1xyXG4gICAgICAgIG1vdmVBbmRUdXJuKDQsIDArIHBvc2l0aW9uLnRoICk7XHJcbiAgICAgICAgbW92ZUFuZFR1cm4oNCwgLTkwKyBwb3NpdGlvbi50aCApO1xyXG4gICAgICAgIG1vdmVBbmRUdXJuKChSb2JvdC5yb2JvdEF0dHIuclcgLSA0KSAvIDIsIDArIHBvc2l0aW9uLnRoICk7XHJcbiAgICAgICAgbW92ZUFuZFR1cm4oUm9ib3Qucm9ib3RBdHRyLnJTTCwgNDUrIHBvc2l0aW9uLnRoICk7XHJcbiAgICAgICAgbW92ZUFuZFR1cm4oUm9ib3Qucm9ib3RBdHRyLnJTVywgLTQ1KyBwb3NpdGlvbi50aCApO1xyXG4gICAgICAgIG1vdmVBbmRUdXJuKFJvYm90LnJvYm90QXR0ci5yU0wgLSAyLCAyMisgcG9zaXRpb24udGggKTtcclxuICAgICAgICBtb3ZlQW5kVHVybihSb2JvdC5yb2JvdEF0dHIuckgsIC05MCsgcG9zaXRpb24udGggKTtcclxuICAgICAgICBtb3ZlQW5kVHVybihSb2JvdC5yb2JvdEF0dHIuclNMLCAtNDUrIHBvc2l0aW9uLnRoICk7XHJcbiAgICAgICAgbW92ZUFuZFR1cm4oUm9ib3Qucm9ib3RBdHRyLnJTVywgLTEzNSsgcG9zaXRpb24udGggKTtcclxuICAgICAgICBtb3ZlQW5kVHVybihSb2JvdC5yb2JvdEF0dHIuclNMIC0gMiwgLTIyNSsgcG9zaXRpb24udGggKTtcclxuICAgICAgICBtb3ZlQW5kVHVybihSb2JvdC5yb2JvdEF0dHIuclcsIDE4MCsgcG9zaXRpb24udGggKTtcclxuICAgICAgICBtb3ZlQW5kVHVybihSb2JvdC5yb2JvdEF0dHIuclNMLCAtOTAgLSA0NSsgcG9zaXRpb24udGggKTtcclxuICAgICAgICBtb3ZlQW5kVHVybihSb2JvdC5yb2JvdEF0dHIuclNXLCAtMTgwIC0gNDUrIHBvc2l0aW9uLnRoICk7XHJcbiAgICAgICAgbW92ZUFuZFR1cm4oUm9ib3Qucm9ib3RBdHRyLnJTTCwgLTE4MCAtIDkwIC0gNDUrIHBvc2l0aW9uLnRoICk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZSgpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldFBvc2l0aW9uKCk6IFBvc2l0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQb3NpdGlvbihwb3NpdGlvbjpQb3NpdGlvbik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTcGVlZCgpOiBTcGVlZCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3BlZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgYW5pbWF0ZShzcGVlZDogU3BlZWQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XHJcbiAgICAgICAgdGhpcy5jYWxjTmV3UG9zaXRpb24oc3BlZWQpO1xyXG4gICAgICAgIHRoaXMucGxvdFJvYm90KHRoaXMucG9zaXRpb24pO1xyXG4gICAgICAgIHRoaXMuc29uYXJTZW5zb3JzLnNob3codGhpcy5wb3NpdGlvbik7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNhbGNOZXdQb3NpdGlvbihzcGVlZDogU3BlZWQpIHtcclxuICAgICAgICB0aGlzLmRlbHRhID0gdGhpcy5zdG9wPyB7IGR4OiAwLCBkeTogMCwgZHRoOiAwIH06IHRoaXMua2luZW1hdGljKHNwZWVkLmxlZnQsIHNwZWVkLnJpZ2h0KTtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gdGhpcy5kZWx0YS5keDtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgKz0gdGhpcy5kZWx0YS5keTtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnRoICs9IHRoaXMuZGVsdGEuZHRoO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24udGggJT0gMipNYXRoLlBJO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24udGggPSB0aGlzLnBvc2l0aW9uLnRoID4gTWF0aC5QSSA/ICgtMipNYXRoLlBJICt0aGlzLnBvc2l0aW9uLnRoKSA6IHRoaXMucG9zaXRpb24udGg7XHJcbiAgICB9XHJcblxyXG4gICAga2luZW1hdGljKGxlZnRXZWVsU3BlZWQ6IG51bWJlciwgcmlnaHRXaGVlbFNwZWVkOiBudW1iZXIpOiB7IGR4OiBudW1iZXIsIGR5OiBudW1iZXIsIGR0aDogbnVtYmVyIH0ge1xyXG4gICAgICAgIGNvbnN0IGxpbmVhclZlbG9jaXR5ID0gKHJpZ2h0V2hlZWxTcGVlZCArIGxlZnRXZWVsU3BlZWQpIC8gMjtcclxuICAgICAgICBjb25zdCBhbmd1bGFyVmVsb2NpdHkgPSBsZWZ0V2VlbFNwZWVkLXJpZ2h0V2hlZWxTcGVlZDtcclxuICAgICAgICBjb25zdCBkdGggPWFuZ3VsYXJWZWxvY2l0eSAqIHRoaXMuZHQgKjIqIE1hdGguUEkqIFJvYm90LnJvYm90QXR0ci5XaGVlbFIvIFJvYm90LnJvYm90QXR0ci5yVztcclxuICAgICAgICAvLyBjb25zdCB0aGV0YSA9IHRoaXMucG9zaXRpb24udGggKyBkdGg7XHJcbiAgICAgICAgY29uc3QgZHggPWxpbmVhclZlbG9jaXR5ICogTWF0aC5jb3ModGhpcy5wb3NpdGlvbi50aCkgKiB0aGlzLmR0ICogUm9ib3Qucm9ib3RBdHRyLldoZWVsUi8yO1xyXG4gICAgICAgIGNvbnN0IGR5ID1saW5lYXJWZWxvY2l0eSAqIE1hdGguc2luKHRoaXMucG9zaXRpb24udGgpICogdGhpcy5kdCAqIFJvYm90LnJvYm90QXR0ci5XaGVlbFIvMjtcclxuXHJcbiAgICAgICAgcmV0dXJuIHsgZHgsIGR5LCBkdGggfTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTZW5zb3JzKCk6QXJyYXk8U2Vuc29yPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc29uYXJTZW5zb3JzLmNhbGNTZW5zb3JzUG9zaXRpb25zKHRoaXMuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0WCh4Om51bWJlcikgOnZvaWQge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueCA9IHg7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0WSh5Om51bWJlcikgOnZvaWQge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueSA9IHk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGgodGg6bnVtYmVyKSA6dm9pZCB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi50aCA9IHRoO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZVN0b3AoKXtcclxuICAgICAgICB0aGlzLnN0b3AgPSAhdGhpcy5zdG9wO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgUm9ib3QoKTtcclxuIiwiaW1wb3J0IHsgUG9pbnQsIFBvaW50TWluaW11bSB9IGZyb20gXCIuL09ic3RhY2xlc1wiO1xyXG5pbXBvcnQgeyBQb3NpdGlvbiwgUm9ib3QgfSBmcm9tIFwiLi9Sb2JvdFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZW5zb3IgZXh0ZW5kcyBQb2ludCB7XHJcbiAgICBzaWRlOiBzdHJpbmcsXHJcbiAgICBkYzogbnVtYmVyIC8vIGRpc3RhbmNlIGZyb20gY2VudGVyXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGVudW0gU2lkZXMge1xyXG4gICAgZnJvbnRMZWZ0ID0gXCJmcm9udExlZnRcIixcclxuICAgIGZyb250UmlnaHQgPSBcImZyb250UmlnaHRcIixcclxuICAgIGJhY2tMZWZ0ID0gXCJiYWNrTGVmdFwiLFxyXG4gICAgYmFja1JpZ2h0ID0gXCJiYWNrUmlnaHRcIixcclxuICAgIG1pZGRsZSA9IFwibWlkZGxlXCIsXHJcbiAgICBjZW50ZXIgPSBcImNlbnRlclwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTb25hclNlbnNvcnMge1xyXG4gICAgcHJpdmF0ZSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJykgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbERpc3QocG9pbnQxOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH0sIHBvaW50MjogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9KSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhwb2ludDEueCAtIHBvaW50Mi54LCAyKSArIE1hdGgucG93KHBvaW50MS55IC0gcG9pbnQyLnksIDIpKTtcclxuICAgIH1cclxuXHJcbiAgICBjYWxBbmdsZShwb2ludDE6IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfSwgcG9pbnQyOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH0pIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5hdGFuKChwb2ludDIueSAtIHBvaW50MS55KS8ocG9pbnQyLnggLSBwb2ludDEueCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGNTZW5zb3JzUG9zaXRpb25zKHJvYm90UG9zaXRpb246IFBvc2l0aW9uKTogQXJyYXk8U2Vuc29yPiB7XHJcbiAgICAgICAgcmV0dXJuIFtTaWRlcy5mcm9udExlZnQsIFNpZGVzLmZyb250UmlnaHQsIFNpZGVzLmJhY2tMZWZ0LCBTaWRlcy5iYWNrUmlnaHQsIFNpZGVzLm1pZGRsZSwgU2lkZXMuY2VudGVyXVxyXG4gICAgICAgICAgICAubWFwKHNlbnNvclNpZGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbnNvclNpZGUgPT09IFNpZGVzLmNlbnRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IHJvYm90UG9zaXRpb24ueCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTogcm9ib3RQb3NpdGlvbi55LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaWRlOiBzZW5zb3JTaWRlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0gYXMgU2Vuc29yO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHNlbnNvclNpZGUgPT09IFNpZGVzLm1pZGRsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IHJvYm90UG9zaXRpb24ueCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTogcm9ib3RQb3NpdGlvbi55ICsgUm9ib3Qucm9ib3RBdHRyLnJIIC8gMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2lkZTogc2Vuc29yU2lkZVxyXG4gICAgICAgICAgICAgICAgICAgIH0gYXMgU2Vuc29yO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHNlbnNvclNpZGUgPT09IFNpZGVzLmZyb250TGVmdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IHJvYm90UG9zaXRpb24ueCAtIFJvYm90LlJTTENvczQ1IC0gUm9ib3Qucm9ib3RBdHRyLnJXIC8gMiAtIDMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IHJvYm90UG9zaXRpb24ueSAtIFJvYm90LlJTTENvczQ1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaWRlOiBzZW5zb3JTaWRlXHJcbiAgICAgICAgICAgICAgICAgICAgfSBhcyBTZW5zb3I7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoc2Vuc29yU2lkZSA9PT0gU2lkZXMuZnJvbnRSaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IHJvYm90UG9zaXRpb24ueCArIFJvYm90LlJTTENvczQ1ICsgUm9ib3Qucm9ib3RBdHRyLnJXIC8gMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTogcm9ib3RQb3NpdGlvbi55IC0gUm9ib3QuUlNMQ29zNDUgKyAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaWRlOiBzZW5zb3JTaWRlXHJcbiAgICAgICAgICAgICAgICAgICAgfSBhcyBTZW5zb3I7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoc2Vuc29yU2lkZSA9PT0gU2lkZXMuYmFja0xlZnQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiByb2JvdFBvc2l0aW9uLnggLSBSb2JvdC5SU0xDb3M0NSAtIFJvYm90LnJvYm90QXR0ci5yVyAvIDIgLSA0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiByb2JvdFBvc2l0aW9uLnkgLSBSb2JvdC5SU0xDb3M0NSArIFJvYm90LnJvYm90QXR0ci5ySCArIFJvYm90LnJvYm90QXR0ci5yVyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2lkZTogc2Vuc29yU2lkZVxyXG4gICAgICAgICAgICAgICAgICAgIH0gYXMgU2Vuc29yO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHNlbnNvclNpZGUgPT09IFNpZGVzLmJhY2tSaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IHJvYm90UG9zaXRpb24ueCArIFJvYm90LlJTTENvczQ1ICsgUm9ib3Qucm9ib3RBdHRyLnJXIC0gUm9ib3Qucm9ib3RBdHRyLnJXIC8gMiAtIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IHJvYm90UG9zaXRpb24ueSArIFJvYm90LlJTTENvczQ1ICsgUm9ib3Qucm9ib3RBdHRyLnJIICsgMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2lkZTogc2Vuc29yU2lkZVxyXG4gICAgICAgICAgICAgICAgICAgIH0gYXMgU2Vuc29yO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApLm1hcChzZW5zID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbnNDYWxjID0gc2VucztcclxuICAgICAgICAgICAgICAgIHNlbnNDYWxjLmRjID0gdGhpcy5jYWxEaXN0KHJvYm90UG9zaXRpb24sIHNlbnNDYWxjKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFuZ2xlID0gdGhpcy5jYWxBbmdsZShyb2JvdFBvc2l0aW9uLCBzZW5zQ2FsYykgK1xyXG4gICAgICAgICAgICAgICAgKHNlbnMuc2lkZSA9PT0gU2lkZXMuZnJvbnRMZWZ0IHx8IHNlbnMuc2lkZSA9PT0gU2lkZXMuYmFja0xlZnQgPyBNYXRoLlBJIDogMCkgK1xyXG4gICAgICAgICAgICAgICAgcm9ib3RQb3NpdGlvbi50aCAgKyBNYXRoLlBJLzIgO1xyXG4gICAgICAgICAgICAgICAgc2Vuc0NhbGMueCA9IHJvYm90UG9zaXRpb24ueCArIHNlbnNDYWxjLmRjICogTWF0aC5jb3MoYW5nbGUgKTtcclxuICAgICAgICAgICAgICAgIHNlbnNDYWxjLnkgPSByb2JvdFBvc2l0aW9uLnkgKyBzZW5zQ2FsYy5kYyAqIE1hdGguc2luKGFuZ2xlICk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2Vuc0NhbGM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93KHJvYm90UG9zaXRpb246IFBvc2l0aW9uKSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudENvbG9yID0gdGhpcy5jb250ZXh0LmZpbGxTdHlsZTtcclxuICAgICAgICBjb25zdCBzZW5zb3JzID0gdGhpcy5jYWxjU2Vuc29yc1Bvc2l0aW9ucyhyb2JvdFBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgc2Vuc29ycy5mb3JFYWNoKHNlbnNvciA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucGxvdENpcmNsZSh7IHg6IHNlbnNvci54LCB5OiBzZW5zb3IueSwgdGg6IHJvYm90UG9zaXRpb24udGggfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHBsb3RDaXJjbGUocG9pc3Rpb246IFBvc2l0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIC8vIHRoaXMuY29udGV4dC5yb3RhdGUocG9pc3Rpb24udGgqTWF0aC5QSS8xODApO1xyXG4gICAgICAgIGNvbnN0IGRlZmF1bHRDb2xvciA9IHRoaXMuY29udGV4dC5maWxsU3R5bGU7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IFwib3JhbmdlXCI7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmFyYyhwb2lzdGlvbi54LCBwb2lzdGlvbi55LCAzLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsb3NlUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsKCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGRlZmF1bHRDb2xvcjtcclxuICAgIH1cclxuXHJcblxyXG59XHJcbiIsImltcG9ydCB7IFBvaW50LCBTZW5zb3JEaXN0YW5jZSB9IGZyb20gXCIuL09ic3RhY2xlc1wiO1xyXG5pbXBvcnQgeyBQb3NpdGlvbiwgUm9ib3QgfSBmcm9tIFwiLi9Sb2JvdFwiO1xyXG5pbXBvcnQgeyAgU2lkZXMgfSBmcm9tIFwiLi9Tb25hclNlbnNvcnNcIjtcclxuaW1wb3J0IGNvbnRyb2xsZXIxIGZyb20gXCIuL1NwZWVkQ29udHJvbGxlcjFcIjtcclxuaW1wb3J0IGNvbnRyb2xsZXIyIGZyb20gXCIuL1NwZWVkQ29udHJvbGxlcjJcIjtcclxuaW1wb3J0IGNvbnRyb2xsZXIzIGZyb20gXCIuL1NwZWVkQ29udHJvbGxlcjNcIjtcclxuaW1wb3J0IGNvbnRyb2xsZXI0IGZyb20gXCIuL1NwZWVkQ29udHJvbGxlcjRcIjtcclxuaW1wb3J0IHsgQWxnb3JpdGhtVG9SdW4gfSBmcm9tIFwiLi9Xb3JsZFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTcGVlZCB7XHJcbiAgICByaWdodDogbnVtYmVyLFxyXG4gICAgbGVmdDogbnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTcGVlZENvbnRyb2xsZXIge1xyXG4gICAgc3RhdGljIE1heFNwZWVkID0gNzAwO1xyXG4gICAgc3RhdGljIE1heERpc3RhbmNlID0gODA7XHJcbiAgICBpdGVyYXRpb24gPSAwO1xyXG5cclxuICAgIGxhc3REaXN0YW5jZVRvT2JzdGFjbGVzOiBTZW5zb3JEaXN0YW5jZVtdO1xyXG4gICBcclxuICAgIGNhbGNXaGVlbHNTcGVlZChzZW5zb3JPYnN0RGlzdGFuY2VzOiBTZW5zb3JEaXN0YW5jZVtdLCBjdXJyZW50U3BlZWQ6IFNwZWVkLCByb2JvdFBvc2l0aW9uOiBQb3NpdGlvbixhbGdvcml0aG06QWxnb3JpdGhtVG9SdW4pOiBTcGVlZCB7XHJcbiAgICAgICAgc3dpdGNoIChhbGdvcml0aG0pe1xyXG4gICAgICAgICAgICAgY2FzZSBBbGdvcml0aG1Ub1J1bi5hdm9pZE9ic3RhY2xlc1RhcmdldDogIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb250cm9sbGVyMS5jYWxjV2hlZWxzU3BlZWQoc2Vuc29yT2JzdERpc3RhbmNlcyxjdXJyZW50U3BlZWQscm9ib3RQb3NpdGlvbik7XHJcblxyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgY2FzZSBBbGdvcml0aG1Ub1J1bi5nb1RvVGFyZ2V0QnlQYXRoOiAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRyb2xsZXI0LmNhbGNXaGVlbHNTcGVlZChzZW5zb3JPYnN0RGlzdGFuY2VzLGN1cnJlbnRTcGVlZCxyb2JvdFBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBkZWZhdWx0OntcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb250cm9sbGVyMy5jYWxjV2hlZWxzU3BlZWQoc2Vuc29yT2JzdERpc3RhbmNlcyxjdXJyZW50U3BlZWQscm9ib3RQb3NpdGlvbik7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU2Vuc29yRGlzdGFuY2UgfSBmcm9tIFwiLi9PYnN0YWNsZXNcIjtcclxuaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tIFwiLi9Sb2JvdFwiO1xyXG5pbXBvcnQgeyBTaWRlcyB9IGZyb20gXCIuL1NvbmFyU2Vuc29yc1wiO1xyXG5pbXBvcnQgeyBTcGVlZCwgU3BlZWRDb250cm9sbGVyIH0gZnJvbSBcIi4vU3BlZWRDb250cm9sbGVyXCI7XHJcbmltcG9ydCBTcGVlZENvbnRyb2xsZXJJZiBmcm9tIFwiLi9TcGVlZENvbnRyb2xsZXJJZlwiO1xyXG5pbXBvcnQgdGFyZ2V0IGZyb20gXCIuL1RhcmdldFwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyAoY2xhc3MgU3BlZWRDb250cm9sbGVyMSBpbXBsZW1lbnRzIFNwZWVkQ29udHJvbGxlcklmIHtcclxuXHJcbiAgICBzdGF0aWMgTWF4U3BlZWQgPSA3MDA7XHJcbiAgICBzdGF0aWMgTWF4RGlzdGFuY2UgPSA4MDtcclxuXHJcbiAgICBpdGVyYXRpb24gPSAwO1xyXG4gICAgbGFzdERpc3RhbmNlVG9PYnN0YWNsZXM6IFNlbnNvckRpc3RhbmNlW107XHJcblxyXG5cclxuICAgIGNhbGNXaGVlbHNTcGVlZChzZW5zb3JPYnN0RGlzdGFuY2VzOiBTZW5zb3JEaXN0YW5jZVtdLCBjdXJyZW50U3BlZWQ6IFNwZWVkLCByb2JvdFBvc2l0aW9uOiBQb3NpdGlvbik6IFNwZWVkIHtcclxuICAgICAgICB0aGlzLml0ZXJhdGlvbiArPSAxO1xyXG4gICAgICAgIGNvbnN0IGF2b2lkT2JzdGFjbGVDb21tYW5kID0gdGhpcy5hdm9pZE9ic3RhY2xlKHNlbnNvck9ic3REaXN0YW5jZXMsIGN1cnJlbnRTcGVlZCk7XHJcbiAgICAgICAgY29uc3QgZ29Ub1RhcmdldENvbW1hbmQgPSB0aGlzLmdvVG9UYXJnZXQocm9ib3RQb3NpdGlvbik7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGxlZnQ6IGF2b2lkT2JzdGFjbGVDb21tYW5kLmxlZnQgKiAwLjUgKyBnb1RvVGFyZ2V0Q29tbWFuZC5sZWZ0ICogMC41LFxyXG4gICAgICAgICAgICByaWdodDogYXZvaWRPYnN0YWNsZUNvbW1hbmQucmlnaHQgKiAwLjUgKyBnb1RvVGFyZ2V0Q29tbWFuZC5yaWdodCAqIDAuNVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgY2FsY1JlcHVsc2VFeHBvKG9ic3RhY2xlRGlzdDogbnVtYmVyLCBmYWN0b3IgPSAwLjAxKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gb2JzdGFjbGVEaXN0IDwgU3BlZWRDb250cm9sbGVyLk1heERpc3RhbmNlXHJcbiAgICAgICAgICAgID8gMSAtIE1hdGguZXhwKGZhY3RvciAqIE1hdGguc3FydChNYXRoLnBvdyhvYnN0YWNsZURpc3QgLSBTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2UsIDIpIC8gU3BlZWRDb250cm9sbGVyLk1heERpc3RhbmNlKSlcclxuICAgICAgICAgICAgOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGNDb21iaW5lZFJlcHVsc2Uob2JzdGFjbGVEaXN0OiBudW1iZXIsIGZhY3RvciA9IDAuMDEpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBvYnN0YWNsZURpc3QgPCBTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2VcclxuICAgICAgICAgICAgPyAoMC40ICogKDEgLSAxIC8gKDEgKyBNYXRoLmV4cCgtMC4wMDEgKiAob2JzdGFjbGVEaXN0IC0gU3BlZWRDb250cm9sbGVyLk1heERpc3RhbmNlKSAvIFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZSkpKSArXHJcbiAgICAgICAgICAgICAgICAwLjYgKiAoMSAtIE1hdGguZXhwKGZhY3RvciAqIE1hdGguc3FydChNYXRoLnBvdyhvYnN0YWNsZURpc3QgLSBTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2UsIDIpIC8gU3BlZWRDb250cm9sbGVyLk1heERpc3RhbmNlKSkpKSAqIDAuNVxyXG4gICAgICAgICAgICA6IDA7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGF2b2lkT2JzdGFjbGUoc2Vuc29yT2JzdERpc3RhbmNlczogU2Vuc29yRGlzdGFuY2VbXSwgY3VycmVudFNwZWVkOiBTcGVlZCk6IFNwZWVkIHtcclxuICAgICAgICBjb25zdCB7IGZyb250UmlnaHREaXN0LCBmcm9udExlZnREaXN0LCBiYWNrUmlnaHREaXN0LCBiYWNrTGVmdERpc3QgfSA9IHRoaXMuY2FsY09ic3RhY2xlRGlzdGFuY2VzKHNlbnNvck9ic3REaXN0YW5jZXMpO1xyXG5cclxuICAgICAgICBsZXQgY2FsY1NwZWVkOiBTcGVlZCA9IHsgbGVmdDogU3BlZWRDb250cm9sbGVyLk1heFNwZWVkIC8gMiwgcmlnaHQ6IFNwZWVkQ29udHJvbGxlci5NYXhTcGVlZCAvIDIgfTtcclxuICAgICBcclxuICAgICAgICBjb25zdCB7IG9ic3RJc09uRnJvbnQsIGZyb250UmlnaHRUdXJuLCBiYWNrUmlnaHRUdXJuLCBvYnN0SXNPblJpZ2h0LCBvYnN0SXNPbkJhY2tSaWdodCwgZnJvbnRMZWZ0VHVybiwgYmFja0xlZnRUdXJuLCBvYnN0SXNPbkxlZnQsIG9ic3RJc09uQmFja0xlZnQgfSA9IFxyXG4gICAgICAgIHRoaXMuZ2V0T2JzdGFjbGVEaXJlY3Rpb24oZnJvbnRSaWdodERpc3QsIGZyb250TGVmdERpc3QsIGJhY2tSaWdodERpc3QsIGJhY2tMZWZ0RGlzdCk7XHJcblxyXG4gICAgICAgIGxldCB3aGVlbEZhY3RvcnMgPSB0aGlzLmNhbGNXaGVlbHNGYWN0b3JzKGZyb250UmlnaHRUdXJuLCBiYWNrUmlnaHRUdXJuLCBvYnN0SXNPblJpZ2h0LCBvYnN0SXNPbkJhY2tSaWdodCwgb2JzdElzT25Gcm9udCwgZnJvbnRMZWZ0VHVybiwgYmFja0xlZnRUdXJuLCBvYnN0SXNPbkxlZnQsIG9ic3RJc09uQmFja0xlZnQpO1xyXG5cclxuXHJcbiAgICAgICAgY2FsY1NwZWVkLmxlZnQgICs9IFNwZWVkQ29udHJvbGxlci5NYXhTcGVlZCAqIDAuNSAqIHdoZWVsRmFjdG9ycy5hbHBoYTtcclxuICAgICAgICBjYWxjU3BlZWQucmlnaHQgKz0gU3BlZWRDb250cm9sbGVyLk1heFNwZWVkICogMC41ICogd2hlZWxGYWN0b3JzLmJldGE7XHJcbiAgICAgICAgdGhpcy5sYXN0RGlzdGFuY2VUb09ic3RhY2xlcyA9IHNlbnNvck9ic3REaXN0YW5jZXM7XHJcblxyXG4gICAgICAgIHJldHVybiBjYWxjU3BlZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjYWxjV2hlZWxzRmFjdG9ycyhmcm9udFJpZ2h0VHVybjogbnVtYmVyLCBiYWNrUmlnaHRUdXJuOiBudW1iZXIsIG9ic3RJc09uUmlnaHQ6IG51bWJlciwgb2JzdElzT25CYWNrUmlnaHQ6IG51bWJlciwgb2JzdElzT25Gcm9udDogbnVtYmVyLCBmcm9udExlZnRUdXJuOiBudW1iZXIsIGJhY2tMZWZ0VHVybjogbnVtYmVyLCBvYnN0SXNPbkxlZnQ6IG51bWJlciwgb2JzdElzT25CYWNrTGVmdDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IGFscGhhID0gKGZyb250UmlnaHRUdXJuIC0gYmFja1JpZ2h0VHVybikgKiBvYnN0SXNPblJpZ2h0ICsgb2JzdElzT25CYWNrUmlnaHQgKiBiYWNrUmlnaHRUdXJuICsgb2JzdElzT25Gcm9udCAqIChmcm9udFJpZ2h0VHVybiArIGZyb250TGVmdFR1cm4pICogMC41O1xyXG4gICAgICAgIGxldCBiZXRhID0gKGZyb250TGVmdFR1cm4gLSBiYWNrTGVmdFR1cm4pICogb2JzdElzT25MZWZ0ICsgb2JzdElzT25CYWNrTGVmdCAqIGJhY2tMZWZ0VHVybjtcclxuICAgICAgICByZXR1cm4geyBhbHBoYSwgYmV0YSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2FsY09ic3RhY2xlRGlzdGFuY2VzKHNlbnNvck9ic3REaXN0YW5jZXM6IFNlbnNvckRpc3RhbmNlW10pIHtcclxuICAgICAgICBjb25zdCBmcm9udExlZnREaXN0ID0gc2Vuc29yT2JzdERpc3RhbmNlcy5maW5kKHNlbnMgPT4gc2Vucy5zaWRlID09PSBTaWRlcy5mcm9udExlZnQpLmQ7XHJcbiAgICAgICAgY29uc3QgZnJvbnRSaWdodERpc3QgPSBzZW5zb3JPYnN0RGlzdGFuY2VzLmZpbmQoc2VucyA9PiBzZW5zLnNpZGUgPT09IFNpZGVzLmZyb250UmlnaHQpLmQ7XHJcbiAgICAgICAgY29uc3QgYmFja0xlZnREaXN0ID0gc2Vuc29yT2JzdERpc3RhbmNlcy5maW5kKHNlbnMgPT4gc2Vucy5zaWRlID09PSBTaWRlcy5iYWNrTGVmdCkuZDtcclxuICAgICAgICBjb25zdCBiYWNrUmlnaHREaXN0ID0gc2Vuc29yT2JzdERpc3RhbmNlcy5maW5kKHNlbnMgPT4gc2Vucy5zaWRlID09PSBTaWRlcy5iYWNrUmlnaHQpLmQ7XHJcbiAgICAgICAgcmV0dXJuIHsgZnJvbnRSaWdodERpc3QsIGZyb250TGVmdERpc3QsIGJhY2tSaWdodERpc3QsIGJhY2tMZWZ0RGlzdCB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0T2JzdGFjbGVEaXJlY3Rpb24oZnJvbnRSaWdodERpc3Q6IG51bWJlciwgZnJvbnRMZWZ0RGlzdDogbnVtYmVyLCBiYWNrUmlnaHREaXN0OiBudW1iZXIsIGJhY2tMZWZ0RGlzdDogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgZnJvbnRSaWdodFR1cm4gPSB0aGlzLmNhbGNDb21iaW5lZFJlcHVsc2UoZnJvbnRSaWdodERpc3QpO1xyXG4gICAgICAgIGNvbnN0IGZyb250TGVmdFR1cm4gPSB0aGlzLmNhbGNDb21iaW5lZFJlcHVsc2UoZnJvbnRMZWZ0RGlzdCk7XHJcbiAgICAgICAgY29uc3QgYmFja1JpZ2h0VHVybiA9IHRoaXMuY2FsY0NvbWJpbmVkUmVwdWxzZShiYWNrUmlnaHREaXN0KTtcclxuICAgICAgICBjb25zdCBiYWNrTGVmdFR1cm4gPSB0aGlzLmNhbGNDb21iaW5lZFJlcHVsc2UoYmFja0xlZnREaXN0KTtcclxuXHJcbiAgICAgICAgY29uc3Qgb2JzdElzT25Gcm9udCA9IGZyb250UmlnaHREaXN0IDwgU3BlZWRDb250cm9sbGVyLk1heERpc3RhbmNlXHJcbiAgICAgICAgICAgICYmIGZyb250TGVmdERpc3QgPCBTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2VcclxuICAgICAgICAgICAgPyAxXHJcbiAgICAgICAgICAgIDogMDtcclxuICAgICAgICBjb25zdCBvYnN0SXNPbkJhY2sgPSBiYWNrUmlnaHREaXN0IDwgU3BlZWRDb250cm9sbGVyLk1heERpc3RhbmNlXHJcbiAgICAgICAgICAgICYmIGJhY2tMZWZ0RGlzdCA8IFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZVxyXG4gICAgICAgICAgICA/IDFcclxuICAgICAgICAgICAgOiAwO1xyXG4gICAgICAgIGNvbnN0IG9ic3RJc09uUmlnaHQgPSBmcm9udFJpZ2h0RGlzdCA8IFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZSAmJlxyXG4gICAgICAgICAgICBmcm9udExlZnREaXN0ID4gU3BlZWRDb250cm9sbGVyLk1heERpc3RhbmNlIHx8XHJcbiAgICAgICAgICAgIGJhY2tSaWdodERpc3QgPCBTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2VcclxuICAgICAgICAgICAgJiYgYmFja0xlZnREaXN0ID4gU3BlZWRDb250cm9sbGVyLk1heERpc3RhbmNlXHJcbiAgICAgICAgICAgID8gMVxyXG4gICAgICAgICAgICA6IDA7XHJcblxyXG4gICAgICAgIGNvbnN0IG9ic3RJc09uQmFja1JpZ2h0ID0gYmFja1JpZ2h0RGlzdCA8IFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZSAmJlxyXG4gICAgICAgICAgICBmcm9udExlZnREaXN0ID4gU3BlZWRDb250cm9sbGVyLk1heERpc3RhbmNlICYmXHJcbiAgICAgICAgICAgIGJhY2tSaWdodERpc3QgPiBTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2UgJiZcclxuICAgICAgICAgICAgYmFja0xlZnREaXN0ID4gU3BlZWRDb250cm9sbGVyLk1heERpc3RhbmNlXHJcbiAgICAgICAgICAgID8gMi45XHJcbiAgICAgICAgICAgIDogMDtcclxuXHJcbiAgICAgICAgY29uc3Qgb2JzdElzT25CYWNrTGVmdCA9IGJhY2tMZWZ0RGlzdCA8IFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZSAmJlxyXG4gICAgICAgICAgICBiYWNrUmlnaHREaXN0ID4gU3BlZWRDb250cm9sbGVyLk1heERpc3RhbmNlICYmXHJcbiAgICAgICAgICAgIGZyb250TGVmdERpc3QgPiBTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2UgJiZcclxuICAgICAgICAgICAgZnJvbnRMZWZ0RGlzdCA+IFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZVxyXG4gICAgICAgICAgICA/IDIuOVxyXG4gICAgICAgICAgICA6IDA7XHJcblxyXG4gICAgICAgIGNvbnN0IG9ic3RJc09uTGVmdCA9IGZyb250TGVmdERpc3QgPCBTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2UgJiZcclxuICAgICAgICAgICAgZnJvbnRSaWdodERpc3QgPiBTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2UgfHxcclxuICAgICAgICAgICAgYmFja0xlZnREaXN0IDwgU3BlZWRDb250cm9sbGVyLk1heERpc3RhbmNlICYmXHJcbiAgICAgICAgICAgIGJhY2tSaWdodERpc3QgPiBTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2VcclxuICAgICAgICAgICAgPyAxXHJcbiAgICAgICAgICAgIDogMDtcclxuICAgICAgICByZXR1cm4geyBvYnN0SXNPbkZyb250LCBmcm9udFJpZ2h0VHVybiwgYmFja1JpZ2h0VHVybiwgb2JzdElzT25SaWdodCwgb2JzdElzT25CYWNrUmlnaHQsIGZyb250TGVmdFR1cm4sIGJhY2tMZWZ0VHVybiwgb2JzdElzT25MZWZ0LCBvYnN0SXNPbkJhY2tMZWZ0IH07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRPYnN0YWNsZUNvZGUoZnJvbnRMZWZ0RGlzdDogbnVtYmVyLCBmcm9udFJpZ2h0RGlzdDogbnVtYmVyLCBiYWNrTGVmdERpc3Q6IG51bWJlciwgYmFja1JpZ2h0RGlzdDogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuICgoZnJvbnRMZWZ0RGlzdCA8IFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZSA/IDEgOiAwKSA8PCAzKSB8XHJcbiAgICAgICAgICAgICgoZnJvbnRSaWdodERpc3QgPCBTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2UgPyAxIDogMCkgPDwgMikgfFxyXG4gICAgICAgICAgICAoKGJhY2tMZWZ0RGlzdCA8IFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZSA/IDEgOiAwKSA8PCAxKSB8XHJcbiAgICAgICAgICAgICgoYmFja1JpZ2h0RGlzdCA8IFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZSA/IDEgOiAwKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FsRGlzdDJUYXJnZXQodGFyZ2V0UG9zaXRpb246IFBvc2l0aW9uLCByb2JvdFBvc2l0aW9uOiBQb3NpdGlvbik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyh0YXJnZXRQb3NpdGlvbi54IC0gcm9ib3RQb3NpdGlvbi54LCAyKSArIE1hdGgucG93KHRhcmdldFBvc2l0aW9uLnkgLSByb2JvdFBvc2l0aW9uLnksIDIpKTtcclxuICAgIH1cclxuXHJcbiAgICBnb1RvVGFyZ2V0KHJvYm90UG9zaXRpb246IFBvc2l0aW9uKTogU3BlZWQge1xyXG4gICAgICAgIGNvbnN0IHRhcmdldFBvc2l0aW9uID0gdGFyZ2V0LmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0RGlzdGFuY2UgPSB0aGlzLmNhbERpc3QyVGFyZ2V0KHRhcmdldFBvc2l0aW9uLCByb2JvdFBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgY29uc3QgbGluZWFyU3BlZWQgPSB0YXJnZXREaXN0YW5jZSA8IDEuMyAqIFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZSA/IHRhcmdldERpc3RhbmNlICogKE1hdGguZXhwKC0wLjAxICogdGFyZ2V0RGlzdGFuY2UgLyBTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2UpKSA6IDA7XHJcbiAgICAgICAgY29uc3QgYW5ndWxhclNwZWVkID0gTWF0aC5hdGFuMigodGFyZ2V0UG9zaXRpb24ueSAtIHJvYm90UG9zaXRpb24ueSksICh0YXJnZXRQb3NpdGlvbi54IC0gcm9ib3RQb3NpdGlvbi54KSkgLSByb2JvdFBvc2l0aW9uLnRoO1xyXG5cclxuICAgICAgICByZXR1cm4geyByaWdodDogbGluZWFyU3BlZWQgKiBNYXRoLmNvcyhhbmd1bGFyU3BlZWQpLCBsZWZ0OiBsaW5lYXJTcGVlZCAqIE1hdGguc2luKGFuZ3VsYXJTcGVlZCkgfTtcclxuICAgIH1cclxuXHJcblxyXG5cclxufSk7IiwiaW1wb3J0IHsgUm9ib3RPYnN0YWNsZURpc3RhbmNlcywgU2Vuc29yRGlzdGFuY2UgfSBmcm9tIFwiLi9PYnN0YWNsZXNcIjtcclxuaW1wb3J0IHsgUG9zaXRpb24sIFJvYm90IH0gZnJvbSBcIi4vUm9ib3RcIjtcclxuaW1wb3J0IHsgU2lkZXMgfSBmcm9tIFwiLi9Tb25hclNlbnNvcnNcIjtcclxuaW1wb3J0IHsgU3BlZWQsIFNwZWVkQ29udHJvbGxlciB9IGZyb20gXCIuL1NwZWVkQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgU3BlZWRDb250cm9sbGVySWYgZnJvbSBcIi4vU3BlZWRDb250cm9sbGVySWZcIjtcclxuaW1wb3J0IFRhcmdldCBmcm9tIFwiLi9UYXJnZXRcIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IChjbGFzcyBTcGVlZENvbnRyb2xsZXIzIGltcGxlbWVudHMgU3BlZWRDb250cm9sbGVyIHtcclxuXHJcbiAgICBzdGF0aWMgTWF4U3BlZWQgPSA3MDA7XHJcbiAgICBzdGF0aWMgTWF4RGlzdGFuY2UgPSA4MDtcclxuICAgIHN0YXRpYyBEaXN0YW5jZUZyb21UYXJnZXRHb2FsID0gMjA7XHJcblxyXG4gICAgaXRlcmF0aW9uID0gMDtcclxuICAgIGxhc3REaXN0YW5jZVRvT2JzdGFjbGVzOiBTZW5zb3JEaXN0YW5jZVtdO1xyXG5cclxuXHJcbiAgICB3cmFwMlBpKGFuZzogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gYW5nID4gTWF0aC5QSSA/ICgtMiAqIE1hdGguUEkgKyBhbmcpIDogYW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbERpc3QyVGFyZ2V0KHRhcmdldFBvc2l0aW9uOiBQb3NpdGlvbiwgcm9ib3RQb3NpdGlvbjogUG9zaXRpb24pOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3codGFyZ2V0UG9zaXRpb24ueCAtIHJvYm90UG9zaXRpb24ueCwgMikgKyBNYXRoLnBvdyh0YXJnZXRQb3NpdGlvbi55IC0gcm9ib3RQb3NpdGlvbi55LCAyKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FsY1doZWVsc1NwZWVkKHNlbnNvck9ic3REaXN0YW5jZXM6IFNlbnNvckRpc3RhbmNlW10sIGN1cnJlbnRTcGVlZDogU3BlZWQsIHJvYm90UG9zaXRpb246IFBvc2l0aW9uKTogU3BlZWQge1xyXG4gICAgLy8gICAgQ29udHJvbCB0byByZWZlcmVuY2UgcG9zZSB1c2luZyBhbiBpbnRlcm1lZGlhdGUgZGlyZWN0aW9uOlxyXG4gICAgICAgIGNvbnN0IHRhcmdldFBvc2l0aW9uID0gVGFyZ2V0LmdldFBvc2l0aW9uKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHBoaVIgPSBNYXRoLmF0YW4yKCh0YXJnZXRQb3NpdGlvbi55IC0gcm9ib3RQb3NpdGlvbi55KSwgKHRhcmdldFBvc2l0aW9uLnggLSByb2JvdFBvc2l0aW9uLngpKTtcclxuICAgICAgICBjb25zdCBhbHBoYSA9IHRoaXMud3JhcDJQaShwaGlSLU1hdGguUEkpO1xyXG5cclxuICAgICAgICBjb25zdCBiZXRhID0gKGFscGhhIDwgMCA/IC0xOjEgKSpNYXRoLmF0YW4oU3BlZWRDb250cm9sbGVyMy5EaXN0YW5jZUZyb21UYXJnZXRHb2FsIC8gdGhpcy5jYWxEaXN0MlRhcmdldCh0YXJnZXRQb3NpdGlvbiwgcm9ib3RQb3NpdGlvbikpO1xyXG5cclxuICAgICAgICBjb25zdCBsaW5lYXJTcGVlZCA9ICB0aGlzLmNhbERpc3QyVGFyZ2V0KHRhcmdldFBvc2l0aW9uLCByb2JvdFBvc2l0aW9uKSA7XHJcbiAgICAgICAgY29uc3QgYW5ndWxhclNwZWVkID0gdGhpcy53cmFwMlBpKHBoaVIgLSByb2JvdFBvc2l0aW9uLnRoICsgXHJcbiAgICAgICAgICAgIChNYXRoLmFicyhhbHBoYSkgPCBNYXRoLmFicyhiZXRhKSA/IGFscGhhIDogYmV0YSkpIDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHsgcmlnaHQ6IChsaW5lYXJTcGVlZCAtIFJvYm90LnJvYm90QXR0ci5yVyAqIDAuNSAqIGFuZ3VsYXJTcGVlZCksIFxyXG4gICAgICAgICAgICAgICAgICBsZWZ0OiAobGluZWFyU3BlZWQgKyBSb2JvdC5yb2JvdEF0dHIuclcgKiAwLjUgKiBhbmd1bGFyU3BlZWQpIH07XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBwcml2YXRlIGdldExlZnRQdWxzZU9ic3RhY2xlKG9ic3RhY2xlczogUm9ib3RPYnN0YWNsZURpc3RhbmNlcyk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FsY1B1bHNlKG9ic3RhY2xlcy5mcm9udExlZnQpICsgdGhpcy5jYWxjUHVsc2Uob2JzdGFjbGVzLmJhY2tMZWZ0KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldExGcm9udFB1bHNlT2JzdGFjbGUob2JzdGFjbGVzOiBSb2JvdE9ic3RhY2xlRGlzdGFuY2VzKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYWxjUHVsc2Uob2JzdGFjbGVzLmZyb250TGVmdCkgKiB0aGlzLmNhbGNQdWxzZShvYnN0YWNsZXMuZnJvbnRSaWdodCk7XHJcbiAgICB9XHJcblxyXG4gIFxyXG4gICAgY2FsY1B1bHNlKGRpc3Q6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIGRpc3QgPCBTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2UgPyAxIC8gKDEgKyBNYXRoLmV4cCgtTWF0aC5hYnMoZGlzdCkpKSA6IDA7XHJcbiAgICB9XHJcbn0pOyIsImltcG9ydCB7IFJvYm90T2JzdGFjbGVEaXN0YW5jZXMsIFNlbnNvckRpc3RhbmNlIH0gZnJvbSBcIi4vT2JzdGFjbGVzXCI7XHJcbmltcG9ydCB7IFBvc2l0aW9uLCBSb2JvdCB9IGZyb20gXCIuL1JvYm90XCI7XHJcbmltcG9ydCB7IFNwZWVkLCBTcGVlZENvbnRyb2xsZXIgfSBmcm9tIFwiLi9TcGVlZENvbnRyb2xsZXJcIjtcclxuaW1wb3J0IFRhcmdldCBmcm9tIFwiLi9UYXJnZXRcIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IChjbGFzcyBTcGVlZENvbnRyb2xsZXI0IGltcGxlbWVudHMgU3BlZWRDb250cm9sbGVyIHtcclxuXHJcbiAgICBzdGF0aWMgTWF4U3BlZWQgPSA3MDA7XHJcbiAgICBzdGF0aWMgTWF4RGlzdGFuY2UgPSA4MDtcclxuICAgIHN0YXRpYyBEaXN0YW5jZUZyb21UYXJnZXRHb2FsID0gMjA7XHJcblxyXG4gICAgaXRlcmF0aW9uID0gMDtcclxuICAgIGxhc3REaXN0YW5jZVRvT2JzdGFjbGVzOiBTZW5zb3JEaXN0YW5jZVtdO1xyXG5cclxuXHJcbiAgICB3cmFwMlBpKGFuZzogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gYW5nID4gTWF0aC5QSSA/ICgtMiAqIE1hdGguUEkgKyBhbmcpIDogYW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbERpc3QyVGFyZ2V0KHRhcmdldFBvc2l0aW9uOiBQb3NpdGlvbiwgcm9ib3RQb3NpdGlvbjogUG9zaXRpb24pOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3codGFyZ2V0UG9zaXRpb24ueCAtIHJvYm90UG9zaXRpb24ueCwgMikgKyBNYXRoLnBvdyh0YXJnZXRQb3NpdGlvbi55IC0gcm9ib3RQb3NpdGlvbi55LCAyKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FsY1doZWVsc1NwZWVkKHNlbnNvck9ic3REaXN0YW5jZXM6IFNlbnNvckRpc3RhbmNlW10sIGN1cnJlbnRTcGVlZDogU3BlZWQsIHJvYm90UG9zaXRpb246IFBvc2l0aW9uKTogU3BlZWQge1xyXG4gICAgLy8gICAgQ29udHJvbCB0byByZWZlcmVuY2UgcG9zZSB1c2luZyBhbiBpbnRlcm1lZGlhdGUgZGlyZWN0aW9uOlxyXG4gICAgICAgIGNvbnN0IHRhcmdldFBvc2l0aW9uID0gVGFyZ2V0LmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICBcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29tbWFuZFRvVGFyZ2V0KHRhcmdldFBvc2l0aW9uLCByb2JvdFBvc2l0aW9uKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHByaXZhdGUgZ2V0Q29tbWFuZFRvVGFyZ2V0KHRhcmdldFBvc2l0aW9uOiBQb3NpdGlvbiwgcm9ib3RQb3NpdGlvbjogUG9zaXRpb24pIHtcclxuICAgICAgICBjb25zdCBwaGlSID0gTWF0aC5hdGFuMigodGFyZ2V0UG9zaXRpb24ueSAtIHJvYm90UG9zaXRpb24ueSksICh0YXJnZXRQb3NpdGlvbi54IC0gcm9ib3RQb3NpdGlvbi54KSk7XHJcbiAgICAgICAgY29uc3QgYWxwaGEgPSB0aGlzLndyYXAyUGkocGhpUiAtIE1hdGguUEkpO1xyXG5cclxuICAgICAgICBjb25zdCBiZXRhID0gKGFscGhhIDwgMCA/IC0xIDogMSkgKiBNYXRoLmF0YW4oU3BlZWRDb250cm9sbGVyNC5EaXN0YW5jZUZyb21UYXJnZXRHb2FsIC8gdGhpcy5jYWxEaXN0MlRhcmdldCh0YXJnZXRQb3NpdGlvbiwgcm9ib3RQb3NpdGlvbikpO1xyXG5cclxuICAgICAgICBjb25zdCBsaW5lYXJTcGVlZCA9IHRoaXMuY2FsRGlzdDJUYXJnZXQodGFyZ2V0UG9zaXRpb24sIHJvYm90UG9zaXRpb24pO1xyXG4gICAgICAgIGNvbnN0IGFuZ3VsYXJTcGVlZCA9IHRoaXMud3JhcDJQaShwaGlSIC0gcm9ib3RQb3NpdGlvbi50aCArXHJcbiAgICAgICAgICAgIChNYXRoLmFicyhhbHBoYSkgPCBNYXRoLmFicyhiZXRhKSA/IGFscGhhIDogYmV0YSkpO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByaWdodDogKGxpbmVhclNwZWVkIC0gUm9ib3Qucm9ib3RBdHRyLnJXICogMC41ICogYW5ndWxhclNwZWVkKSxcclxuICAgICAgICAgICAgbGVmdDogKGxpbmVhclNwZWVkICsgUm9ib3Qucm9ib3RBdHRyLnJXICogMC41ICogYW5ndWxhclNwZWVkKVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRMZWZ0UHVsc2VPYnN0YWNsZShvYnN0YWNsZXM6IFJvYm90T2JzdGFjbGVEaXN0YW5jZXMpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhbGNQdWxzZShvYnN0YWNsZXMuZnJvbnRMZWZ0KSArIHRoaXMuY2FsY1B1bHNlKG9ic3RhY2xlcy5iYWNrTGVmdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRMRnJvbnRQdWxzZU9ic3RhY2xlKG9ic3RhY2xlczogUm9ib3RPYnN0YWNsZURpc3RhbmNlcyk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FsY1B1bHNlKG9ic3RhY2xlcy5mcm9udExlZnQpICogdGhpcy5jYWxjUHVsc2Uob2JzdGFjbGVzLmZyb250UmlnaHQpO1xyXG4gICAgfVxyXG5cclxuICBcclxuICAgIGNhbGNQdWxzZShkaXN0OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBkaXN0IDwgU3BlZWRDb250cm9sbGVyLk1heERpc3RhbmNlID8gMSAvICgxICsgTWF0aC5leHAoLU1hdGguYWJzKGRpc3QpKSkgOiAwO1xyXG4gICAgfVxyXG59KTsiLCJpbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gXCIuL1JvYm90XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgKGNsYXNzIFRhcmdldCB7XHJcbiAgXHJcbiAgICBwcml2YXRlIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuXHJcbiAgICBwcml2YXRlIHRhcmdldCA9IHt4OjQ5MCx5OjQ5MCwgdGg6MCB9IGFzIFBvc2l0aW9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93VGFyZ2V0KCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRDb2xvciA9IHRoaXMuY29udGV4dC5maWxsU3R5bGU7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBcImJsdWVcIjtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmFyYyh0aGlzLnRhcmdldC54LCB0aGlzLnRhcmdldC55LCAzLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5jbG9zZVBhdGgoKTtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGwoKTtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGRlZmF1bHRDb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQb3NpdGlvbigpOlBvc2l0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50YXJnZXQ7XHJcbiAgICB9XHJcbn0pOyIsImltcG9ydCB7IE9ic3RhY2xlcyB9IGZyb20gXCIuL09ic3RhY2xlc1wiO1xyXG5pbXBvcnQgUGF0aEdlbmVyYXRvciBmcm9tIFwiLi9QYXRoR2VuZXJhdG9yXCI7XHJcbmltcG9ydCB7IFJvYm90IH0gZnJvbSBcIi4vUm9ib3RcIjtcclxuaW1wb3J0IHsgU3BlZWRDb250cm9sbGVyIH0gZnJvbSBcIi4vU3BlZWRDb250cm9sbGVyXCI7XHJcbmltcG9ydCB0YXJnZXQgZnJvbSBcIi4vVGFyZ2V0XCI7XHJcblxyXG5leHBvcnQgZW51bSBBbGdvcml0aG1Ub1J1biB7XHJcbiAgZ29Ub1RhcmdldCA9IFwiZ29Ub1RhcmdldFwiLFxyXG4gIGF2b2lkT2JzdGFjbGVzVGFyZ2V0ID0gXCJhdm9pZE9ic3RhY2xlc1RhcmdldFwiLFxyXG4gIGdvVG9UYXJnZXRCeVBhdGggPSBcImdvVG9UYXJnZXRCeVBhdGhcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgV29ybGQge1xyXG4gIHJvYm90ID0gbmV3IFJvYm90KCk7XHJcbiAgb2JzdGFjbGVzID0gbmV3IE9ic3RhY2xlcygpO1xyXG4gIGNvbnJvbGxlciA9IG5ldyBTcGVlZENvbnRyb2xsZXIoKTtcclxuXHJcbiAgcHJpdmF0ZSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gIHByaXZhdGUgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJykgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgfVxyXG5cclxuICBhbmltYXRlKCkge1xyXG4gICAgdGhpcy5jbGVhcigpO1xyXG4gICAgY29uc3QgZGlzdGFuY2VzID0gdGhpcy5vYnN0YWNsZXMuY2FsY0Rpc3RhbmNlcyh0aGlzLnJvYm90LmdldFBvc2l0aW9uKCkpO1xyXG4gICAgY29uc3Qgc2Vuc29yRGlzdGFuY2VzID0gdGhpcy5vYnN0YWNsZXMuY2FsY0Rpc3RhbmNlc0Zyb21TZW5zb3JzKHRoaXMucm9ib3QuZ2V0U2Vuc29ycygpKTtcclxuICAgIGNvbnN0IHNwZWVkID0gdGhpcy5jb25yb2xsZXIuY2FsY1doZWVsc1NwZWVkKHNlbnNvckRpc3RhbmNlcywgdGhpcy5yb2JvdC5nZXRTcGVlZCgpLHRoaXMucm9ib3QuZ2V0UG9zaXRpb24oKSx0aGlzLmdldEFsb2dvcml0aG0oKSk7XHJcbiAgICB0aGlzLnJvYm90LmFuaW1hdGUoc3BlZWQpO1xyXG4gICAgdGhpcy5vYnN0YWNsZXMuc2hvdygpO1xyXG4gICAgUGF0aEdlbmVyYXRvci5zaG93RnJvbnRPYnN0YWNsZVBhdGhBdm9pZGFuY2Uoc2Vuc29yRGlzdGFuY2VzLCB0aGlzLnJvYm90LmdldFBvc2l0aW9uKCkpO1xyXG4gICAgdGFyZ2V0LnNob3dUYXJnZXQoKTtcclxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4geyB0aGlzLmFuaW1hdGUoKSB9KTtcclxuICB9XHJcblxyXG4gIGNsZWFyKCkge1xyXG4gICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUV2ZW50KGV2ZW50OiBQb2ludGVyRXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xlYXIoKTtcclxuXHJcbiAgICBzd2l0Y2ggKChldmVudC5jdXJyZW50VGFyZ2V0IGFzIEVsZW1lbnQpLmdldEF0dHJpYnV0ZShcImlkXCIpKSB7XHJcbiAgICAgIGNhc2UgXCJyaWdodFwiOiB7XHJcbiAgICAgICAgdGhpcy5yb2JvdC5hbmltYXRlKHsgcmlnaHQ6IDE2MCwgbGVmdDogMTUwIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgXCJsZWZ0XCI6IHtcclxuICAgICAgICB0aGlzLnJvYm90LmFuaW1hdGUoeyByaWdodDogMTUwLCBsZWZ0OiAxNjAgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNhc2UgXCJmb3J3YXJkXCI6IHtcclxuICAgICAgICB0aGlzLnJvYm90LmFuaW1hdGUoeyByaWdodDogMTYwLCBsZWZ0OiAxNjAgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNhc2UgXCJiYWNrd2FyZFwiOiB7XHJcbiAgICAgICAgdGhpcy5yb2JvdC5hbmltYXRlKHsgcmlnaHQ6IC0xNjAsIGxlZnQ6IC0xNjAgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNhc2UgXCJzdG9wXCI6IHtcclxuICAgICAgICB0aGlzLnJvYm90LnRvZ2dsZVN0b3AoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgICAgY2FzZSBcInN0ZXBcIjoge1xyXG4gICAgICAgIHRoaXMuY2xlYXIoKTtcclxuICAgICAgICBjb25zdCBkaXN0YW5jZXMgPSB0aGlzLm9ic3RhY2xlcy5jYWxjRGlzdGFuY2VzKHRoaXMucm9ib3QuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICAgICAgY29uc3Qgc2Vuc29yRGlzdGFuY2VzID0gdGhpcy5vYnN0YWNsZXMuY2FsY0Rpc3RhbmNlc0Zyb21TZW5zb3JzKHRoaXMucm9ib3QuZ2V0U2Vuc29ycygpKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3BlZWQgPSB0aGlzLmNvbnJvbGxlci5jYWxjV2hlZWxzU3BlZWQoc2Vuc29yRGlzdGFuY2VzLCB0aGlzLnJvYm90LmdldFNwZWVkKCksdGhpcy5yb2JvdC5nZXRQb3NpdGlvbigpLHRoaXMuZ2V0QWxvZ29yaXRobSgpKTtcclxuICAgICAgICB0aGlzLnJvYm90LmFuaW1hdGUoc3BlZWQpO1xyXG4gICAgICAgIHRoaXMub2JzdGFjbGVzLnNob3coKTtcclxuICAgICAgICBQYXRoR2VuZXJhdG9yLnNob3dGcm9udE9ic3RhY2xlUGF0aEF2b2lkYW5jZShzZW5zb3JEaXN0YW5jZXMsIHRoaXMucm9ib3QuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNhc2UgXCJzdGFydFwiOiB7XHJcbiAgICAgICAgdGhpcy5jbGVhcigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGRpc3RhbmNlcyA9IHRoaXMub2JzdGFjbGVzLmNhbGNEaXN0YW5jZXModGhpcy5yb2JvdC5nZXRQb3NpdGlvbigpKTtcclxuICAgICAgICBjb25zdCBzZW5zb3JEaXN0YW5jZXMgPSB0aGlzLm9ic3RhY2xlcy5jYWxjRGlzdGFuY2VzRnJvbVNlbnNvcnModGhpcy5yb2JvdC5nZXRTZW5zb3JzKCkpO1xyXG4gICAgICAgIGNvbnN0IHNwZWVkID0gdGhpcy5jb25yb2xsZXIuY2FsY1doZWVsc1NwZWVkKHNlbnNvckRpc3RhbmNlcywgdGhpcy5yb2JvdC5nZXRTcGVlZCgpLHRoaXMucm9ib3QuZ2V0UG9zaXRpb24oKSx0aGlzLmdldEFsb2dvcml0aG0oKSk7XHJcbiAgICAgICAgdGhpcy5yb2JvdC5hbmltYXRlKHNwZWVkKTtcclxuICAgICAgICB0aGlzLm9ic3RhY2xlcy5zaG93KCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNhc2UgXCJ4XCI6e1xyXG4gICAgICAgIHRoaXMucm9ib3Quc2V0WCggcGFyc2VGbG9hdCggKGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgdW5rbm93biBhcyB7IHZhbHVlOnN0cmluZ30pLnZhbHVlICkgICk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNhc2UgXCJ5XCI6e1xyXG4gICAgICAgIHRoaXMucm9ib3Quc2V0WSggcGFyc2VGbG9hdCggKGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgdW5rbm93biBhcyB7IHZhbHVlOnN0cmluZ30pLnZhbHVlICkgICk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNhc2UgXCJ0aFwiOntcclxuICAgICAgICB0aGlzLnJvYm90LnNldFRoKCBwYXJzZUZsb2F0KCAoZXZlbnQuY3VycmVudFRhcmdldCBhcyB1bmtub3duIGFzIHsgdmFsdWU6c3RyaW5nfSkudmFsdWUgKSAgKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgICAgY2FzZSBBbGdvcml0aG1Ub1J1bi5hdm9pZE9ic3RhY2xlc1RhcmdldC50b1N0cmluZygpOntcclxuICAgICAgICB0aGlzLmNoZWNrUmFkaW9CdXR0b24oQWxnb3JpdGhtVG9SdW4uYXZvaWRPYnN0YWNsZXNUYXJnZXQudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNhc2UgQWxnb3JpdGhtVG9SdW4uZ29Ub1RhcmdldC50b1N0cmluZygpOntcclxuICAgICAgICB0aGlzLmNoZWNrUmFkaW9CdXR0b24oQWxnb3JpdGhtVG9SdW4uZ29Ub1RhcmdldC50b1N0cmluZygpKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgXHJcblxyXG4gICAgfVxyXG4gICAgdGhpcy5vYnN0YWNsZXMuc2hvdygpO1xyXG5cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hlY2tSYWRpb0J1dHRvbihyYWRpb0J1dHRvbjpzdHJpbmcpIHtcclxuICAgIE9iamVjdC5rZXlzKEFsZ29yaXRobVRvUnVuKVxyXG4gICAgLmZvckVhY2goYWxnbyA9PiB7IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhbGdvKSBhcyB1bmtub3duIGFzIHsgY2hlY2tlZDogYm9vbGVhbjsgfSkuY2hlY2tlZCA9IGZhbHNlO30pO1xyXG4gICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJhZGlvQnV0dG9uKSBhcyB1bmtub3duIGFzIHsgY2hlY2tlZDogYm9vbGVhbjsgfSkuY2hlY2tlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBnZXRBbG9nb3JpdGhtKCkgOiBBbGdvcml0aG1Ub1J1bntcclxuICAgIGlmKChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChBbGdvcml0aG1Ub1J1bi5nb1RvVGFyZ2V0LnRvU3RyaW5nKCkpIGFzIHVua25vd24gYXMge2NoZWNrZWQ6Ym9vbGVhbn0pLmNoZWNrZWQpe1xyXG4gICAgICByZXR1cm4gQWxnb3JpdGhtVG9SdW4uZ29Ub1RhcmdldDtcclxuICAgIH1cclxuICAgIHJldHVybiBBbGdvcml0aG1Ub1J1bi5hdm9pZE9ic3RhY2xlc1RhcmdldDtcclxuICB9XHJcbn0iLCJcclxuaW1wb3J0IHsgQWxnb3JpdGhtVG9SdW4sIFdvcmxkIH0gZnJvbSBcIi4vV29ybGRcIjtcclxuXHJcbmNvbnN0IHdvcmxkID0gbmV3IFdvcmxkKCk7XHJcblxyXG5cclxuW1wicmlnaHRcIiwgXCJsZWZ0XCIsIFwiZm9yd2FyZFwiLCBcImJhY2t3YXJkXCIsIFwic3RlcFwiLCBcInN0b3BcIl1cclxuICAgIC5jb25jYXQoT2JqZWN0LmtleXMoQWxnb3JpdGhtVG9SdW4pKVxyXG4gICAgLmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChidXR0b24pLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIHdvcmxkLmhhbmRsZUV2ZW50KGV2ZW50IGFzIFBvaW50ZXJFdmVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICApO1xyXG5cclxuW1wieFwiLCBcInlcIiwgXCJ0aFwiXS5mb3JFYWNoKGlucHV0ID0+IHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlucHV0KS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGV2ZW50ID0+IHtcclxuICAgICAgICB3b3JsZC5oYW5kbGVFdmVudChldmVudCBhcyBQb2ludGVyRXZlbnQpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxud29ybGQuYW5pbWF0ZSgpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9