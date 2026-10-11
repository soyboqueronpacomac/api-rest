import env from "env-var";

export const envsAdapter = {
  PORT: env.get('PORT').required().asPortNumber(),
  CORS_ORIGIN: env.get('CORS_ORIGIN').required().asArray(','),
  MONGO_URL: env.get('MONGO_URL').required().asString(),
  MONGO_DB_NAME: env.get('MONGO_DB_NAME').required().asString(),
}