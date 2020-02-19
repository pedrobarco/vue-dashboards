import express, { Router } from "express";
import helmet from "helmet";
import { DocsRouter } from "./api/docs";

const router = Router();
router.use(new DocsRouter().router);

const app = express();
app.use(express.json());
app.use(helmet());
app.use("/api", router);

export { app };
