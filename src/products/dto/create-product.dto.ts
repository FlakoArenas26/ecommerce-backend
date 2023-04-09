export class CreateProductDto {
  name: string;
  brand: string;
  image: string;
  price: number;
  rate?: number;
  quantity: number;
  discount?: number;
  aboutMe: string;
  sizes: string[];
}
