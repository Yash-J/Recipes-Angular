import { Injectable} from '@angular/core';

import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs';

@Injectable()
export class RecipeService{
	recipesChanged=new Subject<Recipe[]>();

private recipes:Recipe[]=[
	new Recipe('Veg Kol','Lecker!',
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxL4iUBNq6d2BlIiofLmT6gAOBAAXrGudEhSk-3ung3hJroeXAnw',
		[
		new Ingredient('Beans',2),new Ingredient('Potato',5)
		]),
	new Recipe('Veg Hyd','Super!',
		'data:image/jpeg;base64,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',
		[new Ingredient('Ladyfinger', 4), new Ingredient('Strawberry',10)
		])
];
  constructor(private slService:ShoppingListService){}
  setRecipes(recipes: Recipe [] ) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
	getRecipes(){
		return this.recipes.slice();
	}
	addIngredientsToShoppingList(ingredients:Ingredient[]){
		this.slService.addIngredients(ingredients);
	}
	getRecipe(index:number){
		return this.recipes[index];
	}
	addRecipe(recipe:Recipe){
		this.recipes.push(recipe);
		this.recipesChanged.next(this.recipes.slice());
	}
	updateRecipe(index:number,newRecipe:Recipe){
		this.recipes[index]=newRecipe;
		this.recipesChanged.next(this.recipes.slice());
	}
	deleteRecipe(index:number){
		this.recipes.splice(index,1);
		this.recipesChanged.next(this.recipes.slice());
	}
}
