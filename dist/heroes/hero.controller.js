"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hero_model_1 = require("./hero.model");
class HeroController {
}
HeroController.list = (request, response, next) => {
    hero_model_1.HeroModel.find().then((heroes) => {
        console.log(heroes);
        response.json(heroes);
    });
};
HeroController.byId = (request, response, next) => {
    const id = request.params.id;
    hero_model_1.HeroModel.findById(id).then((hero) => {
        console.log(hero);
        response.json(hero);
    });
};
exports.HeroController = HeroController;
//# sourceMappingURL=hero.controller.js.map