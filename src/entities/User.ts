import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity('users')
export class User {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    username: string;

    @Column()
    password: string;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}