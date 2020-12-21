import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { User, Subscription } from ".";

@Entity()
export class UserSubscription {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, user => user.id)
    user: User;

    @ManyToOne(() => Subscription, subscription => subscription.id, { nullable: false })
    subscription: Subscription;

    @Column()
    subscription_ref: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}