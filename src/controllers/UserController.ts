import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import {
  JsonController,
  Param,
  Body,
  Get,
  Post,
  Put,
  Delete,
  QueryParam,
} from 'routing-controllers';
import Container from 'typedi';
import { ExampleService } from '../services/userService';

export class CreateUserDto {
  @IsEmail()
  public email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(9)
  @MaxLength(32)
  public password: string;
}

export class User {
  @IsEmail()
  email: string;

  @MinLength(6)
  password: string;
}

@JsonController('/users')
export class UserController {
  serviceInstance = Container.get(ExampleService);

  @Get('')
  getAll(@Body() body: User) {
    const x = this.serviceInstance.getUsers();
    return { msg: 'This action returns all users', user: body, users: x };
  }

  @Get('/:id')
  getOne(@Param('id') id: number, @QueryParam('limit') limit: number) {
    return 'This action returns user #' + id + ' with limit of ' + limit;
  }

  @Post('/')
  post(@Body() user: CreateUserDto) {
    return {
      msg: 'User created',
      your_user: user,
    };
  }

  @Put('/:id')
  put(@Param('id') id: number, @Body() user: any) {
    return 'Updating a user...';
  }

  @Delete('/:id')
  remove(@Param('id') id: number) {
    return 'Removing user...';
  }
}
