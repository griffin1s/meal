import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { IsInt, Min, Max, IsIn, IsEnum } from 'class-validator';
import { Gender } from 'src/health-info/enums/gender.enum';
import { Users } from 'src/users/entity/users.entity';

@Entity()
export class HealthInfo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsInt()
  @Min(18, { message: 'Invalid age' })
  age: number;

  @Column()
  @IsInt()
  @Min(1, { message: 'Invalid weight' })
  weight: number;

  @Column()
  @IsInt()
  @Min(1, { message: 'Invalid height' })
  height: number;

  @Column({
    type: 'enum',
    enum: Gender,
    default: Gender.MALE,
  })
  @IsEnum(Gender)
  gender: Gender;

  @OneToOne(() => Users, (user) => user.healthInfo)
  user: Users;
}
