 import { ServerExpress } from "./presentation/Server.express";
 import { envsAdapter, CorsAdapter } from "./adapter"; 
 import { MongoDatabase } from "./database";
 import { AppRoutes } from "./presentation/app.routes";

 (() => {
   main();
 })()

 async function main() {
   // TODO: await base de datos
   await MongoDatabase.connect({
     mongoUrl: envsAdapter.MONGO_URL,
     dbName: envsAdapter.MONGO_DB_NAME,
   });
   // TODO: iniciar servidor
   const server = new ServerExpress(
    { 
      port: envsAdapter.PORT,
      router: AppRoutes.router,
      cors: CorsAdapter.middleware,
    }
   );
   await server.start();
  
 }
