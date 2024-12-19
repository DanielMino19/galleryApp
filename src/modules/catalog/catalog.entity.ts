import { Column, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Entity } from "typeorm/decorator/entity/Entity";
import { User } from "../user/entity/user.entity";
import { Product } from "./products/entity/products.entity";
import { Supplier } from "./supplier/entity/supplier.entity";
import { ProductCategory } from "./products-categories/entity/products-categories.entity";

@Entity('catalogs')
export class Catalog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => User, user => user.catalogs)
  user: User;

  @OneToMany(() => Product, product => product.catalog)
  products: Product[];

  // revisar eeste 
  @ManyToOne(() => Catalog, catalog => catalog.products)
  catalog: Catalog;

  //El catalogo deberia tener varios proveedores 
  @OneToOne(() => Supplier)
  supplier: Supplier;

  @OneToMany(() => ProductCategory, productCategory => productCategory.product)
  categories: ProductCategory[];

}