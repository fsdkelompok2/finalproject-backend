/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('gambar_product', (table) => {
      table.increments("id").primary()
      table.string("nama_gambar")
      table.integer("id_warna_product")
    })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTable('gambar_product')
  };
  