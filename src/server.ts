import path from 'path';
import chalk from 'chalk';
import dotenv from 'dotenv';
import { RoutingControllersOptions } from 'routing-controllers';

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
  controllers: [path.join(__dirname + '/controllers/*.ts')],
  middlewares: [path.join(__dirname + '/middlewares/*.ts')],
  validation: {
    whitelist: true,
  },
  defaultErrorHandler: false,
};

const open = () =>
  console.log(
    chalk.green('⚡️⚡️⚡️ Server is running 🚀 🚀 🚀'),
    chalk.yellow(`at 👉 ${host}:${port}`)
  );

const close = () =>
  console.log(chalk.red('⚡：⚡：⚡： Server is closed ⚡：⚡：⚡：'));

export { open, close, serverConfig, port };
