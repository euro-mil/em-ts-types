import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Country, Draw } from "./";

@Entity()
export class Prizes {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Country, country => country.id, { nullable: false })
    country: Country;

    @ManyToOne(() => Draw, draw => draw.id, { nullable: false })
    draw: Draw;

    @Column()
    position: number;

    @Column()
    amount: number;

    @Column()
    currency: string;

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}