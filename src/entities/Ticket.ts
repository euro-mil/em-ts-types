import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./";
import { Bet } from "./Bet";

export enum TicketStatus {
  IDLE = "idle",
  DELETED = "deleted",
  CONFIRMED = "confirmed",
}

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.id, { nullable: false })
  user: User;

  @Column({ type: "date" })
  draw_date: Date;

  @Column({ nullable: true })
  price: number;

  @Column({
    type: "enum",
    enum: TicketStatus,
    default: TicketStatus.IDLE,
  })
  status: TicketStatus;

  @Column({ type: "simple-json", nullable: true })
  ocr_response: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Bet, (bet) => bet.ticket)
  bets: Bet;
}
