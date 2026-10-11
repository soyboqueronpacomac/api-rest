import mongoose from "mongoose";

interface Options {
  mongoUrl: string;
  dbName: string;
}

export class MongoDatabase {
  static async connect(options: Options) {
    const { mongoUrl, dbName } = options; 
    try {
      mongoose.connect(mongoUrl, { dbName });
      console.log('Conexión a la base de datos exitosa');
    } catch ( error ) {
      console.log('La Conexión a la base de datos falló:', error);
      throw error;
    }
  }
}