import {
  IsAlphanumeric,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  Validate,
  isAlphanumeric,
} from 'class-validator';
import { IsNumberLetter } from '../../custom/customValidators';

export class CreateUserDto {
  @IsOptional()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(9)
  @IsAlphanumeric()
  @MaxLength(32)
  password: string;
}

export class UserDto {
  @MaxLength(32)
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @MaxLength(32)
  @MinLength(8)
  @Validate(IsNumberLetter)
  @IsNotEmpty()
  password: string;
}
