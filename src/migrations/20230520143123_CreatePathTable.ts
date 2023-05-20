import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('drones_path', (table) => {
        table.increments('id').primary();
        table.string('starting_point').notNullable();
        table.string('object').notNullable();
        table.string('destination').notNullable();
        table.string('path').notNullable();
        table.string('total_time').notNullable();
        table.timestamps(true, true);
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists('drones_path');
}

