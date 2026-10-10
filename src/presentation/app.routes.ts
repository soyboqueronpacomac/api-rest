import { Router } from "express";
import { AuthRoutes } from "./auth/auth.routes";

export class AppRoutes {
  static get router(): Router {
    const router = Router();
    // Define your routes here
    router.use("/api/auth", AuthRoutes.router); // Ruta para Rutas Auth
    return router;
  }
}