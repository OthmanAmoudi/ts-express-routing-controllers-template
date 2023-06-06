import {
  Middleware,
  ExpressErrorMiddlewareInterface,
  HttpError,
} from 'routing-controllers';

@Middleware({ type: 'after' })
export class CustomErrorHandler implements ExpressErrorMiddlewareInterface {
  error(error: any, request: any, response: any, next: (err: any) => any) {
    if (error instanceof HttpError) {
      if (error.httpCode === 404) {
        response.status(404).json({ message: 'Page not found' });
      } else {
        response.status(error.httpCode).json(error);
      }
    } else {
      response.status(500).json(error);
    }
    // console.log(error);
    // next(JSON.stringify(error.errors[0].constraints));
    next(error);
  }
}
