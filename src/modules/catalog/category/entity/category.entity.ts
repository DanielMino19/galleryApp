import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Catalog } from '../../catalog.entity';

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  category: string;

  @Column({ default: () => 'now()' })
  created_at: Date;

  @ManyToOne(() => Category)
  @JoinColumn({ name: 'father_category' })
  father_category: Category;

  @Column({ nullable: true })
  is_substance_active: boolean;

  @ManyToOne(() => Catalog)
  catalog: Catalog;
}