import { Injectable } from '@angular/core';
import { Ingredient } from '../Shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingService {
  // Use Subject instead of EventEmitter
  ingredientsChanged = new Subject<Ingredient[]>();

  startEditing = new Subject<number>();

  constructor() {}

  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 65),
    new Ingredient('Mangoes', 5),
    new Ingredient('Apricot', 6),
  ];

  getEditIngredient(index: number) {
    return this.ingredients[index];
  }

  getIngredient() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    // Emit the updated ingredients array
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    console.log('Add Ingredients: ', ingredients);
    this.ingredients.push(...ingredients);
    // Emit the updated ingredients array
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
