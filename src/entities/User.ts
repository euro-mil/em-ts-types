import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { Ticket } from "./Ticket";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

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
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @OneToMany(() => Ticket, (ticket) => ticket.user)
    tickets: Ticket;
}