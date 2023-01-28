"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var new_api_1 = __importDefault(require("../Router/api/new_api"));
// creating application object
var app = (0, express_1.default)();
var port = 8080;
// creating a server with port 8080
app.listen(port, function () {
    console.log("hello this server is running on port ".concat(port));
});
//first end point 
app.get('/', function (req, res) {
    res.status(200).send('home page');
});
//  api/image endpoint 
app.use(new_api_1.default);
exports.default = app;
