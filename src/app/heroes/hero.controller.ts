import { Request, Response } from "express";
import { HeroModel } from "./hero.model";
export class HeroController {
  static list = (request: Request, response: Response) => {
    response.json(HeroModel.find().exec());
  }

  static byId = (request: Request, response: Response) => {
    const id: any = request.params.id;
    response.json(HeroModel.findById(id).exec);
  }
}
