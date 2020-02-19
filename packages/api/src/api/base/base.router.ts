import { Router } from "express";

/**
 * Class representing a base router.
 * Intended for express router extension.
 */
export abstract class BaseRouter {
  public readonly router: Router;

  /**
   * Initializes the express router with the associated routes.
   */
  constructor() {
    this.router = Router();
    this.router.use((req, res, next) => {
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      res.header(
        "Access-Control-Allow-Methods",
        "POST, GET, PUT, DELETE, OPTIONS"
      );
      next();
    });
    this.initRoutes();
  }

  abstract initRoutes(): void;
}
