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

export enum NotificationStatus {
  SENT = "sent",
  UNSENT = "unsent",
  FAILED = "failed",
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

  @Column({
    type: "enum",
    enum: NotificationStatus,
    default: NotificationStatus.UNSENT,
  })
  email_nofication: NotificationStatus;

  @Column({ type: "simple-json", nullable: true })
  ocr_response: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Bet, (bet) => bet.ticket)
  bets: Bet;
}
