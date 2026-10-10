import { Router } from "express";
import { AuthController } from "./auth.controller";

export class AuthRoutes {
  static get router(): Router {
    const router = Router();
    // instancia del controlador de autenticación
    const auth = new AuthController();
    // ruta para login de un usuario
    router.post("/login", auth.loginUser);
    // ruta para registrar un nuevo usuario
    router.post("/register", auth.registerUser);
    return router;
  }
}