import { Module } from '@nestjs/common';
import { EventServices } from './event.service';
import { EventController } from './event.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from './entity/event.entity';

@Module({
  controllers: [EventController],
  providers: [EventServices],
  imports: [TypeOrmModule.forFeature([Event])],
})
export class EventModule {}
