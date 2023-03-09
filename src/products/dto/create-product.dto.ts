export class CreateProductDto {
  name: string;
  description: string;
  brand: string;
  size: string;
  image: string;
  price: number;
  rate: number;
  quantity: number;
  discount?: number;
}
