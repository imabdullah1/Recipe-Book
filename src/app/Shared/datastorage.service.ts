import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipes.model';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DatastorageService {
  storageUrl =
    'https://recipe-book-4755-default-rtdb.firebaseio.com/recipes.json';

  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipe();
    return this.http.put(this.storageUrl, recipes).subscribe((responceData) => {
      console.log(responceData);
    });
  }

  fetchRecipes() {
    return this.http.get<Recipe[]>(this.storageUrl).pipe(
      map((recipes) => {
        return recipes.map((recipe) => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : [],
          };
        });
      }),
      tap((recipe) => {
        this.recipeService.setRecipes(recipe);
      })
    );
  }
}
