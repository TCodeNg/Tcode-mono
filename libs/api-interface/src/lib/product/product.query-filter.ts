export interface ProductQueryFilter {
  limit: number;
  page: number;
  skip?: number;
  [key: string]: any;
}
