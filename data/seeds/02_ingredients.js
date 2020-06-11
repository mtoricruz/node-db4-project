
exports.seed = function(knex) {
  return knex('ingredients').insert([
    {
      name: 'Chicken',
      quantity: '0.5 lb',
      recipe_id: 1
    },
    {
      name: 'Hot Water',
      quantity: '5 cups',
      recipe_id: 1
    },
    {
      name: 'Water',
      quantity: '0.5 lb',
      recipe_id: 1
    },
    {
      name: 'Bread',
      quantity: '1 slice',
      recipe_id: 2
    },
    {
      name: 'Cereal of Choice',
      quantity: '1 Bowl',
      recipe_id: 3
    },
    {
      name: 'Milk of Choice',
      quantity: 'Half of Bowl',
      recipe_id: 3
    }
  ]);
};

