import { HealthInfo } from '../../health-info/health-info.entity';
import { Exclude } from 'class-transformer';
import { IsEmail, IsEnum, IsString, MinLength } from 'class-validator';
import { Role } from 'src/users/enums/role.enum';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { AbstractEntity } from './abstract-entity';

@Entity()
export class Users extends AbstractEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsString()
  @MinLength(2)
  @MinLength(50)
  firstName: string;

  @Column()
  @IsString()
  @MinLength(2)
  @MinLength(50)
  lastName: string;

  @Column({ unique: true })
  @IsString()
  @MinLength(3)
  @MinLength(50)
  username: string;

  @Column()
  @IsEmail()
  email: string;

  @Column()
  @Exclude() // This property will be excluded from validation
  password: string;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.User,
  })
  @IsEnum(Role)
  roles: Role;

  @OneToOne(() => HealthInfo)
  @JoinColumn()
  healthInfo: HealthInfo;
}
