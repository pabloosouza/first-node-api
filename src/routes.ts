import { Router } from "express";
import { UsersCrontroller } from "./controllers/usersController";

const routes = Router()
const usersController = new UsersCrontroller()

routes.get('/users', usersController.listarUsuarios);

routes.post('/users', usersController.criarUsuario);

export { routes }