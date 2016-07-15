
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('statuses', (table) => {
    table.increments('id').primary();
    table.string('status').notNullable();
    table.integer('userId').notNullable().references('id').inTable('users');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('statuses').then(() => {
    //console.log('statuses table was dropped');
  });
};
