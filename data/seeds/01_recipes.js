
exports.seed = function(knex) {
  return knex('recipes').insert([
    {name: 'Chicken Noodle Soup'},
    {name: 'Toast'},
    {name: 'Cereal'}
  ]);
};
