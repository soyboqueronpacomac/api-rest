 import { ServerExpress } from "./presentation/Server.express";
 import { envsAdapter } from "./adapter"; 

 (() => {
   main();
 })()

 async function main() {
   // TODO: await base de datos
   // TODO: iniciar servidor
   const server = new ServerExpress(
    { port: envsAdapter.PORT }
   );
   await server.start();
  
 }
