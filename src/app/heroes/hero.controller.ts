import { Request, Response } from "express";
export class HeroController {
  static list = (request: Request, response: Response) => {
    response.json([]);
  }
}
