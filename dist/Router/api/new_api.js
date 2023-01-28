"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var fs_1 = require("fs");
var Resize_images_1 = __importDefault(require("../../utilities/Resize_images"));
var new_api = (0, express_1.default)();
new_api.get('/api/image', function (req, res) {
    // res.status(200).send('hello sir   '+ req.query.name);
    var name = String(req.query.name);
    //check if name null or undifined and give user handle error
    if (name === undefined || name === null) {
        res.status(400).send('Bad request, image name is required.');
    }
    //check if width or hieght null or undifined and give user handle error
    if (req.query.width === undefined || req.query.hieght === undefined) {
        res.status(400).send('sir, you should enter the width and hieght.');
    }
    //converting width and hieght to integer values
    var hieght = String(req.query.hieght);
    var new_hieght = parseInt(hieght);
    var width = String(req.query.width);
    var new_width = parseInt(width);
    // get image location 
    var img_loc = path_1.default.resolve('') + "/images/".concat(name, ".jpg");
    // check if we have this image or not 
    if ((0, fs_1.existsSync)(img_loc) === false) {
        res.status(404).send('this image is not exist in my folder');
    }
    //check width and hieght value and sure it is > 0
    if (new_width <= 0) {
        res.status(404).send('sir, you have to enter positive number for width');
    }
    if (new_hieght <= 0) {
        res.status(404).send('sir, you have to enter positive number for hieght');
    }
    // check if we have this image with this width and hieght 
    if ((0, fs_1.existsSync)("".concat(path_1.default.resolve('./'), "/Resized_images/").concat(name, "-").concat(new_width, "-").concat(new_hieght, ".jpg"))) {
        res.status(200).sendFile("".concat(path_1.default.resolve('./'), "/Resized_images/").concat(name, "-").concat(width, "-").concat(hieght, ".jpg"));
    }
    else {
        // if it is not exist we will resize it and save it in Resized_images
        (0, Resize_images_1.default)(name, new_width, new_hieght).then(function () {
            res.status(200).sendFile("".concat(path_1.default.resolve(''), "/Resized_images/").concat(name, "-").concat(width, "-").concat(hieght, ".jpg"));
        });
    }
});
exports.default = new_api;
