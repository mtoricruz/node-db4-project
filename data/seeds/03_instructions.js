
exports.seed = function(knex) {
  return knex('instructions').insert([
    {
      instructions: 'Boil Water',
      step_number: 1,
      recipe_id: 1
    },
    {
      instructions: 'Add Chicken',
      step_number: 2,
      recipe_id: 1
    },
    {
      instructions: 'Season',
      step_number: 3,
      recipe_id: 1
    },
    {
      instructions: 'Put in Toaster',
      step_number: 1,
      recipe_id: 2
    },
    {
      instructions: 'Pour Cereal in Bowl',
      step_number: 1,
      recipe_id: 3
    },
    {
      instructions: 'Pour Milk in Bowl',
      step_number: 2,
      recipe_id: 3
    }
  ]);
};
