import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Index, OneToMany } from "typeorm";
import { Prizes } from ".";

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

    @Index()
    @Column({ type: 'date' })
    date: Date

    @Column({
        type: "enum",
        enum: DrawStatus,
        default: DrawStatus.IDLE
    })
    status: DrawStatus;

    @OneToMany(() => Prizes, prizes => prizes.draw)
    prizes: Prizes;

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}