import { Express, NextFunction, Request, Response } from "express";

export type handlerFunction = (
  request: Request,
  response: Response,
  next: NextFunction
) => Promise<void>;

export class Routes {
  constructor(private app: Express) {}
  public get = (path: string, handler: handlerFunction) => {
    this.app.get(path, handler);
    return this;
  };
  public post = (path: string, handler: handlerFunction) => {
    this.app.post(path, handler);
    return this;
  };
  public put = (path: string, handler: handlerFunction) => {
    this.app.put(path, handler);
    return this;
  };
  public delete = (path: string, handler: handlerFunction) => {
    this.app.delete(path, handler);
    return this;
  };
}
