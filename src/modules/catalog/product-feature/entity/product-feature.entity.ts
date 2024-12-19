import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Product } from '../../products/entity/products.entity';
import { Catalog } from '../../catalog.entity';

@Entity('productFeature')
export class ProductFeature {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Product)
  @JoinColumn({ name: 'product_id' })
  product: Product;

  @ManyToOne(() => Catalog)
  catalog: Catalog;

  @Column({ nullable: true })
  description: string;

  @Column({ name: 'activeIngredient', nullable: true })
  activeIngredient: string;

  @Column({ name: 'modeOfAction', nullable: true })
  modeOfAction: string;

  @Column({ name: 'actionSite', nullable: true })
  actionSite: string;

  @Column({ name: 'applicationMethod', nullable: true })
  applicationMethod: string;

  @Column({ name: 'toxicologicalClassification', nullable: true })
  toxicologicalClassification: string;

  @Column({ nullable: true })
  formulation: string;

  @Column({ name: 'weedType', nullable: true })
  weedType: string;

  @Column({ nullable: true })
  pdffiles: string;

  @Column({ name: 'applicationTimingCrops', nullable: true })
  applicationTimingCrops: string;

  @Column({ name: 'applicationTimingWeeds', nullable: true })
  applicationTimingWeeds: string;

  @Column({ name: 'actionForm', nullable: true })
  actionForm: string;

  @Column({ name: 'applicationLocation', nullable: true })
  applicationLocation: string;

  @Column({ name: 'safetyDataSheet', nullable: true })
  safetyDataSheet: string;

  @Column({ name: 'downloadMarbete', nullable: true })
  downloadMarbete: string;

  @Column({ name: 'downloadCommercialFlyer', nullable: true })
  downloadCommercialFlyer: string;

}