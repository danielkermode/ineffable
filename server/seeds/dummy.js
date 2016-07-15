
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({ name: 'a', password: 'a' }),
        knex('users').insert({ name: 'b', password: 'b' }),
        knex('users').insert({ name: 'c', password: 'c' })
      ]);
    })
    .then(() => {
      return Promise.all([
        // Inserts seed entries
        knex('profiles').insert({ description: 'a', imageUrl: 'dummy', userId: 1 }),
        knex('profiles').insert({ description: 'b', imageUrl: 'dummy', userId: 2 }),
        knex('profiles').insert({ description: 'c', imageUrl: 'dummy', userId: 3 })
      ]);
    })
    .then(() => {
      return Promise.all([
        // Inserts seed entries
        knex('statuses').insert({ status: 'a', userId: 1 }),
        knex('statuses').insert({ status: 'b', userId: 1 }),
        knex('statuses').insert({ status: 'c', userId: 1 })
      ]);
    });
};
