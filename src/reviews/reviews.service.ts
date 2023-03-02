import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { Review } from './review.entity';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(Review)
    private readonly reviewRepository: Repository<Review>,
  ) {}

  create(createReviewDto: CreateReviewDto) {
    return this.reviewRepository.save(createReviewDto);
  }

  findAll(productId: number) {
    return this.reviewRepository.findBy({ productId });
  }

  findOne(id: number) {
    return this.reviewRepository.findOneBy({ id });
  }

  update(id: number, updateReviewDto: UpdateReviewDto) {
    return this.reviewRepository.save({
      id,
      ...updateReviewDto,
    });
  }

  remove(id: number) {
    return this.reviewRepository.delete({ id });
  }
}
