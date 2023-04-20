import { Product } from './../products/product.entity';
import { ProductsService } from './../products/products.service';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReviewDto } from './dto/create-review.dto';
import { Review } from './review.entity';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(Review)
    private readonly reviewRepository: Repository<Review>,
    private readonly productsService: ProductsService,
  ) {}

  async create(createReviewDto: CreateReviewDto) {
    const { productId } = createReviewDto;
    const res = await this.reviewRepository.save(createReviewDto);
    const reviews = await this.reviewRepository.findBy({ productId });
    let totalRate = 0;
    for (const review of reviews) {
      totalRate += review.rate;
    }
    const averageRate = Math.floor(totalRate / reviews.length);
    await this.productsService.update(productId, { rate: averageRate });

    return res;
  }

  findAll(productId: number) {
    return this.reviewRepository.findBy({ productId });
  }
}
