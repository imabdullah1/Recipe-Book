import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipes-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './Shared/dropdown.directive';
import { ShoppingService } from './shopping-list/shopping.service';
import { RecipeService } from './recipes/recipe.service';
import { RecipesStartComponent } from './recipes/recipes-start/recipes-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShortenPipe } from './Shared/shorten.pipe';
import { FilterPipe } from './Shared/filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { RecipeResolverService } from './recipes/recipe-resolver.service';
import { AuthComponent } from './auth/auth/auth.component';
import { SpinnerComponent } from './Shared/loading/spinner/spinner.component';
import { AlertComponent } from './Shared/alert/alert/alert.component';
import { RecipeModule } from './recipes/recipe.module';
import { RecipeRoutingModule } from './recipes/recipe-routing.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';

@NgModule({
  declarations: [
    ShortenPipe,
    AppComponent,
    HeaderComponent,

    DropdownDirective,

    FilterPipe,
    AuthComponent,
    SpinnerComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RecipeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RecipeModule,
    ShoppingListModule,
  ],
  providers: [ShoppingService, RecipeService, RecipeResolverService],
  bootstrap: [AppComponent],
})
export class AppModule {}
