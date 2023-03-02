export class CreateOrderDto {
  id: number;
  products: number[];
  clientName: string;
  phone: string;
  country: string;
  city: string;
  address: string;
}
