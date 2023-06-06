# Express, Typescript, Routing-Controllers, Prisma, REST API starter boilerplate
- Auth System with JWT
- Password hash bcrypt
- Prisma + PostgreSQL
- Login 
- Register users
- Private Routes
### Things to get started
- make your .env file as follow: 
- HOST=http://localhost
- PORT=3000
- NODE_ENV=dev
- DATABASE_URL=postgresql://<DB_USER>:<DB_PASSWORD>@<DB_HOST>:5432/<DB_NAME>
- TOKEN_SECRET=<generate a random string>
- JWT_EXP_DAYS=3 
- then install node-dev to auto restart during dev
`npm install -g node-dev`
- lastly run
`npm run dev`
```js
import {
  Controller,
  Param,
  Body,
  Get,
  Post,
  Put,
  Delete,
} from 'routing-controllers';

@Controller()
export class UserController {
  @Get('/users')
  getAll() {
    return { msg: 'This action returns all users' };
  }

  @Get('/users/:id')
  getOne(@Param('id') id: number) {
    return 'This action returns user #' + id;
  }

  @Post('/users')
  post(@Body() user: any) {
    return 'Saving user...';
  }

  @Put('/users/:id')
  put(@Param('id') id: number, @Body() user: any) {
    return 'Updating a user...';
  }

  @Delete('/users/:id')
  remove(@Param('id') id: number) {
    return 'Removing user...';
  }
}
```
