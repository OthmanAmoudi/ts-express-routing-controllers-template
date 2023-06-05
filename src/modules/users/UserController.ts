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
import { ExampleService } from './userService';
import { CreateUserDto, UserDto } from '../dtos';

@JsonController('/users')
export class UserController {
  constructor(
    private serviceInstance: ExampleService = Container.get(ExampleService)
  ) {}

  @Get('/test')
  async getData() {
    const x = await this.serviceInstance.getData();
    return { data: x };
  }

  @Get('')
  getAll(@Body() body: UserDto) {
    const x = this.serviceInstance.getUsers();
    return { msg: 'This action returns all users', user: body, users: x };
  }

  @Get('/:id')
  getOne(@Param('id') id: number, @QueryParam('limit') limit: number) {
    return { msg: 'This action returns user #', id: id, limit: limit };
  }

  @Post('/')
  async post(@Body() user: CreateUserDto) {
    const x = await this.serviceInstance.getData();
    return {
      msg: 'User created',
      your_user: x,
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
