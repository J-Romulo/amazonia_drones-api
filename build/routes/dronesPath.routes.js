"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dronesRoutes = void 0;
const express_1 = require("express");
const GetFastestRouteController_1 = require("../modules/paths/useCases/getFastestRoute/GetFastestRouteController");
const dronesRoutes = (0, express_1.Router)();
exports.dronesRoutes = dronesRoutes;
const getFastestRouteController = new GetFastestRouteController_1.GetFastestRouteController();
dronesRoutes.get('/path', getFastestRouteController.handle);
