import { User } from 'src/modules/user/entity/user.entity';
import { Event } from 'src/modules/event/entity/event.entity';
import { Comment } from 'src/modules/comment/entity/comment.entity';
import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Image {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.images)
  user: User;

  @ManyToOne(() => Event, (event) => event.images)
  event: Event;

  @OneToMany(() => Comment, (comment) => comment.image)
  comments: Comment[];
}
