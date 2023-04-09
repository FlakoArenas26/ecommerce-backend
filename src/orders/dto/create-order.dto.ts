export class CreateOrderDto {
  id: number;
  products: object[];
  clientName: string;
  phone: string;
  country: string;
  city: string;
  address: string;
}
