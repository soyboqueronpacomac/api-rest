import express, { Router, type Application } from "express";
interface Options {
  port: number,
  router: Router
}
export class ServerExpress {
  public readonly app: Application = express()
  private readonly port: number
  private readonly router: Router
  constructor(options: Options) {
    this.port = options.port
    this.router = options.router;
  }
  public async start() {
    this.app.use(this.router);
    this.app.listen(this.port, () => {
      console.log(`Servidor Express iniciado en el puerto ${this.port}`);
    });
  }
}