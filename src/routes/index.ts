import * as express from "express";
import webRoutes from "./web";
import apiRoutes from "./api";

export const register = (app: express.Application) => {
    app.use("/", webRoutes);
    app.use("/api", apiRoutes);
}