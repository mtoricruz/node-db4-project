
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments();
        tbl.text('name', 128)
            .unique()
            .notNullable();
    })
    .createTable('ingredients', tbl => {
        tbl.increments();
        tbl.text('name', 128)
            .unique()
            .notNullable();
        tbl.text('quantity', 50)
            .notNullable();
        // foreign key
        tbl.integer('recipe_id')
            .unsigned()
            .references('recipes.id')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
    })
    .createTable('instructions', tbl => {
        tbl.increments();
        tbl.text('instructions')
            .unique()
            .notNullable();
        tbl.integer('step_number')
            .notNullable();
        // foreign key
        tbl.integer('recipe_id')
            .unsigned()
            .references('recipes.id')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('instructions')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
