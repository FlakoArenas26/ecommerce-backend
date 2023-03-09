import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  brand: string;

  @Column()
  size: string;

  @Column()
  price: number;

  @Column()
  image: string;

  @Column()
  quantity: number;

  @Column()
  rate: number;

  @Column({ nullable: true })
  discount?: number;
}
