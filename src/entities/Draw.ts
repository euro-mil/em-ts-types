import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

export enum DrawStatus {
    IDLE = "idle",
    VALID = "valid",
}

@Entity()
export class Draw {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("int", { array: true })
    numbers: number[];

    @Column("int", { array: true })
    stars: number[];

    @Column({ type: 'timestamp' })
    date: Date

    @Column({
        type: "enum",
        enum: DrawStatus,
        default: DrawStatus.IDLE
    })
    status: DrawStatus;

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}