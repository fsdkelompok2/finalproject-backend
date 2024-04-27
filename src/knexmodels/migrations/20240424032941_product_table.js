/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('product', (table) => {
    table.increments("id").primary()
    table.string("nama_product")
    table.string("kategori_product")
    table.integer("harga_product")
    table.text("ket_product")
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('products')
};
