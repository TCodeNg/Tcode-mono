export interface ProductRating {
  score: number;
  totalRatings: number;
  userScore: number; // True if current user has rated this product
}
