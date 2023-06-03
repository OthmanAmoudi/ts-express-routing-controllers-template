import 'reflect-metadata';
import { close, open, port, serverConfig } from './src/server';
import hpp from 'hpp';
import helmet from 'helmet';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import { createExpressServer } from 'routing-controllers';

const app = createExpressServer(serverConfig);

app.use(hpp());
// app.use(helmet());
app.use(morgan('dev'));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

app.listen(port, open);
app.on('close', close);
