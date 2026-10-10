import express, { Router, type Application, type RequestHandler } from "express";
interface Options {
  port: number,
  router: Router,
  cors: RequestHandler
}
export class ServerExpress {
  public readonly app: Application = express()
  private readonly port: number
  private readonly router: Router
  private readonly cors: RequestHandler
  constructor(options: Options) {
    this.port = options.port
    this.router = options.router;
    this.cors = options.cors;
  }
  public async start() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(this.cors);
    this.app.use(this.router);
    this.app.listen(this.port, () => {
      console.log(`Servidor Express iniciado en el puerto ${this.port}`);
    });
  }
}