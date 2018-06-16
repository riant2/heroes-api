import { json, urlencoded } from "body-parser";
import * as cors from "cors";
import * as express from "express";
import { connect } from "mongoose";
import * as morgan from "morgan";
import { HeroController } from "./heroes/hero.controller";

const app: express.Express = express(); // create our app w/ express
// var methodOverride = require("method-override"); // simulate DELETE and PUT (express4)

// configuration =================

connect(
  "mongodb+srv://heroes:9S3Dfq3CukgLQCJm@cluster0-ttlhu.mongodb.net/heroes?retryWrites=true"
).then(result => console.log(result)); // connect to mongoDB database on modulus.io

app.use(cors({ origin: "http://localhost:4200" }));
app.use(express.static(__dirname + "/public")); // set the static files location /public/img will be /img for users
app.use(morgan("dev")); // log every request to the console
app.use(urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
app.use(json()); // parse application/json
app.use(json({ type: "application/vnd.api+json" })); // parse application/vnd.api+json as json
// app.use(methodOverride());

app.get("/hero", HeroController.list);
app.get("/hero/:id", HeroController.byId);

// listen (start app with node server.js) ======================================
app.listen(8080);
console.log("App listening on port 8080");
