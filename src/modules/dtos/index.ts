import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  Validate,
} from 'class-validator';
import { IsNumberLetter } from '../../custom/customValidators';
import { Exclude } from 'class-transformer';

export class CreateUserDto {
  @IsOptional()
  name: string;

  @IsOptional()
  contact: string;

  @IsOptional()
  country: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(9)
  @Validate(IsNumberLetter)
  @MaxLength(32)
  password: string;
}

export class LoginUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @MinLength(8)
  @Validate(IsNumberLetter)
  @IsNotEmpty()
  password: string;
}

export class SendUserDto {
  name: string;
  email: string;
  contact: string;
  country: string;
  @Exclude()
  password: string;
  @Exclude()
  id: number;
  @Exclude()
  createdAt: Date;
  @Exclude()
  updatedAt: Date;
}
