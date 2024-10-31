import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';
import { Ingredient } from '../Shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  changedRecipe = new Subject<Recipe[]>();

  constructor(private shoppingService: ShoppingService) {}

  recipes: Recipe[] = [];
  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'A Logo Test Recipe',
  //     'This is simply a test',
  //     'https://i.pinimg.com/736x/8d/c5/31/8dc531fd1168a51c9e5bc9aca0d45051.jpg',
  //     [new Ingredient('Meat', 2), new Ingredient('French Fries', 2)]
  //   ),

  //   new Recipe(
  //     'Turmeric Rice',
  //     'Testing Turmeric Rice',
  //     'https://www.pngall.com/wp-content/uploads/8/Recipe-PNG-Picture.png',
  //     [new Ingredient('Meat', 2), new Ingredient('buns', 2)]
  //   ),
  //   new Recipe(
  //     'Periotic Netom',
  //     'Jemse Chaia ',
  //     'https://assets.hellofresh.com/us/cms/plans/VeggieJumble-Recipe-700x700.png',
  //     [new Ingredient('Meat ', 2), new Ingredient('Fries Rice', 2)]
  //   ),
  // ];

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.changedRecipe.next(this.recipes.slice());
  }

  getRecipe() {
    return this.recipes.slice();
  }

  getRecipes(index: number) {
    return this.recipes[index];
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    debugger;
    console.log('addIngredientToShoppingList', ingredients);
    this.shoppingService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.changedRecipe.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.changedRecipe.next(this.recipes.slice());
  }

  deleteIngredient(index: number) {
    this.recipes.splice(index, 1);
    this.changedRecipe.next(this.recipes.slice());
  }
}
