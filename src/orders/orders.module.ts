import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './order.entity';
import { ProductsModule } from 'src/products/products.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Order]), ProductsModule, AuthModule],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
