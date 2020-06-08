export interface ProductRating {
  score: number;
  totalRatings: number;
  userRated: boolean; // True if current user has rated this product
}
