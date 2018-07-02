import { NextFunction, Request, Response } from "express";
import { Document, Types } from "mongoose";
import { HeroModel } from "./hero.model";

export class HeroController {
  public static list = async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    const heroes = await HeroModel.find();
    response.json(heroes);
  };

  public static byId = async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    const id: any = request.params.id;
    HeroModel.findById(id).then((hero: Document) => {
      response.json(hero);
    });
  };

  public static create = async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    const hero = request.body;
    hero._id = Types.ObjectId();
    console.log(`Creating new hero: ${JSON.stringify(hero, null, 4)}`);
    const newHero = await HeroModel.create(hero);
    response.json(newHero);
  };

  public static delete = async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    const id: string = request.params.id;
    let result;
    try {
      result = await HeroModel.findByIdAndRemove(id);
    } catch (ex) {
      response.setHeader("status", 500);
      next();
    }
    response.json(result);
  };

  public static update = async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    const hero = request.body;
    console.log(`Updating hero: ${JSON.stringify(hero, null, 4)}`);
    const updatedHero = await HeroModel.findByIdAndUpdate(
      hero._id,
      { $set: hero },
      { new: true }
    );
    console.log(`Updated hero: ${JSON.stringify(updatedHero)}`);
    response.json(updatedHero);
  };
}
