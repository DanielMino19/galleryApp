import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { userDTO } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get('all')
  async getAllUsers() {
    return await this.service.getAllUsers();
  }

  @Post('create')
  @HttpCode(201)
  async createUser(@Body() user: userDTO){
    return await this.service.createUser(user)
  }
  
}
