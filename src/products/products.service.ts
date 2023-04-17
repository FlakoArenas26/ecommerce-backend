import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  create(createProductDto: CreateProductDto) {
    return this.productRepository.save(createProductDto);
  }

  findAll() {
    return this.productRepository.find();
  }

  findByIds(ids: number[]) {
    return this.productRepository.find({ where: { id: In(ids) } });
  }

  async findOne(id: number) {
    return this.productRepository.findOneBy({ id });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.productRepository.update(id, { ...updateProductDto });
  }

  remove(id: number) {
    return this.productRepository.delete({ id });
  }

  async subtractQuantity(id: number, quantity: number) {
    const product = await this.findOne(id);
    const newQuantity = product.quantity - quantity;
    if (newQuantity >= 0) {
      this.update(id, { ...product, quantity: newQuantity });
      return true;
    }
    return false;
  }
}
