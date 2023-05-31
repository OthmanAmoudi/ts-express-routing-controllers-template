import 'reflect-metadata';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import chalk from 'chalk';
import { createExpressServer } from 'routing-controllers';
import { UserController } from './controllers/UserController';

dotenv.config();

const port = process.env.PORT;
const host = process.env.HOST;

const app = createExpressServer({
  controllers: [UserController],
});

app.use(morgan('dev'));
app.use(bodyParser.json());

app.listen(port, () =>
  console.log(
    chalk.green(`⚡️⚡️⚡️ Server is running 🚀🚀🚀 at ${host}:${port}`)
  )
);
