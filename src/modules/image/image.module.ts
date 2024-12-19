import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Image } from './entity/image.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Image])],

})
export class ImageModule {
  
}
