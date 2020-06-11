const db = require("../data/db-config.js");

function getRecipes() {
    return db('recipes')
        .select()
}

function getShoppingList(recipe_id) {
    return db('ingredients') // FROM recipes
        .where({ recipe_id }) 
        .select() 
}

function getInstructions(id) {
    return db('recipes')
        .join('instructions', 'recipes.id', 'instructions.recipe_id')
        .where('instructions.recipe_id', id)
        .select('recipes.name', 'instructions.step_number', 'instructions.instructions')
        .orderBy('instructions.step_number', 'asc')
}

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}