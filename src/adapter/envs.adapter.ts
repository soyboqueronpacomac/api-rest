import env from "env-var";

export const envsAdapter = {
  PORT: env.get('PORT').required().asPortNumber(),
  CORS_ORIGIN: env.get('CORS_ORIGIN').required().asArray(',')
}