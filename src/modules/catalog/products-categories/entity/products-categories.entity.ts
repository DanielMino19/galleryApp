import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Product } from '../../products/entity/products.entity';
import { Category } from '../../category/entity/category.entity';
import { Catalog } from '../../catalog.entity';


@Entity('products_categories')
export class ProductCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Product)
  @JoinColumn({ name: 'product_id' })
  product: Product;

  @ManyToOne(() => Category)
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @ManyToOne(() => Catalog)
  catalog: Catalog;
}
