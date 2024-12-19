import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Event } from 'src/modules/event/entity/event.entity';
import { Comment } from 'src/modules/comment/entity/comment.entity';
import { Image } from 'src/modules/image/entity/image.entity';
import { RolesTypes } from 'src/auth/guards/roles.interface';
import { Catalog } from 'src/modules/catalog/catalog.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ enum: RolesTypes, default: RolesTypes.USER})
  role: RolesTypes;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar', unique: true })
  phoneNumber: string;

  @OneToMany(() => Event, (event) => event.creator)
  events: Event[];

  @OneToMany(() => Image, (image) => image.user)
  images: Image[];

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];

  @OneToMany(() => Catalog, catalog => catalog.user)
  catalogs: Catalog[];
}
