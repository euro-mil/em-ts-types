import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Subscription {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    ref: string;

    @Column()
    amount: number;
}