"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const body_parser_1 = require("body-parser");
const morgan = require("morgan");
const mongoose_1 = require("mongoose");
const hero_controller_1 = require("./heroes/hero.controller");
const app = express();
mongoose_1.connect("mongodb+srv://heroes:9S3Dfq3CukgLQCJm@cluster0-ttlhu.mongodb.net/test?retryWrites=true").then(console.log);
app.use(express.static(__dirname + "/public"));
app.use(morgan("dev"));
app.use(body_parser_1.urlencoded({ extended: true }));
app.use(body_parser_1.json());
app.use(body_parser_1.json({ type: "application/vnd.api+json" }));
app.get("/hero", hero_controller_1.HeroController.list);
app.get("/hero/:id", hero_controller_1.HeroController.byId);
app.listen(8080);
console.log("App listening on port 8080");
//# sourceMappingURL=server.js.map