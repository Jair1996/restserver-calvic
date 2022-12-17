import express from 'express';
import cors from 'cors';

import productRoutes from '../routes/product.route.js';

import { dbConnection } from '../db/config.db.js';

export class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.productPath = '/api/products';

    // Conectar a base de datos
    this.conectarDB();

    // Middlewares
    this.middlewares();

    // Routes
    this.routes();
  }

  async conectarDB() {
    await dbConnection();
  }

  middlewares() {
    // CORS
    this.app.use(cors());

    // Lectura y parseo del body
    this.app.use(express.json());

    // Directorio publico
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.use(this.productPath, productRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('App ejecutandose en el puerto ' + this.port);
    });
  }
}
