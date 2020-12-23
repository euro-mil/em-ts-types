import { Entity, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { User } from "./User";


export enum Provider {
    GOOGLE = "google",
    FACEBOOK = "facebook",
    TWITTER = "twitter",
    APPLE = "apple",
    LOCAL = "local",
}

@Entity()
export class Auth {

    @PrimaryColumn()
    id: string;

    @ManyToOne(() => User, user => user.id, { nullable: false })
    user: number;

    @PrimaryColumn()
    @Column({
        type: "enum",
        enum: Provider,
        default: Provider.LOCAL
    })
    provider: Provider;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    display_name: string;

    @Column()
    email: string;

    @Column({ nullable: true })
    email_secondary: string;

    @Column()
    auth_token: string;

    @Column({ nullable: true })
    photo: string;

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}