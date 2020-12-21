import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { UserSubscription } from "./";

@Entity()
export class Payment {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => UserSubscription, userSubscription => userSubscription.id, { nullable: false })
    userSubscription: UserSubscription;

    @Column()
    amount: number;

    @Column()
    currency: string;

    @Column()
    payment_ref: string;

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}