import { AuthDatasourceImpl, AuthRepositoryImpl } from "@/infrastructure";
import { AuthController } from "@/presentation/auth/auth.controller";
import { AuthMiddleware } from "@/presentation/auth/auth.middleware"; 
import { Router } from "express";

export class ProfileRoutes {
  static get routes(): Router {
    const datasource = new AuthDatasourceImpl();
    const repository = new AuthRepositoryImpl(datasource);
    const controller = new AuthController(repository);
    const router = Router();
    // Define profile routes here
    router.get("/:email", AuthMiddleware.validateToken, controller.getProfile);
    return router;
  }
}