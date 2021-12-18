import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createUsers1639766975273 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "users",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name: "name",
                    type: "varchar",

                },
                {
                    name: "username",
                    type: "varchar",
                    isUnique: true
                },
                {
                    name: "password",
                    type: "varchar",

                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
    }

}
