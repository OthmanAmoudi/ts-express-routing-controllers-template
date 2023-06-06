import ms from 'ms';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Service } from 'typedi';
import { UsersRepo } from './authRepo';
import { Action } from 'routing-controllers';
import { Prisma, User } from '@prisma/client';
import { HttpError } from 'routing-controllers';
import { CreateUserDto, LoginUserDto } from '../dtos';

@Service()
export class AuthService {
  constructor(public injectedService: UsersRepo) {}

  signJWT(obj: any): string {
    return jwt.sign(
      obj,
      process.env.TOKEN_SECRET || 'gfhgniuhj34knwefoifubhtg34',
      { expiresIn: ms((process.env.JWT_EXP_DAYS || 3) + 'days') }
    );
  }

  async getUser(id: number): Promise<User | null> {
    return await this.injectedService.getUserById(id);
  }

  async createUserEmailPass(
    createUserDto: CreateUserDto
  ): Promise<User | null> {
    let x;
    try {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(createUserDto.password, salt);
      createUserDto.password = hash;
      x = await this.injectedService.createUser(createUserDto);
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2002') {
          throw new HttpError(403, 'email already in use');
        }
      }
      throw e;
    }
    return x;
  }

  async loginUser(
    loginUserDto: LoginUserDto
  ): Promise<{ user: User; token: string } | null> {
    let token;
    let user: any = await this.injectedService.getUserByEmail(
      loginUserDto.email
    );
    if (user && user.password) {
      let comparsion = await bcrypt.compare(
        loginUserDto.password,
        user?.password
      );
      if (!comparsion) {
        throw new HttpError(404, 'Wrong Password');
      }
      user = {
        email: user.email,
        name: user.name,
      };
      token = this.signJWT(user);
      console.log(token);
    }
    if (user && token) {
      return { user, token };
    } else {
      return null;
    }
  }
}

export const getJWTheaders = (headers: string) => {
  let result: any;
  let token = headers;
  if (token) {
    token = token.split(' ')[1];
    result = jwt.verify(
      token,
      process.env.TOKEN_SECRET || 'gfhgniuhj34knwefoifubhtg34'
    );
  }
  if (!result) {
    throw new HttpError(403, 'you must be logged in to perform that action');
  }
  return result;
};

export const getCurrentUser = async (action: Action) => {
  const headers = action.request.headers['authorization'];
  const token = getJWTheaders(headers);
  return token;
  //dont need to call DB right now
  // return getEntityManager().findOneByToken(User, token);
};

// export const checkAuth = async (
//   action: Action,
//   roles: string[]
// ): Promise<boolean> => {

//   let result: JwtPayload | string;
//   let token = action.request.headers['authorization'];

//   if (token) {
//     token = token.split(' ')[1];
//     result = jwt.verify(
//       token,
//       process.env.TOKEN_SECRET || 'gfhgniuhj34knwefoifubhtg34'
//     );
//   }

//   if (result instanceof Object) {
//     console.log('you are logged in');
//     console.log(typeof result);
//     console.log(JSON.stringify(result));
//   }

//   // 5 june 2023 05:04PM
//   // Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZsb3c1QGVlLmNvbSIsIm5hbWUiOiJiYWRyeSIsImlhdCI6MTY4NjA1OTY3MSwiZXhwIjoxOTQ1MjU5NjcxfQ.JfH0zJ-ZsZPXRJOEC5jDRKkvcrNmXs_lns71iG0Ra14
//   //TODO handle roles
//   // @Authorized("ADMIN")
//   // @Authorized("OPERATOR")
//   // console.log({ result });
//   // const user = await getEntityManager().findOneByToken(User, token);
//   // if (user && !roles.length) return true;
//   // if (user && roles.find(role => user.roles.indexOf(role) !== -1)) return true;
//   return false;
// };
