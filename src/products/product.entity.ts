import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @Column()
  price: number;

  @Column()
  image: string;

  @Column()
  quantity: number;

  @Column({ nullable: true })
  rate: number;

  @Column({ nullable: true })
  discount?: number;
}
