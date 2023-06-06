import 'reflect-metadata';
import hpp from 'hpp';
import helmet from 'helmet';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import express, { Application } from 'express';
import { useExpressServer } from 'routing-controllers';
import { close, open, port, serverConfig } from './src/server';

const app: Application = express();

// TODP: rate limiter
app.use(hpp());
app.use(helmet());
app.use(morgan('dev'));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

useExpressServer(app, serverConfig)
  .listen(port, open)
  .on('close' || 'SIGINT', close);
