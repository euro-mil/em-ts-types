import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Country, Draw, User } from "./";

@Entity()
export class Ticket {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Draw, draw => draw.id, { nullable: false })
    draw: Draw;

    @ManyToOne(() => User, user => user.id, { nullable: false })
    user: User;

    @Column({ type: 'timestamp' })
    date: Date

    @Column()
    price: number

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}