import { Gender } from 'src/health-info/enums/gender.enum';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class UsersUpdateDto {
  @IsOptional()
  @IsNotEmpty({ message: 'Username must not be empty' })
  @IsString({ message: 'Username must be a string' })
  username: string;

  @IsOptional()
  @IsNotEmpty({ message: 'First name must not be empty' })
  @IsString({ message: 'First name must be a string' })
  firstName: string;

  @IsOptional()
  @IsNotEmpty({ message: 'Last name must not be empty' })
  @IsString({ message: 'Last name must be a string' })
  lastName: string;

  @IsOptional()
  @IsNotEmpty({ message: 'Email must not be empty' })
  @IsEmail({}, { message: 'Email must be a valid email address' })
  email: string;

  @IsOptional()
  @IsNotEmpty({ message: 'Password must not be empty' })
  password: string;

  @IsOptional()
  @IsNotEmpty({ message: 'RepetePassword must not be empty' })
  repetePassword: string;
}
