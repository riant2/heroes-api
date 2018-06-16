import { Document, model, Model, Schema } from "mongoose";

const schema: Schema = new Schema({ id: String, name: String }, {});

export const HeroModel: Model<Document> = model("hero", schema, "heroes");
