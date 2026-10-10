import { Router } from "express";
import { AuthController } from "./auth.controller";
import { AuthRepositoryImpl } from "@/infrastructure/repositories/auth";
import { AuthDatasourceImpl } from "@/infrastructure/datasources/auth";

export class AuthRoutes {
  static get router(): Router {
    const router = Router();
    // instancia del controlador de autenticación
    // implemetar repository
    const repository = new AuthRepositoryImpl(new AuthDatasourceImpl());
    const auth = new AuthController(repository);
    // ruta para login de un usuario
    router.post("/login", auth.loginUser);
    // ruta para registrar un nuevo usuario
    router.post("/register", auth.registerUser);
    return router;
  }
}