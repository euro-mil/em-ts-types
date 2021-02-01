import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { Ticket } from "./Ticket";
import { Country } from "./Country";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Ticket, (ticket) => ticket.user)
  tickets: Ticket[];

  @ManyToOne(() => Country, (country) => country.id, { nullable: true })
  country: Country;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  photo: string;

  @Column({ nullable: true })
  email_secondary: string;

  @Column({ nullable: true })
  refreshToken: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
