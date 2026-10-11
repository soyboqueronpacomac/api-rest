import { Router } from "express";
import { AuthRoutes } from "./auth/auth.routes";
import { ProfileRoutes } from "./profile/profile.routes";

export class AppRoutes {
  static get router(): Router {
    const router = Router();
    // Define your routes here
    router.use("/api/auth", AuthRoutes.router); // Ruta para Rutas Auth
    router.use("/api/profile", ProfileRoutes.routes);
    return router;
  }
}