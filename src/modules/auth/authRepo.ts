import { Service } from 'typedi';
import { PrismaClient, User } from '@prisma/client';
import { CreateUserDto } from '../dtos';

const prisma = new PrismaClient();

const selectOptions = {
  password: false,
  createdAt: false,
  updatedAt: false,
};

@Service()
export class UsersRepo {
  async getUserById(id: number): Promise<User | null> {
    return await prisma.user.findFirst({
      where: { id },
    });
  }

  async getUserByEmail(email: string): Promise<User | null> {
    return await prisma.user.findFirst({
      where: { email },
    });
  }

  async createUser(user: CreateUserDto): Promise<any | null> {
    let newUser;
    newUser = await prisma.user.create({
      data: {
        ...user,
      },
    });
    return newUser;
  }
}
