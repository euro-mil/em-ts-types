import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Prizes, Ticket } from ".";

export enum BetStatus {
  PROCESSED = "Processed",
  UNPROCESSED = "Unprocessed",
}
@Entity()
export class Bet {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Ticket, (ticket) => ticket.id, { nullable: false })
  ticket: Ticket;

  @Column("int", { array: true })
  numbers: number[];

  @Column("int", { array: true })
  stars: number[];

  @OneToOne(() => Prizes)
  @JoinColumn()
  prize: Prizes;

  @Column({
    type: "enum",
    enum: BetStatus,
    default: BetStatus.UNPROCESSED,
  })
  status: BetStatus;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
