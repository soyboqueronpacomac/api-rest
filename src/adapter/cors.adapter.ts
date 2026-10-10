import cors, { type CorsOptions } from "cors";
import { envsAdapter} from "./envs.adapter";

export class CorsAdapter {
  static get options(): CorsOptions {
    return {
      origin: envsAdapter.CORS_ORIGIN,
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      credentials: true,
    }
  }
  static get middleware() {
    return cors(this.options);
  }
}