#!/usr/bin/env ts-node

/**
 * Module dependencies.
 */
import errorHandler from "errorhandler";
import { app } from "./app";
import { logger } from "./lib/logger";

/**
 * Error Handler. Provides full stack - remove for production.
 */
app.use(errorHandler());

// TODO: change to env or config
app.set("port", process.env.PORT || 3000);

/**
 * Start Express server.
 */
const server = app.listen(app.get("port"), () => {
  logger.info(
    "App is running at http://localhost:%d in %s mode",
    app.get("port"),
    app.get("env")
  );
  logger.info("Press CTRL-C to stop");
});

export { server };
