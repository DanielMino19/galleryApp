import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './modules/user/user.module';
import { EventModule } from './modules/event/event.module';
import { ImageModule } from './modules/image/image.module';
import { CommentModule } from './modules/comment/comment.module';
import { ConnectOptions } from 'typeorm';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './modules/catalog/products/products.module';
import { CategoryModule } from './modules/catalog/category/category.module';
import { ProductsCategoriesModule } from './modules/catalog/products-categories/products-categories.module';
import { SupplierModule } from './modules/catalog/supplier/supplier.module';
import { ProductFeatureModule } from './modules/catalog/product-feature/product-feature.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY,
      signOptions: {expiresIn: '8h'}
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      synchronize: true,
      // migrationsRun: true,
      logging: true,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
    } as ConnectOptions),
    UserModule,
    EventModule,
    ImageModule,
    CommentModule,
    AuthModule,
    
    ProductsModule,
    CategoryModule,
    ProductsCategoriesModule,
    SupplierModule,
    ProductFeatureModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
