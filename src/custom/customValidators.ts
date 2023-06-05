import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'IsNumberLetter', async: false })
export class IsNumberLetter implements ValidatorConstraintInterface {
  validate(text: string, args: ValidationArguments) {
    return /[a-z]+/.test(text) && /[0-9]+/.test(text);
  }

  defaultMessage(args: ValidationArguments) {
    return 'The string must contain both letters and numbers';
  }
}

const INSTAGRAM_USERNAME_REGEX = /^[a-zA-Z0-9._]{1,30}$/;

@ValidatorConstraint({ name: 'IsInstagramUsername', async: false })
export class IsInstagramUsername implements ValidatorConstraintInterface {
  validate(username: string, args: ValidationArguments) {
    return INSTAGRAM_USERNAME_REGEX.test(username);
  }

  defaultMessage(args: ValidationArguments) {
    return 'The string is not a valid Instagram username';
  }
}
