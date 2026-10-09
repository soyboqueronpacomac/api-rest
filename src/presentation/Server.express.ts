import express, { type Application } from "express";
interface Options {
  port: number
}
export class ServerExpress {
  public readonly app: Application = express()
  private readonly port: number
  constructor(options: Options) {
    this.port = options.port
  }
  public async start() {
    this.app.listen(this.port, () => {
      console.log(`Servidor Express iniciado en el puerto ${this.port}`);
    });
  }
}