import express from "express";
import path from "path";
import { BaseRouter } from "../base/base.router";

/**
 * Class representing the docs router.
 */
export class DocsRouter extends BaseRouter {
  /**
   * Initializes routes for docs.
   */
  initRoutes(): void {
    this.router.route("/docs/spec").get((_req, res) => {
      res.sendFile("redoc.html", { root: "./docs" });
    });

    this.router
      .use("/docs/dev", express.static(path.resolve("docs")))
      .route("/docs/dev")
      .get((_req, res) => {
        res.sendFile("index.html", { root: "./docs" });
      });
  }
}
