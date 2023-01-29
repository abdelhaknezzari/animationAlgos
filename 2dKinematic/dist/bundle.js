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
    Obstacles.prototype.getMaxDistanceObstacle = function (robotPosition) {
        var _this = this;
        debugger;
        return this.walls.reduce(function (prv, cur) { return prv.concat(cur); }, [])
            .map(function (wallPoint) {
            return {
                x: wallPoint.x,
                y: wallPoint.y,
                d: _this.distanceBetweenRobotAndObstacle(robotPosition, wallPoint)
            };
        }).sort(function (prv, cur) {
            if (prv.d < cur.d) {
                return 1;
            }
            else if (prv.d > cur.d) {
                return -1;
            }
            else {
                return 0;
            }
            ;
        })[0];
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
    PathGenerator.prototype.wrap2Pi = function (ang) {
        return ang > Math.PI ? (-2 * Math.PI + ang) : ang;
    };
    PathGenerator.prototype.generateCirclesAround = function (position) {
        var _this = this;
        return this.getRangeOfAngles(0, 2 * Math.PI, 0.2)
            .map(function (angle) {
            return {
                x: position.x + 100 * Math.cos(angle),
                y: position.y + 100 * Math.sin(angle),
                th: _this.wrap2Pi(position.th + angle)
            };
        })
            .map(function (center) { return _this.getRangeOfAngles(0, 2 * Math.PI, 0.02)
            .map(function (angl) {
            return {
                x: center.x + 100 * Math.cos(angl),
                y: center.y + 100 * Math.sin(angl),
                th: _this.wrap2Pi(center.th + angl)
            };
        }); }).reduce(function (prv, cur) { return prv.concat(cur); }, []);
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
    SpeedController.prototype.wrap2Pi = function (ang) {
        return ang > Math.PI ? (-2 * Math.PI + ang) : ang;
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
/* harmony import */ var _PathGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PathGenerator */ "./src/PathGenerator.ts");
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
            // const farthestObstacle = Obstacles.getMaxDistanceObstacle(robotPosition);
            _PathGenerator__WEBPACK_IMPORTED_MODULE_3__["default"].generateCirclesAround(robotPosition)
                .forEach(function (pos) {
                _Target__WEBPACK_IMPORTED_MODULE_2__["default"].setPosition(pos);
                _Target__WEBPACK_IMPORTED_MODULE_2__["default"].showTarget();
            });
            // PathGenerator.getRangeOfAngles(0, 2 * Math.PI, 0.02)
            //     .forEach(angle => {
            //         Target.setPosition({
            //             x: robotPosition.x + 100 * Math.cos(angle),
            //             y: robotPosition.y + 100 * Math.sin(angle), 
            //             th: robotPosition.th + angle
            //         });
            //         Target.showTarget();
            //      }
            //     );
            return { right: 0, left: 0 };
            //  return this.getCommandToTarget((farthestObstacle as unknown as Position), robotPosition);
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
    Target.prototype.setPosition = function (target) {
        this.target = target;
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
            case AlgorithmToRun.goToTargetByPath.toString(): {
                this.checkRadioButton(AlgorithmToRun.goToTargetByPath.toString());
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
        if (document.getElementById(AlgorithmToRun.goToTargetByPath.toString()).checked) {
            return AlgorithmToRun.goToTargetByPath;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL09ic3RhY2xlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUGF0aEdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUm9ib3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NvbmFyU2Vuc29ycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU3BlZWRDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9TcGVlZENvbnRyb2xsZXIxLnRzIiwid2VicGFjazovLy8uL3NyYy9TcGVlZENvbnRyb2xsZXIzLnRzIiwid2VicGFjazovLy8uL3NyYy9TcGVlZENvbnRyb2xsZXI0LnRzIiwid2VicGFjazovLy8uL3NyYy9UYXJnZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1dvcmxkLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQTBDO0FBQ0s7QUF1Qi9DO0lBUUk7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFzQixDQUFDO1FBQ3JFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELHFDQUFpQixHQUFqQjtRQUFBLGlCQVlDO1FBWEcsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNULEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRSxVQUFDLENBQUMsRUFBRSxHQUFHLElBQUssVUFBRyxFQUFILENBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxhQUFHLElBQU0sT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFZO1lBQzlHLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRSxVQUFDLENBQUMsRUFBRSxHQUFHLElBQUssVUFBRyxFQUFILENBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxhQUFHLElBQU0sT0FBTyxFQUFFLENBQUMsRUFBRSxLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQVk7WUFDL0gsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRyxFQUFFLFVBQUMsQ0FBQyxFQUFFLEdBQUcsSUFBSyxVQUFHLEVBQUgsQ0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLGFBQUcsSUFBTSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBWTtZQUMvSCxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFHLEVBQUUsVUFBQyxDQUFDLEVBQUUsR0FBRyxJQUFLLFVBQUcsRUFBSCxDQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsYUFBRyxJQUFNLE9BQU8sRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBWTtZQUM5RyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFDLElBQUksRUFBQyxFQUFFLFVBQUMsQ0FBQyxFQUFFLEdBQUcsSUFBSyxVQUFHLEVBQUgsQ0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLGFBQUcsSUFBTSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFDLEdBQUcsRUFBRyxDQUFDLEVBQUUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUMsSUFBSSxHQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFZO1lBQ2hLLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUMsSUFBSSxFQUFDLEVBQUUsVUFBQyxDQUFDLEVBQUUsR0FBRyxJQUFLLFVBQUcsRUFBSCxDQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsYUFBRyxJQUFNLE9BQU8sRUFBRSxDQUFDLEVBQUUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUMsR0FBRyxFQUFHLENBQUMsRUFBRSxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBQyxJQUFJLEdBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxD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LEVBQUUsR0FBRSxRQUFRLENBQUMsRUFBRSxDQUFFLENBQUM7UUFDeEQsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUUsQ0FBQztRQUN6RCxXQUFXLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRSxRQUFRLENBQUMsRUFBRSxDQUFFLENBQUM7UUFDakMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBRSxDQUFDO1FBQ2hDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBRSxDQUFDO1FBQ2xDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBRSxDQUFDO1FBQzNELFdBQVcsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxFQUFFLEdBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBRSxDQUFDO1FBQ25ELFdBQVcsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRSxRQUFRLENBQUMsRUFBRSxDQUFFLENBQUM7UUFDcEQsV0FBVyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBRSxDQUFDO1FBQ3ZELFdBQVcsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRSxRQUFRLENBQUMsRUFBRSxDQUFFLENBQUM7UUFDbkQsV0FBVyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUUsQ0FBQztRQUNwRCxXQUFXLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FB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ZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgUm9ib3QsIHsgUG9zaXRpb24gfSBmcm9tIFwiLi9Sb2JvdFwiO1xuaW1wb3J0IHsgU2Vuc29yLCBTaWRlcyB9IGZyb20gXCIuL1NvbmFyU2Vuc29yc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBvaW50TWluaW11bSB7XG4gICAgeDogbnVtYmVyLCAvLyBwb3NpdGlvbiBjb29yZGluYXRlIHhcbiAgICB5OiBudW1iZXIsIC8vIHBvc2l0aW9uIGNvb3JkaW5hdGUgeVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBvaW50IGV4dGVuZHMgUG9pbnRNaW5pbXVtIHtcbiAgICBkOm51bWJlciAvLyBkaXN0YW5jZSBmcm9tIHJvYm90XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2Vuc29yRGlzdGFuY2Uge1xuICAgIHNpZGU6IFNpZGVzLFxuICAgIGQ6bnVtYmVyIC8vIGRpc3RhbmNlIGZyb20gcm9ib3Rcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSb2JvdE9ic3RhY2xlRGlzdGFuY2VzIHtcbiAgICBmcm9udExlZnQ6IG51bWJlciwgXG4gICAgZnJvbnRSaWdodDpudW1iZXIsIFxuICAgIGJhY2tMZWZ0Om51bWJlciwgXG4gICAgYmFja1JpZ2h0Om51bWJlcjsgXG59XG5cbmV4cG9ydCBjbGFzcyBPYnN0YWNsZXMge1xuICAgIHByaXZhdGUgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICBwcml2YXRlIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcblxuXG4gICAgd2FsbHM6IEFycmF5PEFycmF5PFBvaW50Pj47XG4gICAgb2JzdGFjbGVzOiBBcnJheTxQb2ludD47XG4gICAgc3RhdGljIHJXYWxsID0gMC41O1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLmdlbmVyYXRlT2JzdGFjbGVzKCk7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVPYnN0YWNsZXMoKSB7XG4gICAgICAgIHRoaXMud2FsbHMgPSBbXG4gICAgICAgICAgICBBcnJheS5mcm9tKHsgbGVuZ3RoOiB0aGlzLmNhbnZhcy5oZWlnaHQgfSwgKF8sIGtleSkgPT4ga2V5KS5tYXAobnVtID0+IHsgcmV0dXJuIHsgeDogMCwgeTogbnVtfTsgfSkgYXMgW1BvaW50XSxcbiAgICAgICAgICAgIEFycmF5LmZyb20oeyBsZW5ndGg6IHRoaXMuY2FudmFzLmhlaWdodCB9LCAoXywga2V5KSA9PiBrZXkpLm1hcChudW0gPT4geyByZXR1cm4geyB4OiB0aGlzLmNhbnZhcy53aWR0aCwgeTogbnVtIH07IH0pIGFzIFtQb2ludF0sXG4gICAgICAgICAgICBBcnJheS5mcm9tKHsgbGVuZ3RoOiB0aGlzLmNhbnZhcy53aWR0aCAgfSwgKF8sIGtleSkgPT4ga2V5KS5tYXAobnVtID0+IHsgcmV0dXJuIHsgeDogbnVtLCB5OiB0aGlzLmNhbnZhcy5oZWlnaHR9OyB9KSBhcyBbUG9pbnRdLFxuICAgICAgICAgICAgQXJyYXkuZnJvbSh7IGxlbmd0aDogdGhpcy5jYW52YXMud2lkdGggIH0sIChfLCBrZXkpID0+IGtleSkubWFwKG51bSA9PiB7IHJldHVybiB7IHg6IG51bSwgeTogMH07IH0pIGFzIFtQb2ludF0sXG4gICAgICAgICAgICBBcnJheS5mcm9tKHsgbGVuZ3RoOiB0aGlzLmNhbnZhcy53aWR0aCowLjE1fSwgKF8sIGtleSkgPT4ga2V5KS5tYXAobnVtID0+IHsgcmV0dXJuIHsgeDogdGhpcy5jYW52YXMuaGVpZ2h0KjAuMyAsIHk6IHRoaXMuY2FudmFzLmhlaWdodCowLjQ1LW51bSB9OyB9KSBhcyBbUG9pbnRdLFxuICAgICAgICAgICAgQXJyYXkuZnJvbSh7IGxlbmd0aDogdGhpcy5jYW52YXMud2lkdGgqMC4xNX0sIChfLCBrZXkpID0+IGtleSkubWFwKG51bSA9PiB7IHJldHVybiB7IHg6IHRoaXMuY2FudmFzLmhlaWdodCowLjcgLCB5OiB0aGlzLmNhbnZhcy5oZWlnaHQqMC43MC1udW0gfTsgfSkgYXMgW1BvaW50XSxcbiAgICAgICAgICAgIEFycmF5LmZyb20oeyBsZW5ndGg6IHRoaXMuY2FudmFzLndpZHRoKjAuMTF9LCAoXywga2V5KSA9PiBrZXkpLm1hcChudW0gPT4geyByZXR1cm4geyB4OiB0aGlzLmNhbnZhcy5oZWlnaHQqMC43ICwgeTogdGhpcy5jYW52YXMuaGVpZ2h0LW51bSB9OyB9KSBhcyBbUG9pbnRdLFxuICAgICAgICAgICAgQXJyYXkuZnJvbSh7IGxlbmd0aDogdGhpcy5jYW52YXMud2lkdGgqMC43fSwgKF8sIGtleSkgPT4ga2V5KS5tYXAobnVtID0+IHsgcmV0dXJuIHsgeDogbnVtLCB5OiB0aGlzLmNhbnZhcy5oZWlnaHQqMC4zIH07IH0pIGFzIFtQb2ludF0sXG4gICAgICAgICAgICBBcnJheS5mcm9tKHsgbGVuZ3RoOiB0aGlzLmNhbnZhcy53aWR0aCowLjd9LCAoXywga2V5KSA9PiBrZXkpLm1hcChudW0gPT4geyByZXR1cm4geyB4OiB0aGlzLmNhbnZhcy53aWR0aCAtIG51bSwgeTogdGhpcy5jYW52YXMuaGVpZ2h0KjAuNyB9OyB9KSBhcyBbUG9pbnRdXG4gICAgICAgIF07XG4gICAgfVxuXG4gICAgIGNhbGNEaXN0YW5jZXNGcm9tU2Vuc29ycyhzZW5zb3JzOlNlbnNvcltdKTpTZW5zb3JEaXN0YW5jZVtdIHtcbiAgICAgICAgY29uc3Qgd2FsbHNQb2ludHMgPSB0aGlzLndhbGxzLnJlZHVjZSggKHBydixjdXIpID0+IHBydi5jb25jYXQoY3VyKSxbXSApO1xuICAgICAgICBjb25zdCBzZW5zRGlzdCA9IHNlbnNvcnMubWFwKFxuICAgICAgICAgICAgc2Vuc29yID0+IFxuICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGQ6d2FsbHNQb2ludHMubWFwKFxuICAgICAgICAgICAgICAgICAgICB3YWxsUG9pbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgeDp3YWxsUG9pbnQueCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6d2FsbFBvaW50LnksXG4gICAgICAgICAgICAgICAgICAgICAgICBkOiB0aGlzLmRpc3RhbmNlQmV0d2VlblJvYm90QW5kT2JzdGFjbGUoe3g6c2Vuc29yLngseTpzZW5zb3IueSx0aDpudWxsIH0sd2FsbFBvaW50KSAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICB9IGFzIFBvaW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKS5zb3J0KCAocHJ2LGN1cikgPT4gIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoIHBydi5kIDwgY3VyLmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKCBwcnYuZCA+IGN1ci5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pWzBdPy5kLFxuICAgICAgICAgICAgICAgIHNpZGU6c2Vuc29yLnNpZGVcbiAgICAgICAgICAgICB9IGFzIFNlbnNvckRpc3RhbmNlO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gc2Vuc0Rpc3Q7XG4gICAgIH1cblxuICAgIGNhbGNEaXN0YW5jZXMoIHJvYm90UG9zaXRpb246UG9zaXRpb24pOlBvaW50W10ge1xuICAgICAgICByZXR1cm4gdGhpcy53YWxscy5yZWR1Y2UoIChwcnYsY3VyKSA9PiBwcnYuY29uY2F0KGN1ciksW10gKS5tYXAoXG4gICAgICAgICAgICB3YWxsUG9pbnQgPT4ge1xuICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB4OndhbGxQb2ludC54LFxuICAgICAgICAgICAgICAgIHk6d2FsbFBvaW50LnksXG4gICAgICAgICAgICAgICAgZDogdGhpcy5kaXN0YW5jZUJldHdlZW5Sb2JvdEFuZE9ic3RhY2xlKHJvYm90UG9zaXRpb24sd2FsbFBvaW50KSAgICAgIFxuICAgICAgICAgICAgICAgfSBhcyBQb2ludDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKS5zb3J0KCAocHJ2LGN1cikgPT4gIHtcbiAgICAgICAgICAgIGlmKCBwcnYuZCA8IGN1ci5kKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgfSBlbHNlIGlmKCBwcnYuZCA+IGN1ci5kKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0TWF4RGlzdGFuY2VPYnN0YWNsZSggcm9ib3RQb3NpdGlvbjpQb3NpdGlvbik6UG9pbnQge1xuICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgcmV0dXJuIHRoaXMud2FsbHMucmVkdWNlKCAocHJ2LGN1cikgPT4gcHJ2LmNvbmNhdChjdXIpLFtdIClcbiAgICAgICAgLm1hcChcbiAgICAgICAgICAgIHdhbGxQb2ludCA9PiB7XG4gICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHg6d2FsbFBvaW50LngsXG4gICAgICAgICAgICAgICAgeTp3YWxsUG9pbnQueSxcbiAgICAgICAgICAgICAgICBkOiB0aGlzLmRpc3RhbmNlQmV0d2VlblJvYm90QW5kT2JzdGFjbGUocm9ib3RQb3NpdGlvbix3YWxsUG9pbnQpICAgICAgXG4gICAgICAgICAgICAgICB9IGFzIFBvaW50O1xuICAgICAgICAgICAgfVxuICAgICAgICApLnNvcnQoIChwcnYsY3VyKSA9PiAge1xuICAgICAgICAgICAgaWYoIHBydi5kIDwgY3VyLmQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiggcHJ2LmQgPiBjdXIuZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KVswXTtcbiAgICB9XG5cblxuICAgIGRpc3RhbmNlQmV0d2VlblJvYm90QW5kT2JzdGFjbGUoIHJvYm90UG9zaXRpb246UG9zaXRpb24scG9pbnQ6UG9pbnQpe1xuICAgICAgICAgIHJldHVybiBNYXRoLnNxcnQoIE1hdGgucG93KHJvYm90UG9zaXRpb24ueC1wb2ludC54LDIpICsgTWF0aC5wb3cocm9ib3RQb3NpdGlvbi55LXBvaW50LnksMikpO1xuICAgIH1cblxuICAgIHNob3coKSB7XG4gICAgICAgIC8vIHRoaXMuY2FsY0Rpc3RhbmNlcygpO1xuICAgICAgICB0aGlzLndhbGxzLmZvckVhY2god2FsbCA9PiB3YWxsLmZvckVhY2goIHBvaW50ID0+IHtcbiAgICAgICAgICAgIHRoaXMucGxvdENpcmNsZShwb2ludCk7XG4gICAgICAgIH0gKSk7XG4gICAgICAgIFxuICAgICAgICBcbiAgICB9XG5cbiAgICBwbG90Q2lyY2xlKHBvaW50IDpQb2ludCkge1xuICAgICAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5hcmMocG9pbnQueCwgcG9pbnQueSwgT2JzdGFjbGVzLnJXYWxsLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGwoKTtcbiAgICB9XG5cbiAgICBjYWxjRGlzdGFuY2VzQXNKc29uKCApOlJvYm90T2JzdGFjbGVEaXN0YW5jZXMge1xuICAgICAgICBjb25zdCBzZW5zb3JPYnN0RGlzdGFuY2VzID0gdGhpcy5jYWxjRGlzdGFuY2VzRnJvbVNlbnNvcnMoUm9ib3QuZ2V0U2Vuc29ycygpKTtcbiAgICAgICAgY29uc3QgZnJvbnRMZWZ0ID0gc2Vuc29yT2JzdERpc3RhbmNlcy5maW5kKHNlbnMgPT4gc2Vucy5zaWRlID09PSBTaWRlcy5mcm9udExlZnQpLmQ7XG4gICAgICAgIGNvbnN0IGZyb250UmlnaHQgPSBzZW5zb3JPYnN0RGlzdGFuY2VzLmZpbmQoc2VucyA9PiBzZW5zLnNpZGUgPT09IFNpZGVzLmZyb250UmlnaHQpLmQ7XG4gICAgICAgIGNvbnN0IGJhY2tMZWZ0ID0gc2Vuc29yT2JzdERpc3RhbmNlcy5maW5kKHNlbnMgPT4gc2Vucy5zaWRlID09PSBTaWRlcy5iYWNrTGVmdCkuZDtcbiAgICAgICAgY29uc3QgYmFja1JpZ2h0ID0gc2Vuc29yT2JzdERpc3RhbmNlcy5maW5kKHNlbnMgPT4gc2Vucy5zaWRlID09PSBTaWRlcy5iYWNrUmlnaHQpLmQ7XG4gICAgICAgIHJldHVybiB7IGZyb250TGVmdCwgZnJvbnRSaWdodCwgYmFja0xlZnQsIGJhY2tSaWdodCB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IE9ic3RhY2xlcygpOyIsImltcG9ydCB7IFBvaW50LCBTZW5zb3JEaXN0YW5jZSB9IGZyb20gXCIuL09ic3RhY2xlc1wiO1xuaW1wb3J0IHsgUG9zaXRpb24sIFJvYm90IH0gZnJvbSBcIi4vUm9ib3RcIjtcbmltcG9ydCB7IFNlbnNvciwgU2lkZXMgfSBmcm9tIFwiLi9Tb25hclNlbnNvcnNcIjtcblxuY2xhc3MgUGF0aEdlbmVyYXRvciB7XG4gICAgcHJpdmF0ZSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICAgIHByaXZhdGUgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xuICAgICAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICB9XG5cbiAgICBnZXRSYW5nZU9mQW5nbGVzKGZyb206IG51bWJlciwgdG86IG51bWJlciwgc3RlcDogbnVtYmVyKTogbnVtYmVyW10ge1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh7IGxlbmd0aDogTWF0aC5jZWlsKE1hdGguYWJzKCh0byAtIGZyb20pIC8gc3RlcCkpIH0sICh4LCBpKSA9PiBpKS5tYXAoXG4gICAgICAgICAgICBpbmR4ID0+IHN0ZXAgPiAwID8gZnJvbSArIGluZHggKiBzdGVwIDogdG8gKyBpbmR4ICogc3RlcFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHdyYXAyUGkoYW5nOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gYW5nID4gTWF0aC5QSSA/ICgtMiAqIE1hdGguUEkgKyBhbmcpIDogYW5nO1xuICAgIH1cblxuICAgIGdlbmVyYXRlQ2lyY2xlc0Fyb3VuZChwb3NpdGlvbjogUG9zaXRpb24pOiBQb3NpdGlvbltdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UmFuZ2VPZkFuZ2xlcygwLCAyICogTWF0aC5QSSwgMC4yKVxuICAgICAgICAgICAgLm1hcChhbmdsZSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgeDogcG9zaXRpb24ueCArIDEwMCAqIE1hdGguY29zKGFuZ2xlKSxcbiAgICAgICAgICAgICAgICAgICAgeTogcG9zaXRpb24ueSArIDEwMCAqIE1hdGguc2luKGFuZ2xlKSxcbiAgICAgICAgICAgICAgICAgICAgdGg6IHRoaXMud3JhcDJQaShwb3NpdGlvbi50aCArIGFuZ2xlKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm1hcChjZW50ZXIgPT4gdGhpcy5nZXRSYW5nZU9mQW5nbGVzKDAsIDIgKiBNYXRoLlBJLCAwLjAyKVxuICAgICAgICAgICAgICAgIC5tYXAoYW5nbCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBjZW50ZXIueCArIDEwMCAqIE1hdGguY29zKGFuZ2wpLFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogY2VudGVyLnkgKyAxMDAgKiBNYXRoLnNpbihhbmdsKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoOnRoaXMud3JhcDJQaShjZW50ZXIudGggKyBhbmdsKVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApLnJlZHVjZSggKHBydixjdXIpID0+IHBydi5jb25jYXQoY3VyKSxbXSApO1xuICAgIH1cblxuICAgIHNob3dGcm9udE9ic3RhY2xlUGF0aEF2b2lkYW5jZShzZW5zb3JzOiBTZW5zb3JEaXN0YW5jZVtdLCByb2JvdFBvc2l0aW9uOiBQb3NpdGlvbikge1xuICAgICAgICBjb25zdCBmcm9udExlZnREaXN0ID0gc2Vuc29ycy5maW5kKHNlbnMgPT4gc2Vucy5zaWRlID09PSBTaWRlcy5mcm9udExlZnQpLmQ7XG4gICAgICAgIGNvbnN0IGZyb250UmlnaHREaXN0ID0gc2Vuc29ycy5maW5kKHNlbnMgPT4gc2Vucy5zaWRlID09PSBTaWRlcy5mcm9udFJpZ2h0KS5kO1xuICAgICAgICBjb25zdCBiYWNrTGVmdERpc3QgPSBzZW5zb3JzLmZpbmQoc2VucyA9PiBzZW5zLnNpZGUgPT09IFNpZGVzLmJhY2tMZWZ0KS5kO1xuICAgICAgICBjb25zdCBiYWNrUmlnaHREaXN0ID0gc2Vuc29ycy5maW5kKHNlbnMgPT4gc2Vucy5zaWRlID09PSBTaWRlcy5iYWNrUmlnaHQpLmQ7XG5cblxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFRleHQoYGZyb250TGVmdERpc3Q6JHtmcm9udExlZnREaXN0fWAsIDEsIDEwKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxUZXh0KGBiYWNrTGVmdERpc3Q6JHtiYWNrTGVmdERpc3R9YCwgMSwgMzApO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFRleHQoYGZyb250UmlnaHREaXN0OiR7ZnJvbnRSaWdodERpc3R9YCwgMSwgNTApO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFRleHQoYGJhY2tSaWdodERpc3Q6JHtiYWNrUmlnaHREaXN0fWAsIDEsIDcwKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxUZXh0KGBUaGV0YToke3JvYm90UG9zaXRpb24udGh9YCwgMSwgOTApO1xuXG4gICAgICAgIGlmIChiYWNrTGVmdERpc3QgPD0gMypSb2JvdC5yb2JvdEF0dHIuclcgJiZcbiAgICAgICAgICAgIGJhY2tSaWdodERpc3QgPD0gMypSb2JvdC5yb2JvdEF0dHIuclcpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGlmIChyb2JvdFBvc2l0aW9uLnRoID49IC1NYXRoLlBJKjE1LzE4MCAmJiByb2JvdFBvc2l0aW9uLnRoIDw9IE1hdGguUEkqMTUvMTgwKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50Q29sb3IgPSB0aGlzLmNvbnRleHQuZmlsbFN0eWxlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFyY1ggPSByb2JvdFBvc2l0aW9uLng7XG4gICAgICAgICAgICAgICAgY29uc3QgYXJjWSA9IHJvYm90UG9zaXRpb24ueSArIDEuNSAqIFJvYm90LnJvYm90QXR0ci5yVztcblxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UmFuZ2VPZkFuZ2xlcyhNYXRoLlBJIC8gMiwgMCwgLTAuMDIpLmZvckVhY2goYW5nbGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsb3RDaXJjbGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgeDogYXJjWCArIDEuNSAqIFJvYm90LnJvYm90QXR0ci5yVyAqIE1hdGguY29zKGFuZ2xlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IGFyY1kgKyAxLjUgKiBSb2JvdC5yb2JvdEF0dHIuclcgKiBNYXRoLnNpbihhbmdsZSksXG4gICAgICAgICAgICAgICAgICAgICAgICBkOiAwXG4gICAgICAgICAgICAgICAgICAgIH0gYXMgUG9pbnQpO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGN1cnJlbnRDb2xvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBsb3RDaXJjbGUocG9pbnQ6IFBvaW50KSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IFwiZ3JlZW5cIjtcbiAgICAgICAgdGhpcy5jb250ZXh0LmFyYyhwb2ludC54LCBwb2ludC55LCAyLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGwoKTtcblxuICAgIH1cblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBQYXRoR2VuZXJhdG9yKCk7XG4iLCJpbXBvcnQgeyBTcGVlZCB9IGZyb20gXCIuL1NwZWVkQ29udHJvbGxlclwiO1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tIFwiLi9PYnN0YWNsZXNcIjtcbmltcG9ydCB7IFNlbnNvciwgU29uYXJTZW5zb3JzIH0gZnJvbSBcIi4vU29uYXJTZW5zb3JzXCI7XG5cblxuZXhwb3J0IGludGVyZmFjZSBQb3NpdGlvbiB7XG4gICAgeDogbnVtYmVyLCAvLyBwb3NpdGlvbiBjb29yZGluYXRlIHhcbiAgICB5OiBudW1iZXIsIC8vIHBvc2l0aW9uIGNvb3JkaW5hdGUgeVxuICAgIHRoOiBudW1iZXIgLy8gdGhldGEgb3JpZW50YXRpb24gb2Ygcm9ib3QgaW4gMiBEaW1lbnRpb25cbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZWx0YVBvc2l0aW9uIHtcbiAgICBkeDogbnVtYmVyLCAvLyBkZWx0YSBjb29yZGluYXRlIHhcbiAgICBkeTogbnVtYmVyLCAvLyBzZWx0YSBjb29yZGluYXRlIHlcbiAgICBkdGg6IG51bWJlciAvLyBkZWx0YSB0aGV0YSBvcmllbnRhdGlvbiBvZiByb2JvdCBpbiAyIERpbWVudGlvblxufVxuXG5leHBvcnQgY2xhc3MgUm9ib3Qge1xuICAgIHByaXZhdGUgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICBwcml2YXRlIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcblxuICAgIHByaXZhdGUgc3RvcCA9IGZhbHNlO1xuICAgIHN0YXRpYyByb2JvdEF0dHIgPSB7XG4gICAgICAgIFdoZWVsUjogNSxcbiAgICAgICAgckg6IDYwLFxuICAgICAgICByVzogMzAsXG4gICAgICAgIHJTTDogMjAsXG4gICAgICAgIHJTVzogM1xuICAgIH07XG5cbiAgICBzdGF0aWMgUlNMQ29zNDUgPSBNYXRoLmNvcyhNYXRoLlBJIC8gNCkgKiBSb2JvdC5yb2JvdEF0dHIuclNMO1xuXG4gICAgZHQgPSAwLjAxO1xuXG4gICAgcG9zaXRpb24gPSB7IHg6IDE1MCwgeTogMTUwLCB0aDowIH0gYXMgUG9zaXRpb247XG4gICAgc3BlZWQgPSB7IHJpZ2h0OiAxMDAsIGxlZnQ6IDEwMCB9IGFzIFNwZWVkO1xuICAgIGRlbHRhID0ge2R4OjAsZHk6MCxkdGg6MH0gYXMgRGVsdGFQb3NpdGlvbjtcbiAgICBzb25hclNlbnNvcnM9bmV3IFNvbmFyU2Vuc29ycygpO1xuXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJykgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB9XG5cbiAgICBwbG90Q2lyY2xlKHBvc2l0aW9uOiBQb3NpdGlvbikge1xuICAgICAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRDb2xvciA9IHRoaXMuY29udGV4dC5maWxsU3R5bGU7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBcIm9yYW5nZVwiO1xuICAgICAgICB0aGlzLmNvbnRleHQuYXJjKHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIDMsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbCgpO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gZGVmYXVsdENvbG9yO1xuICAgIH1cblxuICAgIHBsb3RSb2JvdChwb3NpdGlvbjogUG9zaXRpb24pIHtcbiAgICAgICAgbGV0IHByZXZpb3VzUG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgICAgY29uc3QgbW92ZUFuZFR1cm4gPSAoZDogbnVtYmVyLCB0aDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB4Q29vcmQgPSBwcmV2aW91c1Bvc2l0aW9uLnggKyBkICogTWF0aC5jb3ModGggKTtcbiAgICAgICAgICAgIGNvbnN0IHlDb29yZCA9IHByZXZpb3VzUG9zaXRpb24ueSArIGQgKiBNYXRoLnNpbih0aCk7XG4gICAgICAgICAgICBwcmV2aW91c1Bvc2l0aW9uID0geyB4OiB4Q29vcmQsIHk6IHlDb29yZCwgdGggfTtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5saW5lVG8oeENvb3JkLCB5Q29vcmQpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHNlbnNIb2xkZXIgPSAoYW5nbGU6bnVtYmVyKSA9PiB7XG4gICAgICAgICAgICBtb3ZlQW5kVHVybihSb2JvdC5yb2JvdEF0dHIuclNMICwgcG9zaXRpb24udGggLU1hdGguUEkvNCthbmdsZSk7XG4gICAgICAgICAgICBtb3ZlQW5kVHVybihSb2JvdC5yb2JvdEF0dHIuclNXLCBwb3NpdGlvbi50aCtNYXRoLlBJLzQgK2FuZ2xlKTtcbiAgICAgICAgICAgIG1vdmVBbmRUdXJuKFJvYm90LnJvYm90QXR0ci5yU0wgLCBwb3NpdGlvbi50aCArMypNYXRoLlBJLzQrYW5nbGUpO1xuICAgICAgICB9OyBcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY29udGV4dC5tb3ZlVG8ocHJldmlvdXNQb3NpdGlvbi54ICwgcHJldmlvdXNQb3NpdGlvbi55ICk7XG4gICAgICAgIG1vdmVBbmRUdXJuKFJvYm90LnJvYm90QXR0ci5yVy8yIC0yICwgcG9zaXRpb24udGggKyBNYXRoLlBJLzIgKTtcbiAgICAgICAgc2Vuc0hvbGRlciggTWF0aC5QSS8yICk7XG4gICAgICAgIG1vdmVBbmRUdXJuKFJvYm90LnJvYm90QXR0ci5ySCAsIHBvc2l0aW9uLnRoICsgTWF0aC5QSSApO1xuICAgICAgICBzZW5zSG9sZGVyKE1hdGguUEkgKTtcbiAgICAgICAgbW92ZUFuZFR1cm4oUm9ib3Qucm9ib3RBdHRyLnJXICwgcG9zaXRpb24udGggLU1hdGguUEkvMiApO1xuICAgICAgICBzZW5zSG9sZGVyKC1NYXRoLlBJLzIgKTtcbiAgICAgICAgbW92ZUFuZFR1cm4oUm9ib3Qucm9ib3RBdHRyLnJIICwgcG9zaXRpb24udGggKTtcbiAgICAgICAgc2Vuc0hvbGRlcigwICk7XG4gICAgICAgIG1vdmVBbmRUdXJuKFJvYm90LnJvYm90QXR0ci5yVy8yICwgcG9zaXRpb24udGggKyBNYXRoLlBJLzIgKTtcblxuICAgICAgICBtb3ZlQW5kVHVybigyLCAgcG9zaXRpb24udGggICk7XG4gICAgICAgIG1vdmVBbmRUdXJuKDIsIHBvc2l0aW9uLnRoICsgTWF0aC5QSS8yICk7XG4gICAgICAgIG1vdmVBbmRUdXJuKDIsIHBvc2l0aW9uLnRoKyBNYXRoLlBJICk7XG5cbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbCgpO1xuXG4gICAgfVxuXG4gICAga2VlcFJvYm90SW5XaW5kb3dzKCk6dm9pZCB7XG4gICAgICAgIGlmKHRoaXMucG9zaXRpb24ueCA+PSA5NzApIHtcbiAgICAgICAgICAgIHRoaXMuZGVsdGEuZHggPSAgLXRoaXMuZGVsdGEuZHggO1xuICAgICAgICAgICAgdGhpcy5kZWx0YS5kdGggPSAgLXRoaXMuZGVsdGEuZHRoIDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMucG9zaXRpb24ueSA+PSA5NzAgfHwgdGhpcy5wb3NpdGlvbi55IDw9IDUgKSB7XG4gICAgICAgICAgICB0aGlzLmRlbHRhLmR5ID0gIC10aGlzLmRlbHRhLmR5IDtcbiAgICAgICAgICAgIHRoaXMuZGVsdGEuZHRoID0gIC10aGlzLmRlbHRhLmR0aCA7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHBsb3RSb2JvdDIocG9zaXRpb246IFBvc2l0aW9uKSB7XG4gICAgICAgIGxldCBwcmV2aW91c1Bvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgIGNvbnN0IG1vdmVBbmRUdXJuID0gKGQ6IG51bWJlciwgdGg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgeENvb3JkID0gcHJldmlvdXNQb3NpdGlvbi54ICsgZCAqIE1hdGguY29zKHRoICogTWF0aC5QSSAvIDE4MCk7XG4gICAgICAgICAgICBjb25zdCB5Q29vcmQgPSBwcmV2aW91c1Bvc2l0aW9uLnkgKyBkICogTWF0aC5zaW4odGggKiBNYXRoLlBJIC8gMTgwKTtcbiAgICAgICAgICAgIHByZXZpb3VzUG9zaXRpb24gPSB7IHg6IHhDb29yZCwgeTogeUNvb3JkLCB0aCB9O1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmxpbmVUbyh4Q29vcmQsIHlDb29yZCk7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICB0aGlzLmNvbnRleHQubW92ZVRvKHByZXZpb3VzUG9zaXRpb24ueCAsIHByZXZpb3VzUG9zaXRpb24ueSApO1xuICAgICAgICBtb3ZlQW5kVHVybihSb2JvdC5yb2JvdEF0dHIuckggLCA5MCArIHBvc2l0aW9uLnRoICk7XG4gICAgICAgIG1vdmVBbmRUdXJuKFJvYm90LnJvYm90QXR0ci5yU0wsIC0xODAgLSA0NSsgcG9zaXRpb24udGggKTtcbiAgICAgICAgbW92ZUFuZFR1cm4oUm9ib3Qucm9ib3RBdHRyLnJTVywgLTE4MCAtIDQ1ICsgcG9zaXRpb24udGggKTtcbiAgICAgICAgbW92ZUFuZFR1cm4oUm9ib3Qucm9ib3RBdHRyLnJTTCAtIDIsIC00NSsgcG9zaXRpb24udGggKTtcbiAgICAgICAgbW92ZUFuZFR1cm4oKFJvYm90LnJvYm90QXR0ci5yVyAtIDQpIC8gMiwgIHBvc2l0aW9uLnRoICk7XG4gICAgICAgIG1vdmVBbmRUdXJuKDQsIDkwKyBwb3NpdGlvbi50aCApO1xuICAgICAgICBtb3ZlQW5kVHVybig0LCAwKyBwb3NpdGlvbi50aCApO1xuICAgICAgICBtb3ZlQW5kVHVybig0LCAtOTArIHBvc2l0aW9uLnRoICk7XG4gICAgICAgIG1vdmVBbmRUdXJuKChSb2JvdC5yb2JvdEF0dHIuclcgLSA0KSAvIDIsIDArIHBvc2l0aW9uLnRoICk7XG4gICAgICAgIG1vdmVBbmRUdXJuKFJvYm90LnJvYm90QXR0ci5yU0wsIDQ1KyBwb3NpdGlvbi50aCApO1xuICAgICAgICBtb3ZlQW5kVHVybihSb2JvdC5yb2JvdEF0dHIuclNXLCAtNDUrIHBvc2l0aW9uLnRoICk7XG4gICAgICAgIG1vdmVBbmRUdXJuKFJvYm90LnJvYm90QXR0ci5yU0wgLSAyLCAyMisgcG9zaXRpb24udGggKTtcbiAgICAgICAgbW92ZUFuZFR1cm4oUm9ib3Qucm9ib3RBdHRyLnJILCAtOTArIHBvc2l0aW9uLnRoICk7XG4gICAgICAgIG1vdmVBbmRUdXJuKFJvYm90LnJvYm90QXR0ci5yU0wsIC00NSsgcG9zaXRpb24udGggKTtcbiAgICAgICAgbW92ZUFuZFR1cm4oUm9ib3Qucm9ib3RBdHRyLnJTVywgLTEzNSsgcG9zaXRpb24udGggKTtcbiAgICAgICAgbW92ZUFuZFR1cm4oUm9ib3Qucm9ib3RBdHRyLnJTTCAtIDIsIC0yMjUrIHBvc2l0aW9uLnRoICk7XG4gICAgICAgIG1vdmVBbmRUdXJuKFJvYm90LnJvYm90QXR0ci5yVywgMTgwKyBwb3NpdGlvbi50aCApO1xuICAgICAgICBtb3ZlQW5kVHVybihSb2JvdC5yb2JvdEF0dHIuclNMLCAtOTAgLSA0NSsgcG9zaXRpb24udGggKTtcbiAgICAgICAgbW92ZUFuZFR1cm4oUm9ib3Qucm9ib3RBdHRyLnJTVywgLTE4MCAtIDQ1KyBwb3NpdGlvbi50aCApO1xuICAgICAgICBtb3ZlQW5kVHVybihSb2JvdC5yb2JvdEF0dHIuclNMLCAtMTgwIC0gOTAgLSA0NSsgcG9zaXRpb24udGggKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbCgpO1xuXG4gICAgfVxuXG4gICAgZ2V0UG9zaXRpb24oKTogUG9zaXRpb24ge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbjtcbiAgICB9XG5cbiAgICBzZXRQb3NpdGlvbihwb3NpdGlvbjpQb3NpdGlvbik6IHZvaWQge1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgfVxuXG4gICAgZ2V0U3BlZWQoKTogU3BlZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5zcGVlZDtcbiAgICB9XG5cbiAgICBhbmltYXRlKHNwZWVkOiBTcGVlZCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XG4gICAgICAgIHRoaXMuY2FsY05ld1Bvc2l0aW9uKHNwZWVkKTtcbiAgICAgICAgdGhpcy5wbG90Um9ib3QodGhpcy5wb3NpdGlvbik7XG4gICAgICAgIHRoaXMuc29uYXJTZW5zb3JzLnNob3codGhpcy5wb3NpdGlvbik7XG5cbiAgICB9XG5cbiAgICBjYWxjTmV3UG9zaXRpb24oc3BlZWQ6IFNwZWVkKSB7XG4gICAgICAgIHRoaXMuZGVsdGEgPSB0aGlzLnN0b3A/IHsgZHg6IDAsIGR5OiAwLCBkdGg6IDAgfTogdGhpcy5raW5lbWF0aWMoc3BlZWQubGVmdCwgc3BlZWQucmlnaHQpO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gdGhpcy5kZWx0YS5keDtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ICs9IHRoaXMuZGVsdGEuZHk7XG4gICAgICAgIHRoaXMucG9zaXRpb24udGggKz0gdGhpcy5kZWx0YS5kdGg7XG4gICAgICAgIHRoaXMucG9zaXRpb24udGggJT0gMipNYXRoLlBJO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnRoID0gdGhpcy5wb3NpdGlvbi50aCA+IE1hdGguUEkgPyAoLTIqTWF0aC5QSSArdGhpcy5wb3NpdGlvbi50aCkgOiB0aGlzLnBvc2l0aW9uLnRoO1xuICAgIH1cblxuICAgIGtpbmVtYXRpYyhsZWZ0V2VlbFNwZWVkOiBudW1iZXIsIHJpZ2h0V2hlZWxTcGVlZDogbnVtYmVyKTogeyBkeDogbnVtYmVyLCBkeTogbnVtYmVyLCBkdGg6IG51bWJlciB9IHtcbiAgICAgICAgY29uc3QgbGluZWFyVmVsb2NpdHkgPSAocmlnaHRXaGVlbFNwZWVkICsgbGVmdFdlZWxTcGVlZCkgLyAyO1xuICAgICAgICBjb25zdCBhbmd1bGFyVmVsb2NpdHkgPSBsZWZ0V2VlbFNwZWVkLXJpZ2h0V2hlZWxTcGVlZDtcbiAgICAgICAgY29uc3QgZHRoID1hbmd1bGFyVmVsb2NpdHkgKiB0aGlzLmR0ICoyKiBNYXRoLlBJKiBSb2JvdC5yb2JvdEF0dHIuV2hlZWxSLyBSb2JvdC5yb2JvdEF0dHIuclc7XG4gICAgICAgIC8vIGNvbnN0IHRoZXRhID0gdGhpcy5wb3NpdGlvbi50aCArIGR0aDtcbiAgICAgICAgY29uc3QgZHggPWxpbmVhclZlbG9jaXR5ICogTWF0aC5jb3ModGhpcy5wb3NpdGlvbi50aCkgKiB0aGlzLmR0ICogUm9ib3Qucm9ib3RBdHRyLldoZWVsUi8yO1xuICAgICAgICBjb25zdCBkeSA9bGluZWFyVmVsb2NpdHkgKiBNYXRoLnNpbih0aGlzLnBvc2l0aW9uLnRoKSAqIHRoaXMuZHQgKiBSb2JvdC5yb2JvdEF0dHIuV2hlZWxSLzI7XG5cbiAgICAgICAgcmV0dXJuIHsgZHgsIGR5LCBkdGggfTtcbiAgICB9XG5cbiAgICBnZXRTZW5zb3JzKCk6QXJyYXk8U2Vuc29yPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNvbmFyU2Vuc29ycy5jYWxjU2Vuc29yc1Bvc2l0aW9ucyh0aGlzLmdldFBvc2l0aW9uKCkpO1xuICAgIH1cblxuICAgIHNldFgoeDpudW1iZXIpIDp2b2lkIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0geDtcbiAgICB9XG5cbiAgICBzZXRZKHk6bnVtYmVyKSA6dm9pZCB7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueSA9IHk7XG4gICAgfVxuXG4gICAgc2V0VGgodGg6bnVtYmVyKSA6dm9pZCB7XG4gICAgICAgIHRoaXMucG9zaXRpb24udGggPSB0aDtcbiAgICB9XG5cbiAgICB0b2dnbGVTdG9wKCl7XG4gICAgICAgIHRoaXMuc3RvcCA9ICF0aGlzLnN0b3A7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgUm9ib3QoKTtcbiIsImltcG9ydCB7IFBvaW50LCBQb2ludE1pbmltdW0gfSBmcm9tIFwiLi9PYnN0YWNsZXNcIjtcbmltcG9ydCB7IFBvc2l0aW9uLCBSb2JvdCB9IGZyb20gXCIuL1JvYm90XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2Vuc29yIGV4dGVuZHMgUG9pbnQge1xuICAgIHNpZGU6IHN0cmluZyxcbiAgICBkYzogbnVtYmVyIC8vIGRpc3RhbmNlIGZyb20gY2VudGVyXG59XG5cblxuXG5leHBvcnQgZW51bSBTaWRlcyB7XG4gICAgZnJvbnRMZWZ0ID0gXCJmcm9udExlZnRcIixcbiAgICBmcm9udFJpZ2h0ID0gXCJmcm9udFJpZ2h0XCIsXG4gICAgYmFja0xlZnQgPSBcImJhY2tMZWZ0XCIsXG4gICAgYmFja1JpZ2h0ID0gXCJiYWNrUmlnaHRcIixcbiAgICBtaWRkbGUgPSBcIm1pZGRsZVwiLFxuICAgIGNlbnRlciA9IFwiY2VudGVyXCJcbn1cblxuZXhwb3J0IGNsYXNzIFNvbmFyU2Vuc29ycyB7XG4gICAgcHJpdmF0ZSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICAgIHByaXZhdGUgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xuICAgICAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgfVxuXG4gICAgY2FsRGlzdChwb2ludDE6IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfSwgcG9pbnQyOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH0pIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhwb2ludDEueCAtIHBvaW50Mi54LCAyKSArIE1hdGgucG93KHBvaW50MS55IC0gcG9pbnQyLnksIDIpKTtcbiAgICB9XG5cbiAgICBjYWxBbmdsZShwb2ludDE6IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfSwgcG9pbnQyOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH0pIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYXRhbigocG9pbnQyLnkgLSBwb2ludDEueSkvKHBvaW50Mi54IC0gcG9pbnQxLngpKTtcbiAgICB9XG5cbiAgICBjYWxjU2Vuc29yc1Bvc2l0aW9ucyhyb2JvdFBvc2l0aW9uOiBQb3NpdGlvbik6IEFycmF5PFNlbnNvcj4ge1xuICAgICAgICByZXR1cm4gW1NpZGVzLmZyb250TGVmdCwgU2lkZXMuZnJvbnRSaWdodCwgU2lkZXMuYmFja0xlZnQsIFNpZGVzLmJhY2tSaWdodCwgU2lkZXMubWlkZGxlLCBTaWRlcy5jZW50ZXJdXG4gICAgICAgICAgICAubWFwKHNlbnNvclNpZGUgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzZW5zb3JTaWRlID09PSBTaWRlcy5jZW50ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IHJvYm90UG9zaXRpb24ueCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IHJvYm90UG9zaXRpb24ueSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZGU6IHNlbnNvclNpZGUsXG4gICAgICAgICAgICAgICAgICAgIH0gYXMgU2Vuc29yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc2Vuc29yU2lkZSA9PT0gU2lkZXMubWlkZGxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiByb2JvdFBvc2l0aW9uLngsXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiByb2JvdFBvc2l0aW9uLnkgKyBSb2JvdC5yb2JvdEF0dHIuckggLyAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2lkZTogc2Vuc29yU2lkZVxuICAgICAgICAgICAgICAgICAgICB9IGFzIFNlbnNvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHNlbnNvclNpZGUgPT09IFNpZGVzLmZyb250TGVmdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgeDogcm9ib3RQb3NpdGlvbi54IC0gUm9ib3QuUlNMQ29zNDUgLSBSb2JvdC5yb2JvdEF0dHIuclcgLyAyIC0gMyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IHJvYm90UG9zaXRpb24ueSAtIFJvYm90LlJTTENvczQ1LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2lkZTogc2Vuc29yU2lkZVxuICAgICAgICAgICAgICAgICAgICB9IGFzIFNlbnNvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHNlbnNvclNpZGUgPT09IFNpZGVzLmZyb250UmlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IHJvYm90UG9zaXRpb24ueCArIFJvYm90LlJTTENvczQ1ICsgUm9ib3Qucm9ib3RBdHRyLnJXIC8gMixcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IHJvYm90UG9zaXRpb24ueSAtIFJvYm90LlJTTENvczQ1ICsgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZGU6IHNlbnNvclNpZGVcbiAgICAgICAgICAgICAgICAgICAgfSBhcyBTZW5zb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzZW5zb3JTaWRlID09PSBTaWRlcy5iYWNrTGVmdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgeDogcm9ib3RQb3NpdGlvbi54IC0gUm9ib3QuUlNMQ29zNDUgLSBSb2JvdC5yb2JvdEF0dHIuclcgLyAyIC0gNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IHJvYm90UG9zaXRpb24ueSAtIFJvYm90LlJTTENvczQ1ICsgUm9ib3Qucm9ib3RBdHRyLnJIICsgUm9ib3Qucm9ib3RBdHRyLnJXLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2lkZTogc2Vuc29yU2lkZVxuICAgICAgICAgICAgICAgICAgICB9IGFzIFNlbnNvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHNlbnNvclNpZGUgPT09IFNpZGVzLmJhY2tSaWdodCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgeDogcm9ib3RQb3NpdGlvbi54ICsgUm9ib3QuUlNMQ29zNDUgKyBSb2JvdC5yb2JvdEF0dHIuclcgLSBSb2JvdC5yb2JvdEF0dHIuclcgLyAyIC0gMixcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IHJvYm90UG9zaXRpb24ueSArIFJvYm90LlJTTENvczQ1ICsgUm9ib3Qucm9ib3RBdHRyLnJIICsgMyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZGU6IHNlbnNvclNpZGVcbiAgICAgICAgICAgICAgICAgICAgfSBhcyBTZW5zb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICApLm1hcChzZW5zID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZW5zQ2FsYyA9IHNlbnM7XG4gICAgICAgICAgICAgICAgc2Vuc0NhbGMuZGMgPSB0aGlzLmNhbERpc3Qocm9ib3RQb3NpdGlvbiwgc2Vuc0NhbGMpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFuZ2xlID0gdGhpcy5jYWxBbmdsZShyb2JvdFBvc2l0aW9uLCBzZW5zQ2FsYykgK1xuICAgICAgICAgICAgICAgIChzZW5zLnNpZGUgPT09IFNpZGVzLmZyb250TGVmdCB8fCBzZW5zLnNpZGUgPT09IFNpZGVzLmJhY2tMZWZ0ID8gTWF0aC5QSSA6IDApICtcbiAgICAgICAgICAgICAgICByb2JvdFBvc2l0aW9uLnRoICArIE1hdGguUEkvMiA7XG4gICAgICAgICAgICAgICAgc2Vuc0NhbGMueCA9IHJvYm90UG9zaXRpb24ueCArIHNlbnNDYWxjLmRjICogTWF0aC5jb3MoYW5nbGUgKTtcbiAgICAgICAgICAgICAgICBzZW5zQ2FsYy55ID0gcm9ib3RQb3NpdGlvbi55ICsgc2Vuc0NhbGMuZGMgKiBNYXRoLnNpbihhbmdsZSApO1xuICAgICAgICAgICAgICAgIHJldHVybiBzZW5zQ2FsYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgc2hvdyhyb2JvdFBvc2l0aW9uOiBQb3NpdGlvbikge1xuICAgICAgICBjb25zdCBjdXJyZW50Q29sb3IgPSB0aGlzLmNvbnRleHQuZmlsbFN0eWxlO1xuICAgICAgICBjb25zdCBzZW5zb3JzID0gdGhpcy5jYWxjU2Vuc29yc1Bvc2l0aW9ucyhyb2JvdFBvc2l0aW9uKTtcblxuICAgICAgICBzZW5zb3JzLmZvckVhY2goc2Vuc29yID0+IHtcbiAgICAgICAgICAgIHRoaXMucGxvdENpcmNsZSh7IHg6IHNlbnNvci54LCB5OiBzZW5zb3IueSwgdGg6IHJvYm90UG9zaXRpb24udGggfSk7XG4gICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cblxuICAgIHBsb3RDaXJjbGUocG9pc3Rpb246IFBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgLy8gdGhpcy5jb250ZXh0LnJvdGF0ZShwb2lzdGlvbi50aCpNYXRoLlBJLzE4MCk7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRDb2xvciA9IHRoaXMuY29udGV4dC5maWxsU3R5bGU7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBcIm9yYW5nZVwiO1xuICAgICAgICB0aGlzLmNvbnRleHQuYXJjKHBvaXN0aW9uLngsIHBvaXN0aW9uLnksIDMsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbCgpO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gZGVmYXVsdENvbG9yO1xuICAgIH1cblxuXG59XG4iLCJpbXBvcnQgeyBQb2ludCwgU2Vuc29yRGlzdGFuY2UgfSBmcm9tIFwiLi9PYnN0YWNsZXNcIjtcbmltcG9ydCB7IFBvc2l0aW9uLCBSb2JvdCB9IGZyb20gXCIuL1JvYm90XCI7XG5pbXBvcnQgeyAgU2lkZXMgfSBmcm9tIFwiLi9Tb25hclNlbnNvcnNcIjtcbmltcG9ydCBjb250cm9sbGVyMSBmcm9tIFwiLi9TcGVlZENvbnRyb2xsZXIxXCI7XG5pbXBvcnQgY29udHJvbGxlcjIgZnJvbSBcIi4vU3BlZWRDb250cm9sbGVyMlwiO1xuaW1wb3J0IGNvbnRyb2xsZXIzIGZyb20gXCIuL1NwZWVkQ29udHJvbGxlcjNcIjtcbmltcG9ydCBjb250cm9sbGVyNCBmcm9tIFwiLi9TcGVlZENvbnRyb2xsZXI0XCI7XG5pbXBvcnQgeyBBbGdvcml0aG1Ub1J1biB9IGZyb20gXCIuL1dvcmxkXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3BlZWQge1xuICAgIHJpZ2h0OiBudW1iZXIsXG4gICAgbGVmdDogbnVtYmVyXG59XG5cbmV4cG9ydCBjbGFzcyBTcGVlZENvbnRyb2xsZXIge1xuICAgIHN0YXRpYyBNYXhTcGVlZCA9IDcwMDtcbiAgICBzdGF0aWMgTWF4RGlzdGFuY2UgPSA4MDtcbiAgICBpdGVyYXRpb24gPSAwO1xuXG4gICAgbGFzdERpc3RhbmNlVG9PYnN0YWNsZXM6IFNlbnNvckRpc3RhbmNlW107XG4gICBcbiAgICBjYWxjV2hlZWxzU3BlZWQoc2Vuc29yT2JzdERpc3RhbmNlczogU2Vuc29yRGlzdGFuY2VbXSwgY3VycmVudFNwZWVkOiBTcGVlZCwgcm9ib3RQb3NpdGlvbjogUG9zaXRpb24sYWxnb3JpdGhtOkFsZ29yaXRobVRvUnVuKTogU3BlZWQge1xuICAgICAgICBzd2l0Y2ggKGFsZ29yaXRobSl7XG4gICAgICAgICAgICAgY2FzZSBBbGdvcml0aG1Ub1J1bi5hdm9pZE9ic3RhY2xlc1RhcmdldDogIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udHJvbGxlcjEuY2FsY1doZWVsc1NwZWVkKHNlbnNvck9ic3REaXN0YW5jZXMsY3VycmVudFNwZWVkLHJvYm90UG9zaXRpb24pO1xuXG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgIGNhc2UgQWxnb3JpdGhtVG9SdW4uZ29Ub1RhcmdldEJ5UGF0aDogIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udHJvbGxlcjQuY2FsY1doZWVsc1NwZWVkKHNlbnNvck9ic3REaXN0YW5jZXMsY3VycmVudFNwZWVkLHJvYm90UG9zaXRpb24pO1xuXG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgIGRlZmF1bHQ6e1xuICAgICAgICAgICAgICAgIHJldHVybiBjb250cm9sbGVyMy5jYWxjV2hlZWxzU3BlZWQoc2Vuc29yT2JzdERpc3RhbmNlcyxjdXJyZW50U3BlZWQscm9ib3RQb3NpdGlvbik7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICB9XG4gICAgd3JhcDJQaShhbmc6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBhbmcgPiBNYXRoLlBJID8gKC0yICogTWF0aC5QSSArIGFuZykgOiBhbmc7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgU2Vuc29yRGlzdGFuY2UgfSBmcm9tIFwiLi9PYnN0YWNsZXNcIjtcbmltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSBcIi4vUm9ib3RcIjtcbmltcG9ydCB7IFNpZGVzIH0gZnJvbSBcIi4vU29uYXJTZW5zb3JzXCI7XG5pbXBvcnQgeyBTcGVlZCwgU3BlZWRDb250cm9sbGVyIH0gZnJvbSBcIi4vU3BlZWRDb250cm9sbGVyXCI7XG5pbXBvcnQgU3BlZWRDb250cm9sbGVySWYgZnJvbSBcIi4vU3BlZWRDb250cm9sbGVySWZcIjtcbmltcG9ydCB0YXJnZXQgZnJvbSBcIi4vVGFyZ2V0XCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgbmV3IChjbGFzcyBTcGVlZENvbnRyb2xsZXIxIGltcGxlbWVudHMgU3BlZWRDb250cm9sbGVySWYge1xuXG4gICAgc3RhdGljIE1heFNwZWVkID0gNzAwO1xuICAgIHN0YXRpYyBNYXhEaXN0YW5jZSA9IDgwO1xuXG4gICAgaXRlcmF0aW9uID0gMDtcbiAgICBsYXN0RGlzdGFuY2VUb09ic3RhY2xlczogU2Vuc29yRGlzdGFuY2VbXTtcblxuXG4gICAgY2FsY1doZWVsc1NwZWVkKHNlbnNvck9ic3REaXN0YW5jZXM6IFNlbnNvckRpc3RhbmNlW10sIGN1cnJlbnRTcGVlZDogU3BlZWQsIHJvYm90UG9zaXRpb246IFBvc2l0aW9uKTogU3BlZWQge1xuICAgICAgICB0aGlzLml0ZXJhdGlvbiArPSAxO1xuICAgICAgICBjb25zdCBhdm9pZE9ic3RhY2xlQ29tbWFuZCA9IHRoaXMuYXZvaWRPYnN0YWNsZShzZW5zb3JPYnN0RGlzdGFuY2VzLCBjdXJyZW50U3BlZWQpO1xuICAgICAgICBjb25zdCBnb1RvVGFyZ2V0Q29tbWFuZCA9IHRoaXMuZ29Ub1RhcmdldChyb2JvdFBvc2l0aW9uKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGVmdDogYXZvaWRPYnN0YWNsZUNvbW1hbmQubGVmdCAqIDAuNSArIGdvVG9UYXJnZXRDb21tYW5kLmxlZnQgKiAwLjUsXG4gICAgICAgICAgICByaWdodDogYXZvaWRPYnN0YWNsZUNvbW1hbmQucmlnaHQgKiAwLjUgKyBnb1RvVGFyZ2V0Q29tbWFuZC5yaWdodCAqIDAuNVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNhbGNSZXB1bHNlRXhwbyhvYnN0YWNsZURpc3Q6IG51bWJlciwgZmFjdG9yID0gMC4wMSk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBvYnN0YWNsZURpc3QgPCBTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2VcbiAgICAgICAgICAgID8gMSAtIE1hdGguZXhwKGZhY3RvciAqIE1hdGguc3FydChNYXRoLnBvdyhvYnN0YWNsZURpc3QgLSBTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2UsIDIpIC8gU3BlZWRDb250cm9sbGVyLk1heERpc3RhbmNlKSlcbiAgICAgICAgICAgIDogMDtcbiAgICB9XG5cbiAgICBjYWxjQ29tYmluZWRSZXB1bHNlKG9ic3RhY2xlRGlzdDogbnVtYmVyLCBmYWN0b3IgPSAwLjAxKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIG9ic3RhY2xlRGlzdCA8IFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZVxuICAgICAgICAgICAgPyAoMC40ICogKDEgLSAxIC8gKDEgKyBNYXRoLmV4cCgtMC4wMDEgKiAob2JzdGFjbGVEaXN0IC0gU3BlZWRDb250cm9sbGVyLk1heERpc3RhbmNlKSAvIFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZSkpKSArXG4gICAgICAgICAgICAgICAgMC42ICogKDEgLSBNYXRoLmV4cChmYWN0b3IgKiBNYXRoLnNxcnQoTWF0aC5wb3cob2JzdGFjbGVEaXN0IC0gU3BlZWRDb250cm9sbGVyLk1heERpc3RhbmNlLCAyKSAvIFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZSkpKSkgKiAwLjVcbiAgICAgICAgICAgIDogMDtcbiAgICB9XG5cblxuICAgIGF2b2lkT2JzdGFjbGUoc2Vuc29yT2JzdERpc3RhbmNlczogU2Vuc29yRGlzdGFuY2VbXSwgY3VycmVudFNwZWVkOiBTcGVlZCk6IFNwZWVkIHtcbiAgICAgICAgY29uc3QgeyBmcm9udFJpZ2h0RGlzdCwgZnJvbnRMZWZ0RGlzdCwgYmFja1JpZ2h0RGlzdCwgYmFja0xlZnREaXN0IH0gPSB0aGlzLmNhbGNPYnN0YWNsZURpc3RhbmNlcyhzZW5zb3JPYnN0RGlzdGFuY2VzKTtcblxuICAgICAgICBsZXQgY2FsY1NwZWVkOiBTcGVlZCA9IHsgbGVmdDogU3BlZWRDb250cm9sbGVyLk1heFNwZWVkIC8gMiwgcmlnaHQ6IFNwZWVkQ29udHJvbGxlci5NYXhTcGVlZCAvIDIgfTtcbiAgICAgXG4gICAgICAgIGNvbnN0IHsgb2JzdElzT25Gcm9udCwgZnJvbnRSaWdodFR1cm4sIGJhY2tSaWdodFR1cm4sIG9ic3RJc09uUmlnaHQsIG9ic3RJc09uQmFja1JpZ2h0LCBmcm9udExlZnRUdXJuLCBiYWNrTGVmdFR1cm4sIG9ic3RJc09uTGVmdCwgb2JzdElzT25CYWNrTGVmdCB9ID0gXG4gICAgICAgIHRoaXMuZ2V0T2JzdGFjbGVEaXJlY3Rpb24oZnJvbnRSaWdodERpc3QsIGZyb250TGVmdERpc3QsIGJhY2tSaWdodERpc3QsIGJhY2tMZWZ0RGlzdCk7XG5cbiAgICAgICAgbGV0IHdoZWVsRmFjdG9ycyA9IHRoaXMuY2FsY1doZWVsc0ZhY3RvcnMoZnJvbnRSaWdodFR1cm4sIGJhY2tSaWdodFR1cm4sIG9ic3RJc09uUmlnaHQsIG9ic3RJc09uQmFja1JpZ2h0LCBvYnN0SXNPbkZyb250LCBmcm9udExlZnRUdXJuLCBiYWNrTGVmdFR1cm4sIG9ic3RJc09uTGVmdCwgb2JzdElzT25CYWNrTGVmdCk7XG5cblxuICAgICAgICBjYWxjU3BlZWQubGVmdCAgKz0gU3BlZWRDb250cm9sbGVyLk1heFNwZWVkICogMC41ICogd2hlZWxGYWN0b3JzLmFscGhhO1xuICAgICAgICBjYWxjU3BlZWQucmlnaHQgKz0gU3BlZWRDb250cm9sbGVyLk1heFNwZWVkICogMC41ICogd2hlZWxGYWN0b3JzLmJldGE7XG4gICAgICAgIHRoaXMubGFzdERpc3RhbmNlVG9PYnN0YWNsZXMgPSBzZW5zb3JPYnN0RGlzdGFuY2VzO1xuXG4gICAgICAgIHJldHVybiBjYWxjU3BlZWQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjYWxjV2hlZWxzRmFjdG9ycyhmcm9udFJpZ2h0VHVybjogbnVtYmVyLCBiYWNrUmlnaHRUdXJuOiBudW1iZXIsIG9ic3RJc09uUmlnaHQ6IG51bWJlciwgb2JzdElzT25CYWNrUmlnaHQ6IG51bWJlciwgb2JzdElzT25Gcm9udDogbnVtYmVyLCBmcm9udExlZnRUdXJuOiBudW1iZXIsIGJhY2tMZWZ0VHVybjogbnVtYmVyLCBvYnN0SXNPbkxlZnQ6IG51bWJlciwgb2JzdElzT25CYWNrTGVmdDogbnVtYmVyKSB7XG4gICAgICAgIGxldCBhbHBoYSA9IChmcm9udFJpZ2h0VHVybiAtIGJhY2tSaWdodFR1cm4pICogb2JzdElzT25SaWdodCArIG9ic3RJc09uQmFja1JpZ2h0ICogYmFja1JpZ2h0VHVybiArIG9ic3RJc09uRnJvbnQgKiAoZnJvbnRSaWdodFR1cm4gKyBmcm9udExlZnRUdXJuKSAqIDAuNTtcbiAgICAgICAgbGV0IGJldGEgPSAoZnJvbnRMZWZ0VHVybiAtIGJhY2tMZWZ0VHVybikgKiBvYnN0SXNPbkxlZnQgKyBvYnN0SXNPbkJhY2tMZWZ0ICogYmFja0xlZnRUdXJuO1xuICAgICAgICByZXR1cm4geyBhbHBoYSwgYmV0YSB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgY2FsY09ic3RhY2xlRGlzdGFuY2VzKHNlbnNvck9ic3REaXN0YW5jZXM6IFNlbnNvckRpc3RhbmNlW10pIHtcbiAgICAgICAgY29uc3QgZnJvbnRMZWZ0RGlzdCA9IHNlbnNvck9ic3REaXN0YW5jZXMuZmluZChzZW5zID0+IHNlbnMuc2lkZSA9PT0gU2lkZXMuZnJvbnRMZWZ0KS5kO1xuICAgICAgICBjb25zdCBmcm9udFJpZ2h0RGlzdCA9IHNlbnNvck9ic3REaXN0YW5jZXMuZmluZChzZW5zID0+IHNlbnMuc2lkZSA9PT0gU2lkZXMuZnJvbnRSaWdodCkuZDtcbiAgICAgICAgY29uc3QgYmFja0xlZnREaXN0ID0gc2Vuc29yT2JzdERpc3RhbmNlcy5maW5kKHNlbnMgPT4gc2Vucy5zaWRlID09PSBTaWRlcy5iYWNrTGVmdCkuZDtcbiAgICAgICAgY29uc3QgYmFja1JpZ2h0RGlzdCA9IHNlbnNvck9ic3REaXN0YW5jZXMuZmluZChzZW5zID0+IHNlbnMuc2lkZSA9PT0gU2lkZXMuYmFja1JpZ2h0KS5kO1xuICAgICAgICByZXR1cm4geyBmcm9udFJpZ2h0RGlzdCwgZnJvbnRMZWZ0RGlzdCwgYmFja1JpZ2h0RGlzdCwgYmFja0xlZnREaXN0IH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRPYnN0YWNsZURpcmVjdGlvbihmcm9udFJpZ2h0RGlzdDogbnVtYmVyLCBmcm9udExlZnREaXN0OiBudW1iZXIsIGJhY2tSaWdodERpc3Q6IG51bWJlciwgYmFja0xlZnREaXN0OiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgZnJvbnRSaWdodFR1cm4gPSB0aGlzLmNhbGNDb21iaW5lZFJlcHVsc2UoZnJvbnRSaWdodERpc3QpO1xuICAgICAgICBjb25zdCBmcm9udExlZnRUdXJuID0gdGhpcy5jYWxjQ29tYmluZWRSZXB1bHNlKGZyb250TGVmdERpc3QpO1xuICAgICAgICBjb25zdCBiYWNrUmlnaHRUdXJuID0gdGhpcy5jYWxjQ29tYmluZWRSZXB1bHNlKGJhY2tSaWdodERpc3QpO1xuICAgICAgICBjb25zdCBiYWNrTGVmdFR1cm4gPSB0aGlzLmNhbGNDb21iaW5lZFJlcHVsc2UoYmFja0xlZnREaXN0KTtcblxuICAgICAgICBjb25zdCBvYnN0SXNPbkZyb250ID0gZnJvbnRSaWdodERpc3QgPCBTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2VcbiAgICAgICAgICAgICYmIGZyb250TGVmdERpc3QgPCBTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2VcbiAgICAgICAgICAgID8gMVxuICAgICAgICAgICAgOiAwO1xuICAgICAgICBjb25zdCBvYnN0SXNPbkJhY2sgPSBiYWNrUmlnaHREaXN0IDwgU3BlZWRDb250cm9sbGVyLk1heERpc3RhbmNlXG4gICAgICAgICAgICAmJiBiYWNrTGVmdERpc3QgPCBTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2VcbiAgICAgICAgICAgID8gMVxuICAgICAgICAgICAgOiAwO1xuICAgICAgICBjb25zdCBvYnN0SXNPblJpZ2h0ID0gZnJvbnRSaWdodERpc3QgPCBTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2UgJiZcbiAgICAgICAgICAgIGZyb250TGVmdERpc3QgPiBTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2UgfHxcbiAgICAgICAgICAgIGJhY2tSaWdodERpc3QgPCBTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2VcbiAgICAgICAgICAgICYmIGJhY2tMZWZ0RGlzdCA+IFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZVxuICAgICAgICAgICAgPyAxXG4gICAgICAgICAgICA6IDA7XG5cbiAgICAgICAgY29uc3Qgb2JzdElzT25CYWNrUmlnaHQgPSBiYWNrUmlnaHREaXN0IDwgU3BlZWRDb250cm9sbGVyLk1heERpc3RhbmNlICYmXG4gICAgICAgICAgICBmcm9udExlZnREaXN0ID4gU3BlZWRDb250cm9sbGVyLk1heERpc3RhbmNlICYmXG4gICAgICAgICAgICBiYWNrUmlnaHREaXN0ID4gU3BlZWRDb250cm9sbGVyLk1heERpc3RhbmNlICYmXG4gICAgICAgICAgICBiYWNrTGVmdERpc3QgPiBTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2VcbiAgICAgICAgICAgID8gMi45XG4gICAgICAgICAgICA6IDA7XG5cbiAgICAgICAgY29uc3Qgb2JzdElzT25CYWNrTGVmdCA9IGJhY2tMZWZ0RGlzdCA8IFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZSAmJlxuICAgICAgICAgICAgYmFja1JpZ2h0RGlzdCA+IFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZSAmJlxuICAgICAgICAgICAgZnJvbnRMZWZ0RGlzdCA+IFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZSAmJlxuICAgICAgICAgICAgZnJvbnRMZWZ0RGlzdCA+IFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZVxuICAgICAgICAgICAgPyAyLjlcbiAgICAgICAgICAgIDogMDtcblxuICAgICAgICBjb25zdCBvYnN0SXNPbkxlZnQgPSBmcm9udExlZnREaXN0IDwgU3BlZWRDb250cm9sbGVyLk1heERpc3RhbmNlICYmXG4gICAgICAgICAgICBmcm9udFJpZ2h0RGlzdCA+IFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZSB8fFxuICAgICAgICAgICAgYmFja0xlZnREaXN0IDwgU3BlZWRDb250cm9sbGVyLk1heERpc3RhbmNlICYmXG4gICAgICAgICAgICBiYWNrUmlnaHREaXN0ID4gU3BlZWRDb250cm9sbGVyLk1heERpc3RhbmNlXG4gICAgICAgICAgICA/IDFcbiAgICAgICAgICAgIDogMDtcbiAgICAgICAgcmV0dXJuIHsgb2JzdElzT25Gcm9udCwgZnJvbnRSaWdodFR1cm4sIGJhY2tSaWdodFR1cm4sIG9ic3RJc09uUmlnaHQsIG9ic3RJc09uQmFja1JpZ2h0LCBmcm9udExlZnRUdXJuLCBiYWNrTGVmdFR1cm4sIG9ic3RJc09uTGVmdCwgb2JzdElzT25CYWNrTGVmdCB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0T2JzdGFjbGVDb2RlKGZyb250TGVmdERpc3Q6IG51bWJlciwgZnJvbnRSaWdodERpc3Q6IG51bWJlciwgYmFja0xlZnREaXN0OiBudW1iZXIsIGJhY2tSaWdodERpc3Q6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gKChmcm9udExlZnREaXN0IDwgU3BlZWRDb250cm9sbGVyLk1heERpc3RhbmNlID8gMSA6IDApIDw8IDMpIHxcbiAgICAgICAgICAgICgoZnJvbnRSaWdodERpc3QgPCBTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2UgPyAxIDogMCkgPDwgMikgfFxuICAgICAgICAgICAgKChiYWNrTGVmdERpc3QgPCBTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2UgPyAxIDogMCkgPDwgMSkgfFxuICAgICAgICAgICAgKChiYWNrUmlnaHREaXN0IDwgU3BlZWRDb250cm9sbGVyLk1heERpc3RhbmNlID8gMSA6IDApKTtcbiAgICB9XG5cbiAgICBjYWxEaXN0MlRhcmdldCh0YXJnZXRQb3NpdGlvbjogUG9zaXRpb24sIHJvYm90UG9zaXRpb246IFBvc2l0aW9uKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyh0YXJnZXRQb3NpdGlvbi54IC0gcm9ib3RQb3NpdGlvbi54LCAyKSArIE1hdGgucG93KHRhcmdldFBvc2l0aW9uLnkgLSByb2JvdFBvc2l0aW9uLnksIDIpKTtcbiAgICB9XG5cbiAgICBnb1RvVGFyZ2V0KHJvYm90UG9zaXRpb246IFBvc2l0aW9uKTogU3BlZWQge1xuICAgICAgICBjb25zdCB0YXJnZXRQb3NpdGlvbiA9IHRhcmdldC5nZXRQb3NpdGlvbigpO1xuICAgICAgICBjb25zdCB0YXJnZXREaXN0YW5jZSA9IHRoaXMuY2FsRGlzdDJUYXJnZXQodGFyZ2V0UG9zaXRpb24sIHJvYm90UG9zaXRpb24pO1xuXG4gICAgICAgIGNvbnN0IGxpbmVhclNwZWVkID0gdGFyZ2V0RGlzdGFuY2UgPCAxLjMgKiBTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2UgPyB0YXJnZXREaXN0YW5jZSAqIChNYXRoLmV4cCgtMC4wMSAqIHRhcmdldERpc3RhbmNlIC8gU3BlZWRDb250cm9sbGVyLk1heERpc3RhbmNlKSkgOiAwO1xuICAgICAgICBjb25zdCBhbmd1bGFyU3BlZWQgPSBNYXRoLmF0YW4yKCh0YXJnZXRQb3NpdGlvbi55IC0gcm9ib3RQb3NpdGlvbi55KSwgKHRhcmdldFBvc2l0aW9uLnggLSByb2JvdFBvc2l0aW9uLngpKSAtIHJvYm90UG9zaXRpb24udGg7XG5cbiAgICAgICAgcmV0dXJuIHsgcmlnaHQ6IGxpbmVhclNwZWVkICogTWF0aC5jb3MoYW5ndWxhclNwZWVkKSwgbGVmdDogbGluZWFyU3BlZWQgKiBNYXRoLnNpbihhbmd1bGFyU3BlZWQpIH07XG4gICAgfVxuXG5cblxufSk7IiwiaW1wb3J0IHsgUm9ib3RPYnN0YWNsZURpc3RhbmNlcywgU2Vuc29yRGlzdGFuY2UgfSBmcm9tIFwiLi9PYnN0YWNsZXNcIjtcbmltcG9ydCB7IFBvc2l0aW9uLCBSb2JvdCB9IGZyb20gXCIuL1JvYm90XCI7XG5pbXBvcnQgeyBTaWRlcyB9IGZyb20gXCIuL1NvbmFyU2Vuc29yc1wiO1xuaW1wb3J0IHsgU3BlZWQsIFNwZWVkQ29udHJvbGxlciB9IGZyb20gXCIuL1NwZWVkQ29udHJvbGxlclwiO1xuaW1wb3J0IFNwZWVkQ29udHJvbGxlcklmIGZyb20gXCIuL1NwZWVkQ29udHJvbGxlcklmXCI7XG5pbXBvcnQgVGFyZ2V0IGZyb20gXCIuL1RhcmdldFwiO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgbmV3IChjbGFzcyBTcGVlZENvbnRyb2xsZXIzIGltcGxlbWVudHMgU3BlZWRDb250cm9sbGVySWYge1xuXG4gICAgc3RhdGljIE1heFNwZWVkID0gNzAwO1xuICAgIHN0YXRpYyBNYXhEaXN0YW5jZSA9IDgwO1xuICAgIHN0YXRpYyBEaXN0YW5jZUZyb21UYXJnZXRHb2FsID0gMjA7XG5cbiAgICBpdGVyYXRpb24gPSAwO1xuICAgIGxhc3REaXN0YW5jZVRvT2JzdGFjbGVzOiBTZW5zb3JEaXN0YW5jZVtdO1xuXG5cbiAgICB3cmFwMlBpKGFuZzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIGFuZyA+IE1hdGguUEkgPyAoLTIgKiBNYXRoLlBJICsgYW5nKSA6IGFuZztcbiAgICB9XG5cbiAgICBjYWxEaXN0MlRhcmdldCh0YXJnZXRQb3NpdGlvbjogUG9zaXRpb24sIHJvYm90UG9zaXRpb246IFBvc2l0aW9uKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyh0YXJnZXRQb3NpdGlvbi54IC0gcm9ib3RQb3NpdGlvbi54LCAyKSArIE1hdGgucG93KHRhcmdldFBvc2l0aW9uLnkgLSByb2JvdFBvc2l0aW9uLnksIDIpKTtcbiAgICB9XG5cbiAgICBjYWxjV2hlZWxzU3BlZWQoc2Vuc29yT2JzdERpc3RhbmNlczogU2Vuc29yRGlzdGFuY2VbXSwgY3VycmVudFNwZWVkOiBTcGVlZCwgcm9ib3RQb3NpdGlvbjogUG9zaXRpb24pOiBTcGVlZCB7XG4gICAgLy8gICAgQ29udHJvbCB0byByZWZlcmVuY2UgcG9zZSB1c2luZyBhbiBpbnRlcm1lZGlhdGUgZGlyZWN0aW9uOlxuICAgICAgICBjb25zdCB0YXJnZXRQb3NpdGlvbiA9IFRhcmdldC5nZXRQb3NpdGlvbigpO1xuXG4gICAgICAgIGNvbnN0IHBoaVIgPSBNYXRoLmF0YW4yKCh0YXJnZXRQb3NpdGlvbi55IC0gcm9ib3RQb3NpdGlvbi55KSwgKHRhcmdldFBvc2l0aW9uLnggLSByb2JvdFBvc2l0aW9uLngpKTtcbiAgICAgICAgY29uc3QgYWxwaGEgPSB0aGlzLndyYXAyUGkocGhpUi1NYXRoLlBJKTtcblxuICAgICAgICBjb25zdCBiZXRhID0gKGFscGhhIDwgMCA/IC0xOjEgKSpNYXRoLmF0YW4oU3BlZWRDb250cm9sbGVyMy5EaXN0YW5jZUZyb21UYXJnZXRHb2FsIC8gdGhpcy5jYWxEaXN0MlRhcmdldCh0YXJnZXRQb3NpdGlvbiwgcm9ib3RQb3NpdGlvbikpO1xuXG4gICAgICAgIGNvbnN0IGxpbmVhclNwZWVkID0gIHRoaXMuY2FsRGlzdDJUYXJnZXQodGFyZ2V0UG9zaXRpb24sIHJvYm90UG9zaXRpb24pIDtcbiAgICAgICAgY29uc3QgYW5ndWxhclNwZWVkID0gdGhpcy53cmFwMlBpKHBoaVIgLSByb2JvdFBvc2l0aW9uLnRoICsgXG4gICAgICAgICAgICAoTWF0aC5hYnMoYWxwaGEpIDwgTWF0aC5hYnMoYmV0YSkgPyBhbHBoYSA6IGJldGEpKSA7XG5cbiAgICAgICAgcmV0dXJuIHsgcmlnaHQ6IChsaW5lYXJTcGVlZCAtIFJvYm90LnJvYm90QXR0ci5yVyAqIDAuNSAqIGFuZ3VsYXJTcGVlZCksIFxuICAgICAgICAgICAgICAgICAgbGVmdDogKGxpbmVhclNwZWVkICsgUm9ib3Qucm9ib3RBdHRyLnJXICogMC41ICogYW5ndWxhclNwZWVkKSB9O1xuICAgIH1cblxuXG5cbiAgICBwcml2YXRlIGdldExlZnRQdWxzZU9ic3RhY2xlKG9ic3RhY2xlczogUm9ib3RPYnN0YWNsZURpc3RhbmNlcyk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhbGNQdWxzZShvYnN0YWNsZXMuZnJvbnRMZWZ0KSArIHRoaXMuY2FsY1B1bHNlKG9ic3RhY2xlcy5iYWNrTGVmdCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRMRnJvbnRQdWxzZU9ic3RhY2xlKG9ic3RhY2xlczogUm9ib3RPYnN0YWNsZURpc3RhbmNlcyk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhbGNQdWxzZShvYnN0YWNsZXMuZnJvbnRMZWZ0KSAqIHRoaXMuY2FsY1B1bHNlKG9ic3RhY2xlcy5mcm9udFJpZ2h0KTtcbiAgICB9XG5cbiAgXG4gICAgY2FsY1B1bHNlKGRpc3Q6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBkaXN0IDwgU3BlZWRDb250cm9sbGVyLk1heERpc3RhbmNlID8gMSAvICgxICsgTWF0aC5leHAoLU1hdGguYWJzKGRpc3QpKSkgOiAwO1xuICAgIH1cbn0pOyIsImltcG9ydCBPYnN0YWNsZXMsIHsgUm9ib3RPYnN0YWNsZURpc3RhbmNlcywgU2Vuc29yRGlzdGFuY2UgfSBmcm9tIFwiLi9PYnN0YWNsZXNcIjtcbmltcG9ydCB7IFBvc2l0aW9uLCBSb2JvdCB9IGZyb20gXCIuL1JvYm90XCI7XG5pbXBvcnQgeyBTaWRlcyB9IGZyb20gXCIuL1NvbmFyU2Vuc29yc1wiO1xuaW1wb3J0IHsgU3BlZWQsIFNwZWVkQ29udHJvbGxlciB9IGZyb20gXCIuL1NwZWVkQ29udHJvbGxlclwiO1xuaW1wb3J0IFRhcmdldCBmcm9tIFwiLi9UYXJnZXRcIjtcbmltcG9ydCBQYXRoR2VuZXJhdG9yIGZyb20gXCIuL1BhdGhHZW5lcmF0b3JcIjtcbmltcG9ydCBTcGVlZENvbnRyb2xsZXJJZiBmcm9tIFwiLi9TcGVlZENvbnRyb2xsZXJJZlwiO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgbmV3IChjbGFzcyBTcGVlZENvbnRyb2xsZXI0IGltcGxlbWVudHMgU3BlZWRDb250cm9sbGVySWYge1xuXG4gICAgc3RhdGljIE1heFNwZWVkID0gNzAwO1xuICAgIHN0YXRpYyBNYXhEaXN0YW5jZSA9IDgwO1xuICAgIHN0YXRpYyBEaXN0YW5jZUZyb21UYXJnZXRHb2FsID0gMjA7XG5cbiAgICBpdGVyYXRpb24gPSAwO1xuICAgIGxhc3REaXN0YW5jZVRvT2JzdGFjbGVzOiBTZW5zb3JEaXN0YW5jZVtdO1xuXG5cbiAgICB3cmFwMlBpKGFuZzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIGFuZyA+IE1hdGguUEkgPyAoLTIgKiBNYXRoLlBJICsgYW5nKSA6IGFuZztcbiAgICB9XG5cbiAgICBjYWxEaXN0MlRhcmdldCh0YXJnZXRQb3NpdGlvbjogUG9zaXRpb24sIHJvYm90UG9zaXRpb246IFBvc2l0aW9uKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyh0YXJnZXRQb3NpdGlvbi54IC0gcm9ib3RQb3NpdGlvbi54LCAyKSArIE1hdGgucG93KHRhcmdldFBvc2l0aW9uLnkgLSByb2JvdFBvc2l0aW9uLnksIDIpKTtcbiAgICB9XG5cbiAgICBjYWxjV2hlZWxzU3BlZWQoc2Vuc29yT2JzdERpc3RhbmNlczogU2Vuc29yRGlzdGFuY2VbXSwgY3VycmVudFNwZWVkOiBTcGVlZCwgcm9ib3RQb3NpdGlvbjogUG9zaXRpb24pOiBTcGVlZCB7XG4gICAgICAgIC8vICAgIENvbnRyb2wgdG8gcmVmZXJlbmNlIHBvc2UgdXNpbmcgYW4gaW50ZXJtZWRpYXRlIGRpcmVjdGlvbjpcbiAgICAgICAgY29uc3QgdGFyZ2V0UG9zaXRpb24gPSBUYXJnZXQuZ2V0UG9zaXRpb24oKTtcblxuICAgICAgICAvLyBjb25zdCBmYXJ0aGVzdE9ic3RhY2xlID0gT2JzdGFjbGVzLmdldE1heERpc3RhbmNlT2JzdGFjbGUocm9ib3RQb3NpdGlvbik7XG5cblxuICAgICAgICBQYXRoR2VuZXJhdG9yLmdlbmVyYXRlQ2lyY2xlc0Fyb3VuZChyb2JvdFBvc2l0aW9uKVxuICAgICAgICAuZm9yRWFjaChwb3MgPT4ge1xuICAgICAgICAgICAgVGFyZ2V0LnNldFBvc2l0aW9uKHBvcyk7XG4gICAgICAgICAgICBUYXJnZXQuc2hvd1RhcmdldCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBQYXRoR2VuZXJhdG9yLmdldFJhbmdlT2ZBbmdsZXMoMCwgMiAqIE1hdGguUEksIDAuMDIpXG4gICAgICAgIC8vICAgICAuZm9yRWFjaChhbmdsZSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgVGFyZ2V0LnNldFBvc2l0aW9uKHtcbiAgICAgICAgLy8gICAgICAgICAgICAgeDogcm9ib3RQb3NpdGlvbi54ICsgMTAwICogTWF0aC5jb3MoYW5nbGUpLFxuICAgICAgICAvLyAgICAgICAgICAgICB5OiByb2JvdFBvc2l0aW9uLnkgKyAxMDAgKiBNYXRoLnNpbihhbmdsZSksIFxuICAgICAgICAvLyAgICAgICAgICAgICB0aDogcm9ib3RQb3NpdGlvbi50aCArIGFuZ2xlXG4gICAgICAgIC8vICAgICAgICAgfSk7XG4gICAgICAgIC8vICAgICAgICAgVGFyZ2V0LnNob3dUYXJnZXQoKTtcbiAgICAgICAgLy8gICAgICB9XG4gICAgICAgIC8vICAgICApO1xuXG5cblxuICAgICAgICByZXR1cm4geyByaWdodDogMCwgbGVmdDogMCB9O1xuXG4gICAgICAgIC8vICByZXR1cm4gdGhpcy5nZXRDb21tYW5kVG9UYXJnZXQoKGZhcnRoZXN0T2JzdGFjbGUgYXMgdW5rbm93biBhcyBQb3NpdGlvbiksIHJvYm90UG9zaXRpb24pO1xuICAgIH1cblxuXG5cbiAgICBwcml2YXRlIGdldENvbW1hbmRUb1RhcmdldCh0YXJnZXRQb3NpdGlvbjogUG9zaXRpb24sIHJvYm90UG9zaXRpb246IFBvc2l0aW9uKSB7XG4gICAgICAgIGNvbnN0IHBoaVIgPSBNYXRoLmF0YW4yKCh0YXJnZXRQb3NpdGlvbi55IC0gcm9ib3RQb3NpdGlvbi55KSwgKHRhcmdldFBvc2l0aW9uLnggLSByb2JvdFBvc2l0aW9uLngpKTtcbiAgICAgICAgY29uc3QgYWxwaGEgPSB0aGlzLndyYXAyUGkocGhpUiAtIE1hdGguUEkpO1xuXG4gICAgICAgIGNvbnN0IGJldGEgPSAoYWxwaGEgPCAwID8gLTEgOiAxKSAqIE1hdGguYXRhbihTcGVlZENvbnRyb2xsZXI0LkRpc3RhbmNlRnJvbVRhcmdldEdvYWwgLyB0aGlzLmNhbERpc3QyVGFyZ2V0KHRhcmdldFBvc2l0aW9uLCByb2JvdFBvc2l0aW9uKSk7XG5cbiAgICAgICAgY29uc3QgbGluZWFyU3BlZWQgPSB0aGlzLmNhbERpc3QyVGFyZ2V0KHRhcmdldFBvc2l0aW9uLCByb2JvdFBvc2l0aW9uKTtcbiAgICAgICAgY29uc3QgYW5ndWxhclNwZWVkID0gdGhpcy53cmFwMlBpKHBoaVIgLSByb2JvdFBvc2l0aW9uLnRoICtcbiAgICAgICAgICAgIChNYXRoLmFicyhhbHBoYSkgPCBNYXRoLmFicyhiZXRhKSA/IGFscGhhIDogYmV0YSkpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByaWdodDogKGxpbmVhclNwZWVkIC0gUm9ib3Qucm9ib3RBdHRyLnJXICogMC41ICogYW5ndWxhclNwZWVkKSxcbiAgICAgICAgICAgIGxlZnQ6IChsaW5lYXJTcGVlZCArIFJvYm90LnJvYm90QXR0ci5yVyAqIDAuNSAqIGFuZ3VsYXJTcGVlZClcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldExlZnRQdWxzZU9ic3RhY2xlKG9ic3RhY2xlczogUm9ib3RPYnN0YWNsZURpc3RhbmNlcyk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhbGNQdWxzZShvYnN0YWNsZXMuZnJvbnRMZWZ0KSArIHRoaXMuY2FsY1B1bHNlKG9ic3RhY2xlcy5iYWNrTGVmdCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRMRnJvbnRQdWxzZU9ic3RhY2xlKG9ic3RhY2xlczogUm9ib3RPYnN0YWNsZURpc3RhbmNlcyk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhbGNQdWxzZShvYnN0YWNsZXMuZnJvbnRMZWZ0KSAqIHRoaXMuY2FsY1B1bHNlKG9ic3RhY2xlcy5mcm9udFJpZ2h0KTtcbiAgICB9XG5cbiAgXG4gICAgY2FsY1B1bHNlKGRpc3Q6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBkaXN0IDwgU3BlZWRDb250cm9sbGVyLk1heERpc3RhbmNlID8gMSAvICgxICsgTWF0aC5leHAoLU1hdGguYWJzKGRpc3QpKSkgOiAwO1xuICAgIH1cblxuXG59KTsiLCJpbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gXCIuL1JvYm90XCI7XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyAoY2xhc3MgVGFyZ2V0IHtcbiAgXG4gICAgcHJpdmF0ZSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICAgIHByaXZhdGUgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuXG4gICAgcHJpdmF0ZSB0YXJnZXQgPSB7eDo0OTAseTo0OTAsIHRoOjAgfSBhcyBQb3NpdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIH1cblxuICAgIHNob3dUYXJnZXQoKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjb25zdCBkZWZhdWx0Q29sb3IgPSB0aGlzLmNvbnRleHQuZmlsbFN0eWxlO1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IFwiYmx1ZVwiO1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmFyYyh0aGlzLnRhcmdldC54LCB0aGlzLnRhcmdldC55LCAzLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbCgpO1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGRlZmF1bHRDb2xvcjtcbiAgICB9XG5cbiAgICBzZXRQb3NpdGlvbih0YXJnZXQ6UG9zaXRpb24pOnZvaWQge1xuICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgIH1cblxuICAgIGdldFBvc2l0aW9uKCk6UG9zaXRpb24ge1xuICAgICAgICByZXR1cm4gdGhpcy50YXJnZXQ7XG4gICAgfVxufSk7IiwiaW1wb3J0IHsgT2JzdGFjbGVzIH0gZnJvbSBcIi4vT2JzdGFjbGVzXCI7XG5pbXBvcnQgUGF0aEdlbmVyYXRvciBmcm9tIFwiLi9QYXRoR2VuZXJhdG9yXCI7XG5pbXBvcnQgeyBSb2JvdCB9IGZyb20gXCIuL1JvYm90XCI7XG5pbXBvcnQgeyBTcGVlZENvbnRyb2xsZXIgfSBmcm9tIFwiLi9TcGVlZENvbnRyb2xsZXJcIjtcbmltcG9ydCB0YXJnZXQgZnJvbSBcIi4vVGFyZ2V0XCI7XG5cbmV4cG9ydCBlbnVtIEFsZ29yaXRobVRvUnVuIHtcbiAgZ29Ub1RhcmdldCA9IFwiZ29Ub1RhcmdldFwiLFxuICBhdm9pZE9ic3RhY2xlc1RhcmdldCA9IFwiYXZvaWRPYnN0YWNsZXNUYXJnZXRcIixcbiAgZ29Ub1RhcmdldEJ5UGF0aCA9IFwiZ29Ub1RhcmdldEJ5UGF0aFwiXG59XG5cbmV4cG9ydCBjbGFzcyBXb3JsZCB7XG4gIHJvYm90ID0gbmV3IFJvYm90KCk7XG4gIG9ic3RhY2xlcyA9IG5ldyBPYnN0YWNsZXMoKTtcbiAgY29ucm9sbGVyID0gbmV3IFNwZWVkQ29udHJvbGxlcigpO1xuXG4gIHByaXZhdGUgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgcHJpdmF0ZSBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xuICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgfVxuXG4gIGFuaW1hdGUoKSB7XG4gICAgdGhpcy5jbGVhcigpO1xuICAgIGNvbnN0IGRpc3RhbmNlcyA9IHRoaXMub2JzdGFjbGVzLmNhbGNEaXN0YW5jZXModGhpcy5yb2JvdC5nZXRQb3NpdGlvbigpKTtcbiAgICBjb25zdCBzZW5zb3JEaXN0YW5jZXMgPSB0aGlzLm9ic3RhY2xlcy5jYWxjRGlzdGFuY2VzRnJvbVNlbnNvcnModGhpcy5yb2JvdC5nZXRTZW5zb3JzKCkpO1xuICAgIGNvbnN0IHNwZWVkID0gdGhpcy5jb25yb2xsZXIuY2FsY1doZWVsc1NwZWVkKHNlbnNvckRpc3RhbmNlcywgdGhpcy5yb2JvdC5nZXRTcGVlZCgpLHRoaXMucm9ib3QuZ2V0UG9zaXRpb24oKSx0aGlzLmdldEFsb2dvcml0aG0oKSk7XG4gICAgdGhpcy5yb2JvdC5hbmltYXRlKHNwZWVkKTtcbiAgICB0aGlzLm9ic3RhY2xlcy5zaG93KCk7XG4gICAgUGF0aEdlbmVyYXRvci5zaG93RnJvbnRPYnN0YWNsZVBhdGhBdm9pZGFuY2Uoc2Vuc29yRGlzdGFuY2VzLCB0aGlzLnJvYm90LmdldFBvc2l0aW9uKCkpO1xuICAgIHRhcmdldC5zaG93VGFyZ2V0KCk7XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7IHRoaXMuYW5pbWF0ZSgpIH0pO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgfVxuXG4gIGhhbmRsZUV2ZW50KGV2ZW50OiBQb2ludGVyRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFyKCk7XG5cbiAgICBzd2l0Y2ggKChldmVudC5jdXJyZW50VGFyZ2V0IGFzIEVsZW1lbnQpLmdldEF0dHJpYnV0ZShcImlkXCIpKSB7XG4gICAgICBjYXNlIFwicmlnaHRcIjoge1xuICAgICAgICB0aGlzLnJvYm90LmFuaW1hdGUoeyByaWdodDogMTYwLCBsZWZ0OiAxNTAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBcImxlZnRcIjoge1xuICAgICAgICB0aGlzLnJvYm90LmFuaW1hdGUoeyByaWdodDogMTUwLCBsZWZ0OiAxNjAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIFwiZm9yd2FyZFwiOiB7XG4gICAgICAgIHRoaXMucm9ib3QuYW5pbWF0ZSh7IHJpZ2h0OiAxNjAsIGxlZnQ6IDE2MCB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgXCJiYWNrd2FyZFwiOiB7XG4gICAgICAgIHRoaXMucm9ib3QuYW5pbWF0ZSh7IHJpZ2h0OiAtMTYwLCBsZWZ0OiAtMTYwIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBcInN0b3BcIjoge1xuICAgICAgICB0aGlzLnJvYm90LnRvZ2dsZVN0b3AoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgXCJzdGVwXCI6IHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICBjb25zdCBkaXN0YW5jZXMgPSB0aGlzLm9ic3RhY2xlcy5jYWxjRGlzdGFuY2VzKHRoaXMucm9ib3QuZ2V0UG9zaXRpb24oKSk7XG4gICAgICAgIGNvbnN0IHNlbnNvckRpc3RhbmNlcyA9IHRoaXMub2JzdGFjbGVzLmNhbGNEaXN0YW5jZXNGcm9tU2Vuc29ycyh0aGlzLnJvYm90LmdldFNlbnNvcnMoKSk7XG5cbiAgICAgICAgY29uc3Qgc3BlZWQgPSB0aGlzLmNvbnJvbGxlci5jYWxjV2hlZWxzU3BlZWQoc2Vuc29yRGlzdGFuY2VzLCB0aGlzLnJvYm90LmdldFNwZWVkKCksdGhpcy5yb2JvdC5nZXRQb3NpdGlvbigpLHRoaXMuZ2V0QWxvZ29yaXRobSgpKTtcbiAgICAgICAgdGhpcy5yb2JvdC5hbmltYXRlKHNwZWVkKTtcbiAgICAgICAgdGhpcy5vYnN0YWNsZXMuc2hvdygpO1xuICAgICAgICBQYXRoR2VuZXJhdG9yLnNob3dGcm9udE9ic3RhY2xlUGF0aEF2b2lkYW5jZShzZW5zb3JEaXN0YW5jZXMsIHRoaXMucm9ib3QuZ2V0UG9zaXRpb24oKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIFwic3RhcnRcIjoge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBkaXN0YW5jZXMgPSB0aGlzLm9ic3RhY2xlcy5jYWxjRGlzdGFuY2VzKHRoaXMucm9ib3QuZ2V0UG9zaXRpb24oKSk7XG4gICAgICAgIGNvbnN0IHNlbnNvckRpc3RhbmNlcyA9IHRoaXMub2JzdGFjbGVzLmNhbGNEaXN0YW5jZXNGcm9tU2Vuc29ycyh0aGlzLnJvYm90LmdldFNlbnNvcnMoKSk7XG4gICAgICAgIGNvbnN0IHNwZWVkID0gdGhpcy5jb25yb2xsZXIuY2FsY1doZWVsc1NwZWVkKHNlbnNvckRpc3RhbmNlcywgdGhpcy5yb2JvdC5nZXRTcGVlZCgpLHRoaXMucm9ib3QuZ2V0UG9zaXRpb24oKSx0aGlzLmdldEFsb2dvcml0aG0oKSk7XG4gICAgICAgIHRoaXMucm9ib3QuYW5pbWF0ZShzcGVlZCk7XG4gICAgICAgIHRoaXMub2JzdGFjbGVzLnNob3coKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgXCJ4XCI6e1xuICAgICAgICB0aGlzLnJvYm90LnNldFgoIHBhcnNlRmxvYXQoIChldmVudC5jdXJyZW50VGFyZ2V0IGFzIHVua25vd24gYXMgeyB2YWx1ZTpzdHJpbmd9KS52YWx1ZSApICApO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBcInlcIjp7XG4gICAgICAgIHRoaXMucm9ib3Quc2V0WSggcGFyc2VGbG9hdCggKGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgdW5rbm93biBhcyB7IHZhbHVlOnN0cmluZ30pLnZhbHVlICkgICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIFwidGhcIjp7XG4gICAgICAgIHRoaXMucm9ib3Quc2V0VGgoIHBhcnNlRmxvYXQoIChldmVudC5jdXJyZW50VGFyZ2V0IGFzIHVua25vd24gYXMgeyB2YWx1ZTpzdHJpbmd9KS52YWx1ZSApICApO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBBbGdvcml0aG1Ub1J1bi5hdm9pZE9ic3RhY2xlc1RhcmdldC50b1N0cmluZygpOntcbiAgICAgICAgdGhpcy5jaGVja1JhZGlvQnV0dG9uKEFsZ29yaXRobVRvUnVuLmF2b2lkT2JzdGFjbGVzVGFyZ2V0LnRvU3RyaW5nKCkpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBBbGdvcml0aG1Ub1J1bi5nb1RvVGFyZ2V0LnRvU3RyaW5nKCk6e1xuICAgICAgICB0aGlzLmNoZWNrUmFkaW9CdXR0b24oQWxnb3JpdGhtVG9SdW4uZ29Ub1RhcmdldC50b1N0cmluZygpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgQWxnb3JpdGhtVG9SdW4uZ29Ub1RhcmdldEJ5UGF0aC50b1N0cmluZygpOntcbiAgICAgICAgdGhpcy5jaGVja1JhZGlvQnV0dG9uKEFsZ29yaXRobVRvUnVuLmdvVG9UYXJnZXRCeVBhdGgudG9TdHJpbmcoKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgfVxuICAgIHRoaXMub2JzdGFjbGVzLnNob3coKTtcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tSYWRpb0J1dHRvbihyYWRpb0J1dHRvbjpzdHJpbmcpIHtcbiAgICBPYmplY3Qua2V5cyhBbGdvcml0aG1Ub1J1bilcbiAgICAuZm9yRWFjaChhbGdvID0+IHsgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGFsZ28pIGFzIHVua25vd24gYXMgeyBjaGVja2VkOiBib29sZWFuOyB9KS5jaGVja2VkID0gZmFsc2U7fSk7XG4gICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJhZGlvQnV0dG9uKSBhcyB1bmtub3duIGFzIHsgY2hlY2tlZDogYm9vbGVhbjsgfSkuY2hlY2tlZCA9IHRydWU7XG4gIH1cblxuICBnZXRBbG9nb3JpdGhtKCkgOiBBbGdvcml0aG1Ub1J1bntcbiAgICBpZigoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoQWxnb3JpdGhtVG9SdW4uZ29Ub1RhcmdldC50b1N0cmluZygpKSBhcyB1bmtub3duIGFzIHtjaGVja2VkOmJvb2xlYW59KS5jaGVja2VkKXtcbiAgICAgIHJldHVybiBBbGdvcml0aG1Ub1J1bi5nb1RvVGFyZ2V0O1xuICAgIH1cblxuICAgIGlmKChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChBbGdvcml0aG1Ub1J1bi5nb1RvVGFyZ2V0QnlQYXRoLnRvU3RyaW5nKCkpIGFzIHVua25vd24gYXMge2NoZWNrZWQ6Ym9vbGVhbn0pLmNoZWNrZWQpe1xuICAgICAgcmV0dXJuIEFsZ29yaXRobVRvUnVuLmdvVG9UYXJnZXRCeVBhdGg7XG4gICAgfVxuXG4gICAgcmV0dXJuIEFsZ29yaXRobVRvUnVuLmF2b2lkT2JzdGFjbGVzVGFyZ2V0O1xuICB9XG59IiwiXG5pbXBvcnQgeyBBbGdvcml0aG1Ub1J1biwgV29ybGQgfSBmcm9tIFwiLi9Xb3JsZFwiO1xuXG5jb25zdCB3b3JsZCA9IG5ldyBXb3JsZCgpO1xuXG5cbltcInJpZ2h0XCIsIFwibGVmdFwiLCBcImZvcndhcmRcIiwgXCJiYWNrd2FyZFwiLCBcInN0ZXBcIiwgXCJzdG9wXCJdXG4gICAgLmNvbmNhdChPYmplY3Qua2V5cyhBbGdvcml0aG1Ub1J1bikpXG4gICAgLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYnV0dG9uKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xuICAgICAgICAgICAgd29ybGQuaGFuZGxlRXZlbnQoZXZlbnQgYXMgUG9pbnRlckV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgICk7XG5cbltcInhcIiwgXCJ5XCIsIFwidGhcIl0uZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaW5wdXQpLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZXZlbnQgPT4ge1xuICAgICAgICB3b3JsZC5oYW5kbGVFdmVudChldmVudCBhcyBQb2ludGVyRXZlbnQpO1xuICAgIH0pO1xufSk7XG5cbndvcmxkLmFuaW1hdGUoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=