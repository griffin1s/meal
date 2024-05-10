import { Users } from './entity/users.entity';
import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UsersCreateDto } from './dto/users.create.dto';
import { UsersUpdateDto } from './dto/users.update.dto';
import { ResultDto } from 'src/dto/result.dto';
import * as bcrypt from 'bcrypt';
import { HealthInfoCreateDto } from 'src/health-info/dto/healthInfo.create.dto';
import { HealthInfo } from 'src/health-info/health-info.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private userRepository: Repository<Users>,
    @Inject('HEALTHINFO_REPOSITORY')
    private healthInfoRepository: Repository<HealthInfo>,
  ) {}

  async findAll(): Promise<Users[]> {
    return this.userRepository.find();
  }

  async findById(id): Promise<Users | undefined> {
    return this.userRepository.findOne({ where: { id } });
  }

  async update(id: number, attrs: Partial<UsersUpdateDto>) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('user not found');
    }
    Object.assign(user, attrs);
    return await this.userRepository.save(user);
  }

  async remove(id: number) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('user not found');
    }
    await this.userRepository.remove(user);
    return {
      status: 200,
      message: `user id=${id} was removed`,
    };
  }

  async createUser(
    profileInfo: UsersCreateDto,
    healthInfo: HealthInfoCreateDto,
  ): Promise<ResultDto> {
    let user = profileInfo;
    user.password = bcrypt.hashSync(profileInfo.password, 8);

    try {
      const newUser = this.userRepository.create(user);

      const savedUser = await this.userRepository.save(newUser);

      healthInfo.user = savedUser; // Associate HealthInfo with the user
      await this.healthInfoRepository.save(healthInfo);

      return { status: 201, message: 'Success' };
    } catch (error) {
      return { status: error.status, message: error.message };
    }
  }

  async findByUsername(username: string): Promise<Users | undefined> {
    const user = await this.userRepository.findOne({ where: { username } });
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return user;
  }

  async getUserInfo(userId: number): Promise<any> {
    try {
      const userWithHealthInfo = await this.userRepository
        .createQueryBuilder('user')
        .leftJoinAndSelect('user.healthInfo', 'healthInfo')
        .where('user.id = :userId', { userId })
        .getOne();

      return userWithHealthInfo;
    } catch (error) {
      console.log(error);
      throw new Error('Failed to fetch user profile');
    }
  }
}
