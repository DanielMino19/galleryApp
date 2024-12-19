import {
  BadGatewayException,
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';
import { userDTO } from './dto/user.dto';
import { Payload } from 'src/auth/types/payload.interfaces';
import { LoginDTO } from 'src/auth/dto/auth.dto';
import * as bcrypt from 'bcrypt';
import { CryptService } from './crypt.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
    private cryptService: CryptService
  ) {}

  async getAllUsers() {
    try {
      return await this.userRepo.find();
    } catch (error) {
      throw new BadGatewayException('Error in getAllUsers', error);
    }
  }

  async createUser(user: userDTO) {
    try {
      const encryptedPhone = this.cryptService.encryptPhoneNumber(user.phoneNumber)

      const phoneFound = await this.userRepo.findOne({
        where: {
          phoneNumber: encryptedPhone,
        },
      });

      if (phoneFound) {
        return new HttpException(
          'this phone has already been registered',
          HttpStatus.CONFLICT
        );
      }
     const userCrypt : userDTO = {
        ...user,
        phoneNumber: encryptedPhone
      }
      const createdUser = this.userRepo.create(userCrypt);
      return await this.userRepo.save(createdUser);
      
    } catch (error) {
      return new HttpException('Error creating user', HttpStatus.BAD_REQUEST , {
        cause: error
      });
    }
  }

  async findByLogin( loginDTO: LoginDTO ){
    try {
      const decrypPhone = this.cryptService.encryptPhoneNumber(loginDTO.phoneNumber)
      const user = await this.userRepo.findOne({
        where:{
          phoneNumber: decrypPhone
        }
      })
      if (!user) {
        return new BadRequestException('User does not exist');
      }
      if (decrypPhone === user.phoneNumber) {
        return user;
      } else {
        throw new BadRequestException('Invalid credentials');
      }

    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  sanitizeUser(user: User) {
    return {
      ...user,
      phoneNumber: undefined
    };
  }


  async findByPayload(payload: Payload) {
    try {
      const { phoneNumber } = payload;
      return await this.userRepo.findOne({ where:{
        phoneNumber: phoneNumber
      } });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

}
