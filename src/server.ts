import path from 'path';
import chalk from 'chalk';
import dotenv from 'dotenv';
import { RoutingControllersOptions } from 'routing-controllers';
import * as glob from 'glob';
import { getCurrentUser } from './modules/auth/authService';

dotenv.config();

const port = process.env.PORT;
const host = process.env.HOST;

const serverConfig: RoutingControllersOptions = {
  development: true,
  cors: {
    origin: '*',
    credentials: true,
  },
  routePrefix: '/api',
  controllers: glob.sync(
    path.join(__dirname, '../src/modules/**/*Controller.ts')
  ),
  middlewares: glob.sync(path.join(__dirname, '../src/middlewares/*.ts')),
  validation: {
    whitelist: true,
  },
  defaultErrorHandler: false,
  currentUserChecker: getCurrentUser,
};

const open = () =>
  console.log(
    chalk.green('⚡️⚡️⚡️ Server is running 🚀 🚀 🚀'),
    chalk.yellow(`at 👉 ${host}:${port}`)
  );

const close = () =>
  console.log(chalk.red('⚡：⚡：⚡： Server is closed ⚡：⚡：⚡：'));

export { open, close, serverConfig, port };
