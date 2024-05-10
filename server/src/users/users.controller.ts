import { UsersService } from './users.service';
import {
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { UsersCreateDto } from './dto/users.create.dto';
import { ResultDto } from 'src/dto/result.dto';
import { AuthService } from 'src/auth/auth.service';
import { LocalAuthGuard } from 'src/guard/local-auth.guard';
import { JwtAuthGuard } from 'src/guard/jwt-auth.guard';
import { Public } from 'src/decorators/auth.decorator';
import { RoleGuard } from 'src/guard/roles.guard';
import { Roles } from 'src/decorators/roles.decorator';
import { Role } from 'src/users/enums/role.enum';
import { HealthInfoCreateDto } from 'src/health-info/dto/healthInfo.create.dto';
import { CurrentUser } from 'src/decorators/current-user.decorator';
import { Users } from './entity/users.entity';
import { UsersUpdateDto } from './dto/users.update.dto';

@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UsersService,
    private authService: AuthService,
  ) {}

  @Public()
  @Post('regiter')
  async createUser(
    @Body() profileInfo: UsersCreateDto,
    @Body() healthInfo: HealthInfoCreateDto,
  ): Promise<ResultDto> {
    return this.userService.createUser(profileInfo, healthInfo);
  }

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.body);
  }

  @Post('logout')
  @UseGuards(JwtAuthGuard)
  async logout(@Request() req) {
    await this.authService.logout(req.user.username);
  }

  @Roles(Role.Admin)
  @Get('all')
  @UseGuards(JwtAuthGuard, RoleGuard)
  async findAll(): Promise<any> {
    return this.userService.findAll();
  }

  @Get(':id')
  @Roles(Role.Admin)
  @UseGuards(JwtAuthGuard)
  async findById(@Param('id') id: string): Promise<any> {
    return this.userService.findById(id);
  }

  @Put('update/:id')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles(Role.Admin)
  async updateUserById(
    @Param('id') id: number,
    @Body() usersUpdateDto: UsersUpdateDto,
  ): Promise<any> {
    return this.userService.update(id, usersUpdateDto);
  }

  @Put('update')
  @UseGuards(JwtAuthGuard)
  @Roles(Role.User, Role.Admin)
  async updateUser(
    @CurrentUser('id') id: number,
    @Body() usersUpdateDto: UsersUpdateDto,
  ): Promise<any> {
    return this.userService.update(id, usersUpdateDto);
  }

  @Delete('delete/:id')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles(Role.Admin) // Assuming only admins can delete users
  async delete(@Param('id') id: number): Promise<ResultDto> {
    return this.userService.remove(id);
  }

  @Delete('delete')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles(Role.User)
  async deleteAccount(@CurrentUser('id') id: number): Promise<ResultDto> {
    return this.userService.remove(id);
  }
}
