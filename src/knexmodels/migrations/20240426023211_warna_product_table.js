/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('warna_product', (table) => {
        table.increments("id").primary()
        table.string("color_shown")
        table.string("style")
        table.integer("id_product")
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('warna_product')
};
