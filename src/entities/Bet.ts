import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Ticket } from ".";

@Entity()
export class Bet {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Ticket, ticket => ticket.id, { nullable: false })
    ticket: Ticket;

    @Column("int", { array: true })
    numbers: number[];

    @Column("int", { array: true })
    stars: number[];

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}