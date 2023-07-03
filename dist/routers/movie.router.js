"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cors_1 = __importDefault(require("cors"));
var express_2 = require("express");
var validateSchema_middleware_1 = require("../middlewares/validateSchema.middleware");
var movie_schema_1 = __importDefault(require("../schemas/movie.schema"));
var movie_controller_1 = require("../controllers/movie.controller");
var router = (0, express_1.Router)();
router.use((0, express_2.json)());
router.use((0, cors_1.default)());
router.post("/movie", (0, validateSchema_middleware_1.validateSchema)(movie_schema_1.default), movie_controller_1.createMovie);
router.get("/movie", movie_controller_1.getMovie);
router.patch("/movie/:id", (0, validateSchema_middleware_1.validateSchema)(movie_schema_1.default), movie_controller_1.editMovie);
router.delete("/movie/:id", movie_controller_1.deleteMovie);
exports.default = router;
