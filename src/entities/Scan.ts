import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { Ticket } from "./Ticket";

export enum ScanStatus {
  UNKNOWN = "unknown",
  VALID = "valid",
  INVALID = "invalid",
}

@Entity()
export class Scan {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Ticket, (ticket) => ticket.scan)
  tickets: Ticket[];

  @Column({
    type: "enum",
    enum: ScanStatus,
    default: ScanStatus.UNKNOWN,
  })
  status: ScanStatus;

  @Column({ nullable: false })
  image: string;

  @Column({ type: "simple-json", nullable: true })
  ocr: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
