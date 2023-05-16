"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const dronesPath_routes_1 = require("./dronesPath.routes");
const routes = (0, express_1.Router)();
exports.routes = routes;
routes.get('/health', (req, res) => {
    return res.status(200).send();
});
routes.use('/drones', dronesPath_routes_1.dronesRoutes);
