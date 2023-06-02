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
  @Get('')
  getAll(@Body() body: User) {
    return { msg: 'This action returns all users', user: body };
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
