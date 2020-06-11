const express = require('express');
const Recipes = require('../recipes/recipe-model');
const router = express.Router({
    mergeParams: true,
  });

  router.get('/', (req, res) => {
    Recipes.getRecipes()
    .then(recipes => {
      res.json(recipes);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get recipes' });
    });
  });
  
  router.get('/:id', (req, res) => {
    const { id } = req.params;
  
    Recipes.getShoppingList(id)
    .then(recipe => {
      if (recipe) {
        res.json(recipe);
      } else {
        res.status(404).json({ message: 'Could not find recipe with given id.' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get recipes' });
    });
  });
  
  router.get('/:id/instructions', (req, res) => {
    const { id } = req.params;
  
    Recipes.getInstructions(id)
    .then(steps => {
      if (steps.length) {
        res.json(steps);
      } else {
        res.status(404).json({ message: 'Could not find steps for given scheme' })
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Failed to get steps' });
    });
  });

module.exports = router;