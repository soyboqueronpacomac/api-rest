 import { ServerExpress } from "./presentation/Server.express";
 import { envsAdapter } from "./adapter"; 
 import { AppRoutes } from "./presentation/app.routes";

 (() => {
   main();
 })()

 async function main() {
   // TODO: await base de datos
   // TODO: iniciar servidor
   const server = new ServerExpress(
    { 
      port: envsAdapter.PORT,
      router: AppRoutes.router
    }
   );
   await server.start();
  
 }
