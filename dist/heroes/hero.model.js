"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({ id: String, name: String }, {});
exports.HeroModel = mongoose_1.model("hero", schema, "heroes");
//# sourceMappingURL=hero.model.js.map