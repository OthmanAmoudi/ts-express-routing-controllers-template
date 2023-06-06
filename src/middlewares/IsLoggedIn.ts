import { JwtPayload, verify } from 'jsonwebtoken';
import { ExpressMiddlewareInterface, HttpError } from 'routing-controllers';
import { getJWTheaders } from '../modules/auth/authService';

export class IsLogged implements ExpressMiddlewareInterface {
  use(request: any, response: any, next: (err?: any) => any): any {
    if (getJWTheaders(request.headers['authorization'])) {
      next();
    }
  }
}
