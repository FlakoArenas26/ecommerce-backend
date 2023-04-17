import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    type: 'jsonb',
    array: false,
    default: () => "'[]'",
    nullable: false,
  })
  products: object[];

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  country: string;

  @Column()
  city: string;

  @Column()
  address: string;

  @Column()
  price: number;

  @Column('text', { default: 'New' })
  status: string;

  @CreateDateColumn()
  date: Date;
}
