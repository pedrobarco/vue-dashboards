import { config } from "dotenv";

const nodeEnv = process.env.NODE_ENV || "development";
config({ path: `.env.${nodeEnv}` });

export const env = {
  logger: {
    logLevel: process.env.LOG_LEVEL || "info"
  }
};
