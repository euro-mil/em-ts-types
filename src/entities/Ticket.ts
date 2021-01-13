import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { User, Bet, Scan } from ".";

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

  @OneToMany(() => Bet, (bet) => bet.ticket)
  bets: Bet;

  @ManyToOne(() => Scan, (scan) => scan.id, { nullable: true })
  scan: Scan;

  @Column({ type: "date", nullable: true })
  draw_date: Date;

  @Column({ type: "date", nullable: true })
  extracted_draw_date: Date;

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

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
