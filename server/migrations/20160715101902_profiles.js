
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('profiles', (table) => {
    table.increments('id').primary();
    table.string('description');
    table.string('imageUrl');
    table.integer('userId').notNullable();
    table.unique('userId');
    table.foreign('userId').references('id').inTable('users');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('profiles').then(() => {
    //console.log('profiles table was dropped');
  });
};
