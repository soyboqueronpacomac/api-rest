import env from "env-var";

export const envsAdapter = {
  PORT: env.get('PORT').required().asPortNumber()
}