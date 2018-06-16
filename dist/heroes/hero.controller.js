"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hero_model_1 = require("./hero.model");
class HeroController {
}
HeroController.list = (request, response) => {
    response.json(hero_model_1.HeroModel.find().exec());
};
HeroController.byId = (request, response) => {
    const id = request.params.id;
    response.json(hero_model_1.HeroModel.findById(id).exec);
};
exports.HeroController = HeroController;
//# sourceMappingURL=hero.controller.js.map