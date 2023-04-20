import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';

@Controller('products/:productId/reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Post()
  create(
    @Body() createReviewDto: CreateReviewDto,
    @Param('productId') productId,
  ) {
    createReviewDto.productId = parseInt(productId, 10);
    return this.reviewsService.create(createReviewDto);
  }

  @Get()
  findAll(@Param('productId') productId) {
    return this.reviewsService.findAll(productId);
  }
}
