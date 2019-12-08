import { Injectable} from '@angular/core';
import { Store } from '@ngrx/store';
import {Subject} from 'rxjs';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import * as ShoppingListActions from '../shopping-list/store/shopping-list.actions';
import * as fromShoppingList from '../shopping-list/store/shopping-list.reducer';

@Injectable()
export class RecipeService {
	recipesChanged = new Subject<Recipe[]>();

// private recipes:Recipe[]=[
// 	new Recipe('Veg Kol','Lecker!',
// 		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxL4iUBNq6d2BlIiofLmT6gAOBAAXrGudEhSk-3ung3hJroeXAnw',
// 		[
// 		new Ingredient('Beans',2),new Ingredient('Potato',5)
// 		]),
// 	new Recipe('Veg Hyd','Super!',
// 		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxL4iUBNq6d2BlIiofLmT6gAOBAAXrGudEhSk-3ung3hJroeXAnw',
// 		[new Ingredient('Ladyfinger', 4), new Ingredient('Strawberry',10)
// 		])
// ];
private recipes: Recipe[] = [];
  constructor(private slService: ShoppingListService, private store: Store< fromShoppingList.AppState >) {}
  setRecipes(recipes: Recipe [] ) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
	getRecipes() {
		return this.recipes.slice();
	}
	addIngredientsToShoppingList(ingredients: Ingredient[]) {
		// this.slService.addIngredients(ingredients);
		this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients));
	}
	getRecipe(index: number) {
		return this.recipes[index];
	}
	addRecipe(recipe: Recipe) {
		this.recipes.push(recipe);
		this.recipesChanged.next(this.recipes.slice());
	}
	updateRecipe(index: number, newRecipe: Recipe) {
		this.recipes[index] = newRecipe;
		this.recipesChanged.next(this.recipes.slice());
	}
	deleteRecipe(index: number) {
		this.recipes.splice(index, 1);
		this.recipesChanged.next(this.recipes.slice());
	}
}
