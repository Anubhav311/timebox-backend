
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {name: "test name 1", email: 'test@testmail.com', password: 'test password'},
        {name: "test name 2", email: 'test@testmail.com', password: 'test password'},
        {name: "test name 3", email: 'test@testmail.com', password: 'test password'}
      ]);
    });
};
