import { createLogger, format, transports } from "winston";
import { env } from "../env";

export const logger = createLogger({
  format: format.combine(
    format.colorize(),
    format.timestamp(),
    format.splat(),
    format.label({ label: "identity-server" }),
    format.printf(({ level, message, label, timestamp }) => {
      return `${timestamp} [${label}] ${level}: ${message}`;
    })
  ),
  transports: [new transports.Console({ level: env.logger.logLevel })]
});
