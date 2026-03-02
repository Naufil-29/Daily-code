import express from "express";
import { logout, refresh } from "../controllers/globalControllers.js";

const globalRoutes = express.Router();

globalRoutes.post("/refresh", refresh);
globalRoutes.post("/logout", logout);

export default globalRoutes;