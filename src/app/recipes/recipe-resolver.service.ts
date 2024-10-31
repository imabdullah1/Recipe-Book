import { Injectable } from '@angular/core';

import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Recipe } from './recipes.model';
import { Observable } from 'rxjs';
import { DatastorageService } from '../Shared/datastorage.service';
import { RecipeService } from './recipe.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeResolverService implements Resolve<Recipe[]> {
  constructor(
    private dataStorageService: DatastorageService,
    private recipeService: RecipeService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Recipe[]> {
    const recipe = this.recipeService.getRecipe();

    if (recipe) {
      return this.dataStorageService.fetchRecipes();
    } else {
      return recipe;
    }
  }
}

//
