import {
  Controller,
  Body,
  Get,
  Post,
  NotFoundError,
  JsonController,
  HttpCode,
  Authorized,
  UseBefore,
  CurrentUser,
} from 'routing-controllers';
import Container from 'typedi';
import { AuthService } from './authService';
import { CreateUserDto, LoginUserDto, SendUserDto } from '../dtos';
import { plainToClass } from 'class-transformer';
import { IsLogged } from '../../middlewares/IsLoggedIn';

@JsonController('/auth')
export class UserController {
  constructor(
    private serviceInstance: AuthService = Container.get(AuthService)
  ) {}

  @Post('/register')
  async createUser(@Body() user: CreateUserDto) {
    await this.serviceInstance.createUserEmailPass(user);
    return {
      status: 200,
      message: 'success. user created',
      // user: plainToClass(SendUserDto, newUser),
    };
  }

  @Get('/login')
  async loginUser(@Body() loginUserDto: LoginUserDto) {
    const user = await this.serviceInstance.loginUser(loginUserDto);
    if (!user) throw new NotFoundError(`User was not found.`);
    return plainToClass(SendUserDto, user);
  }

  @UseBefore(IsLogged)
  @Get('/user')
  async getUser(@CurrentUser() user?: any) {
    return { current_user: user };
    // const user = await this.serviceInstance.getUser(id);
    // if (!user) throw new NotFoundError(`User was not found.`);
    // return plainToClass(SendUserDto, user);
  }
}
