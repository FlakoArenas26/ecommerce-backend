export class CreateProductDto {
  name: string;
  description: string;
  brand: string;
  size: string;
  price: number;
  discount?: number;
}
