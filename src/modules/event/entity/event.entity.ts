import { User } from 'src/modules/user/entity/user.entity';
import { Image } from 'src/modules/image/entity/image.entity';
import {
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.events)
  creator: User;

  @ManyToMany(() => User, (user) => user.events)
  users: User[];

  @OneToMany(() => Image, (image) => image.event)
  images: Image[];
}
