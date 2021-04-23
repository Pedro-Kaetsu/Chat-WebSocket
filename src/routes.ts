import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";
import "./database";

/**
 * Tipos de parametros
 * Routes Params => Parametros de Rotas
 * localhost:3333/settings/1
 * Query Params => Filtors e Buscas
 * localhost:3333/settings/1?search=algumacoisa
 *  Body Params => 
 */


const routes = Router();

const settingsController = new SettingsController();

routes.post("/settings", settingsController.create);

export { routes };