import {
  Middleware,
  ExpressErrorMiddlewareInterface,
  HttpError,
} from 'routing-controllers';

@Middleware({ type: 'after' })
export class CustomErrorHandler implements ExpressErrorMiddlewareInterface {
  error(error: any, request: any, response: any, next: (err: any) => any) {
    if (error instanceof HttpError) {
      response.status(error.httpCode).json(error);
      console.log(error);
    }
    // console.log(error);
    // next(JSON.stringify(error.errors[0].constraints));
    if (error.httpCode !== 400) {
      response.status(500).json(error);
    }
    next('_err_');
  }
}
