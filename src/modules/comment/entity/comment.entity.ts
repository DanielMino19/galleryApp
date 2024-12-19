import { User } from 'src/modules/user/entity/user.entity';
import { Image } from 'src/modules/image/entity/image.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.comments)
  user: User;

  @ManyToOne(() => Image, (image) => image.comments)
  image: Image;
}
