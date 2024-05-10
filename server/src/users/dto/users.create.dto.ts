import { Gender } from 'src/health-info/enums/gender.enum';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class UsersCreateDto {
  @IsNotEmpty()
  username: string;

  @IsOptional()
  @IsNotEmpty({ message: 'First name must not be empty' })
  @IsString({ message: 'First name must be a string' })
  firstName: string;

  @IsOptional()
  @IsNotEmpty({ message: 'Last name must not be empty' })
  @IsString({ message: 'Last name must be a string' })
  lastName: string;

  @IsNotEmpty({ message: 'Email must not be empty' })
  @IsEmail()
  email: string;

  @IsNotEmpty({ message: 'Password must not be empty' })
  password: string;
}
