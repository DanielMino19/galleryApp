import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { ProductCategory } from '../../products-categories/entity/products-categories.entity';
import { Supplier } from '../../supplier/entity/supplier.entity';
import { Catalog } from '../../catalog.entity';
import { ProductFeature } from '../../product-feature/entity/product-feature.entity';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  formulacion: string;

  @Column({ nullable: true })
  img: string;

  @Column({ type: 'timestamp with time zone', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ nullable: true })
  is_active_substance: boolean;

  @Column({ nullable: true })
  stock: number;

  @Column({ nullable: true })
  code: string;

  @Column({ nullable: true })
  unid: string;

  @Column({ nullable: true })
  env: number;

  @ManyToOne(() => Supplier)
  @JoinColumn({ name: 'supplier_id' })
  supplier: Supplier;

  @ManyToOne(() => Catalog, catalog => catalog.products)
  catalog: Catalog;

  @OneToMany(() => ProductCategory, productCategory => productCategory.product)
  categories: ProductCategory[];

  @OneToOne(() => ProductFeature)
  @JoinColumn()
  feature: ProductFeature;
  
}