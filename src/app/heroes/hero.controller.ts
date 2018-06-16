import { Request, Response } from "express";
import { Document } from "mongoose";
import { HeroModel } from "./hero.model";

export class HeroController {
  public static list = (request: Request, response: Response) => {
    HeroModel.find().then((heroes: Document[]) => {
      console.log(heroes);
      response.json(heroes);
    });
  };

  public static byId = (request: Request, response: Response) => {
    const id: any = request.params.id;
    HeroModel.findById(id).then((hero: Document) => {
      console.log(hero);
      response.json(hero);
    });
  };
}
