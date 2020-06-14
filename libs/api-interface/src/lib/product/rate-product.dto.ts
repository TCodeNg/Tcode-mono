import { Max, Min } from 'class-validator';

export class RateProductDto {
  @Min(1, {
    message: 'Rating must be greater than zero'
  })
  @Max(5, {
    message: 'Rating cannot be greater than five'
  })
  rating: number;
}
