import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from './entity/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CryptService } from './crypt.service';


@Module({
  controllers: [UserController],
  providers: [UserService, CryptService],
  imports: [TypeOrmModule.forFeature([User])],
  exports: [UserService]
})
export class UserModule {}
