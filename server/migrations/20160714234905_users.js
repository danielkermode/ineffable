
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('users', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.unique('name');
    table.string('password').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users').then(() => {
    //console.log('users table was dropped');
  });
};
