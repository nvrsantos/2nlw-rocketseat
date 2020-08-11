import Knex from 'knex'

export async function up(knex: Knex) {
    return knex.schema.createTable('classes', table => {
        table.increments('id').primary()
        table.string('title').notNullable()
        table.string('desc').notNullable()
        table.string('subject').notNullable()
        table.decimal('cost').notNullable()
        table.integer('teacher_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('classes')
}